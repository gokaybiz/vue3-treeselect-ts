<script lang="ts" setup>
import { MENU_BUFFER } from "../constants";
import { watchSize, setupResizeAndScrollEventListeners } from "../utils/index";
import Option from "./TreeselectOption.vue";
import Tip from "./TreeselectTip.vue";
import { computed, onMounted, nextTick, ref, onUnmounted, watch, CSSProperties } from "vue";
import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
import DynamicSlot from "./DynamicSlot.vue";
import { get } from "lodash";
const instance = injectStrict(instanceKey);
const directionMap = {
  top: "top",
  bottom: "bottom",
  above: "top",
  below: "bottom"
};
const menuContainerStyle = computed(() => {
  return instance.props.appendToBody ? ({ zIndex: instance.props.zIndex } as CSSProperties) : "";
});
const beforeListRenderer = computed(() => {
  return instance.beforeListRenderer;
});
const afterListRenderer = computed(() => {
  return instance.afterListRenderer;
});
const entry = computed(() => {
  return instance.getRemoteSearchEntry();
});
const shouldShowSearchPromptTip = computed(() => {
  return instance.trigger.searchQuery === "" && !instance.props.defaultOptions;
});
const options = computed(() => {
  return entry.value.options;
});
const shouldShowNoResultsTip = computed(() => {
  if (options.value instanceof Array) {
    return shouldShowSearchPromptTip.value ? false : entry.value.isLoaded && options.value.length === 0;
  }
  return false;
});

const menuSizeWatcher = ref<{ remove: () => void } | null>(null);
const menuResizeAndScrollEventListeners = ref<{ remove: () => void } | null>(null);

const onMenuOpen = () => {
  adjustMenuOpenDirection();
  setupMenuSizeWatcher();
  setupMenuResizeAndScrollEventListeners();
};
const onMenuClose = () => {
  removeMenuSizeWatcher();
  removeMenuResizeAndScrollEventListeners();
};
const adjustMenuOpenDirection = () => {
  if (!instance.menu.isOpen) return;

  const $menu = instance.getMenuDiv();
  const $control = instance.getControlDiv();
  const menuRect = $menu?.getBoundingClientRect();
  const controlRect = $control.getBoundingClientRect();
  const menuHeight = menuRect?.height;
  const viewportHeight = window.innerHeight;
  const spaceAbove = controlRect.top;
  const spaceBelow = window.innerHeight - controlRect.bottom;
  const isControlInViewport =
    (controlRect.top >= 0 && controlRect.top <= viewportHeight) || (controlRect.top < 0 && controlRect.bottom > 0);
  // TODO:待验证如果不存在置为0是否正常
  console.log(`menuHeight待验证如果不存在置为0是否正常`);
  const hasEnoughSpaceBelow = spaceBelow > (menuHeight || 0) + MENU_BUFFER;
  const hasEnoughSpaceAbove = spaceAbove > (menuHeight || 0) + MENU_BUFFER;

  if (!isControlInViewport) {
    instance.closeMenu();
  } else if (instance.props.openDirection !== "auto") {
    instance.menu.placement = get(directionMap, instance.props.openDirection);
  } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
    instance.menu.placement = "bottom";
  } else {
    instance.menu.placement = "top";
  }
};

const setupMenuSizeWatcher = () => {
  const $menu = instance.getMenuDiv();

  // istanbul ignore next
  if (menuSizeWatcher.value) return;

  menuSizeWatcher.value = {
    remove: watchSize($menu, adjustMenuOpenDirection)
  };
};
const setupMenuResizeAndScrollEventListeners = () => {
  const $control = instance.getControlDiv();

  // istanbul ignore next
  if (menuResizeAndScrollEventListeners.value) return;

  menuResizeAndScrollEventListeners.value = {
    remove: setupResizeAndScrollEventListeners($control, adjustMenuOpenDirection)
  };
};
const removeMenuSizeWatcher = () => {
  if (!menuSizeWatcher.value) return;

  menuSizeWatcher.value.remove();
  menuSizeWatcher.value = null;
};
const removeMenuResizeAndScrollEventListeners = () => {
  if (!menuResizeAndScrollEventListeners.value) return;

  menuResizeAndScrollEventListeners.value.remove();
  menuResizeAndScrollEventListeners.value = null;
};
watch(
  () => instance.menu.isOpen,
  (newValue) => {
    if (newValue) {
      // In case `openMenu()` is just called and the menu is not rendered yet.
      nextTick(onMenuOpen);
    } else {
      onMenuClose();
    }
  }
);
onMounted(() => {
  if (instance.menu.isOpen) {
    nextTick(onMenuOpen);
  }
});
onUnmounted(() => {
  onMenuClose();
});
</script>

<template>
  <div ref="menu-container" class="vue-treeselect__menu-container" :style="menuContainerStyle">
    <transition name="vue-treeselect__menu--transition">
      <div
        v-show="instance.menu.isOpen"
        ref="menu"
        class="vue-treeselect__menu"
        :style="{ maxHeight: instance.props.maxHeight + 'px' }"
        @mousedown.left.stop.prevent="instance.handleMouseDown">
        <DynamicSlot v-if="beforeListRenderer" :slot-function="beforeListRenderer" />
        <template v-if="instance.props.async">
          <Tip v-if="shouldShowSearchPromptTip" type="search-prompt" icon="warning">
            {{ instance.props.searchPromptText }}
          </Tip>
          <Tip v-else-if="entry.isLoading" type="loading" icon="loader">{{ instance.props.loadingText }}</Tip>
          <Tip v-else-if="entry.loadingError" type="error" icon="error">
            {{ entry.loadingError }}
            <a class="vue-treeselect__retry" :title="instance.props.retryTitle" @click="instance.handleRemoteSearch">
              {{ instance.props.retryText }}
            </a>
          </Tip>
          <Tip v-else-if="shouldShowNoResultsTip" type="no-results" icon="warning">
            {{ instance.props.noResultsText }}
          </Tip>
          <div v-else class="vue-treeselect__list">
            <Option v-for="rootNode in instance.forest.normalizedOptions" :key="rootNode.id" :node="rootNode" />
          </div>
        </template>
        <template v-else-if="instance.localSearch.active">
          <Tip v-if="instance.rootOptionsStates.isLoading" type="loading" icon="loader">
            {{ instance.props.loadingText }}
          </Tip>
          <Tip v-else-if="instance.rootOptionsStates.loadingError" type="error" icon="error">
            {{ instance.rootOptionsStates.loadingError }}
            <a class="vue-treeselect__retry" :title="instance.props.retryTitle" @click="instance.loadRootOptions">
              {{ instance.props.retryText }}
            </a>
          </Tip>
          <Tip
            v-else-if="instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0"
            type="no-options"
            icon="warning">
            {{ instance.props.noOptionsText }}
          </Tip>
          <Tip v-else-if="instance.localSearch.noResults" type="no-results" icon="warning">
            {{ instance.props.noResultsText }}
          </Tip>
          <div v-else class="vue-treeselect__list">
            <Option v-for="rootNode in instance.forest.normalizedOptions" :key="rootNode.id" :node="rootNode" />
          </div>
        </template>
        <template v-else>
          <Tip v-if="instance.rootOptionsStates.isLoading" type="loading" icon="loader">
            {{ instance.props.loadingText }}
          </Tip>
          <Tip v-else-if="instance.rootOptionsStates.loadingError" type="error" icon="error">
            {{ instance.rootOptionsStates.loadingError }}
            <a class="vue-treeselect__retry" :title="instance.props.retryTitle" @click="instance.loadRootOptions">
              {{ instance.props.retryText }}
            </a>
          </Tip>
          <Tip
            v-else-if="instance.rootOptionsStates.isLoaded && instance.forest.normalizedOptions.length === 0"
            type="no-options"
            icon="warning">
            {{ instance.props.noOptionsText }}
          </Tip>
          <div v-else class="vue-treeselect__list">
            <Option v-for="rootNode in instance.forest.normalizedOptions" :key="rootNode.id" :node="rootNode" />
          </div>
        </template>
        <DynamicSlot v-if="afterListRenderer" :slot-function="afterListRenderer" />
      </div>
    </transition>
  </div>
</template>
