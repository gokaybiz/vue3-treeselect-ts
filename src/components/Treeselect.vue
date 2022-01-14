<template>
  <div ref="wrapper" :class="wrapperClass">
    <HiddenFields />
    <Control ref="control" />
    <teleport to="body" :disabled="!props.appendToBody">
      <Menu ref="menuRef" :class="appendToBody ? wrapperClass : ''" :style="appendToBodyMenuStyle" />
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import HiddenFields from "@/components/TreeselectHiddenFields.vue";
import Control from "@/components/TreeselectControl.vue";
import Menu from "@/components/TreeselectMenu.vue";
import SingleValue from "@/components/TreeselectSingleValue.vue";
import MultiValue from "@/components/TreeselectMultiValue.vue";
import { computed, onMounted, onUnmounted, provide, reactive, ref, useSlots, watch } from "vue";
import { Forest, Menu as MenuData, LocalSearch, Trigger, props as treeselectProps } from "./symbol";
import { verifyProps } from "@/hooks/VerifyProps";
import nodeOperation from "@/hooks/NodeOperation";
import highlightOption from "@/hooks/HighlightOption";
import delayedLoad from "@/hooks/DelayedLoad";
import menuOperation from "@/hooks/MenuOperation";
import { instance as instanceKey } from "@/components/ProductKey";
import nodeValueOperation from "@/hooks/NodeValueOperation";
import { quickDiff } from "@/utils/quickDiff";
import { cloneDeep } from "lodash";
const props = defineProps(treeselectProps);
verifyProps(props);
const emit = defineEmits(["select", "deselect", "close", "open", "update:modelValue", "search-change"]);
const control = ref<InstanceType<typeof Control>>();
// data
const forest = reactive(new Forest());
const trigger = reactive(new Trigger());
const menu = reactive(new MenuData());
const menuRef = ref<InstanceType<typeof Menu>>();
const wrapper = ref<HTMLDivElement>();
const localSearch = reactive(new LocalSearch());
const wrapperClass = computed(() => {
  return {
    "vue-treeselect": true,
    "vue-treeselect--single": !props.multiple,
    "vue-treeselect--multi": props.multiple,
    "vue-treeselect--searchable": props.searchable,
    "vue-treeselect--disabled": props.disabled,
    "vue-treeselect--focused": trigger.isFocused,
    "vue-treeselect--has-value": hasValue.value,
    "vue-treeselect--open": menu.isOpen,
    "vue-treeselect--open-above": menu.placement === "top",
    "vue-treeselect--open-below": menu.placement === "bottom",
    "vue-treeselect--branch-nodes-disabled": props.disableBranchNodes,
    "vue-treeselect--append-to-body": props.appendToBody
  };
});
const $slots = useSlots();
const beforeListRenderer = $slots["before-list"];
const afterListRenderer = $slots["after-list"];
const customValueLabelRenderer = $slots["value-label"];
const customLabelRenderer = $slots["option-label"];
const getMenuDiv = () => {
  const $menu = menuRef.value?.$refs.menu as HTMLElement;
  return $menu && $menu.nodeName !== "#comment" ? $menu : null;
};
const getControlDiv = () => {
  return control.value?.$el as HTMLElement;
};

const resetSearchQuery = () => {
  trigger.searchQuery = "";
};

const {
  getNode,
  internalValue,
  traverseDescendantsBFS,
  enhancedNormalizer,
  buildForestState,
  isSelected,
  getValue,
  selectedNodes,
  traverseAllNodesDFS,
  traverseDescendantsDFS
} = nodeOperation(props, forest);

const {
  resetHighlightedOptionWhenNecessary,
  highlightLastOption,
  highlightFirstOption,
  setCurrentHighlightedOption,
  highlightPrevOption,
  highlightNextOption,
  shouldShowOptionInMenu
} = highlightOption(props, forest, localSearch, menu, getNode, getMenuDiv);

const {
  handleRemoteSearch,
  loadRootOptions,
  loadChildrenOptions,
  getRemoteSearchEntry,
  initialize,
  rootOptionsStates,
  fixSelectedNodeIds,
  handleLocalSearch
} = delayedLoad(
  props,
  forest,
  trigger,
  internalValue,
  localSearch,
  getNode,
  traverseDescendantsBFS,
  resetHighlightedOptionWhenNecessary,
  enhancedNormalizer,
  buildForestState,
  traverseAllNodesDFS
);

const getValueContainer = () => {
  return control.value?.$refs["value-container"] as InstanceType<typeof SingleValue> | InstanceType<typeof MultiValue>;
};
const getInput = () => {
  return getValueContainer().$refs.input as HTMLDivElement;
};

const blurInput = () => {
  getInput().blur();
};
const focusInput = () => {
  getInput().focus();
};
const { openMenu, toggleClickOutsideEvent, toggleMenu, closeMenu } = menuOperation(
  props,
  emit,
  menu,
  wrapper,
  loadRootOptions,
  resetHighlightedOptionWhenNecessary,
  getMenuDiv,
  getValue,
  resetSearchQuery,
  blurInput
);
const {
  clear,
  hasValue,
  removeLastValue,
  select,
  shouldExpand,
  toggleExpanded,
  blurOnSelect,
  extractCheckedNodeIdsFromValue
} = nodeValueOperation(
  props,
  emit,
  forest,
  localSearch,
  internalValue,
  closeMenu,
  resetSearchQuery,
  getNode,
  buildForestState,
  isSelected,
  traverseDescendantsBFS,
  loadChildrenOptions,
  enhancedNormalizer,
  traverseDescendantsDFS
);
const handleMouseDown = (evt: Event) => {
  if (props.disabled) return;
  const isClickedOnValueContainer = getValueContainer().$el.contains(evt.target);
  if (isClickedOnValueContainer && !menu.isOpen && (props.openOnClick || trigger.isFocused)) {
    openMenu();
  }

  if (blurOnSelect.value) {
    blurInput();
  } else {
    // Focus the input or prevent blurring.
    focusInput();
  }
  blurOnSelect.value = false;
};
const appendToBodyMenuStyle = computed(() => {
  if (props.appendToBody) {
    const controlRect = getControlDiv()?.getBoundingClientRect();
    const offsetY = menu.placement === "bottom" ? controlRect.height : 0;
    return {
      left: Math.round(controlRect.left) + "px",
      top: Math.round(controlRect.top + offsetY) + "px",
      width: controlRect.width + "px"
    };
  }
  return "";
});
provide(instanceKey, {
  props,
  hasValue,
  internalValue,
  menu,
  trigger,
  clear,
  getNode,
  focusInput,
  toggleMenu,
  openMenu,
  getMenuDiv,
  closeMenu,
  removeLastValue,
  select,
  highlightLastOption,
  highlightFirstOption,
  shouldExpand,
  setCurrentHighlightedOption,
  loadChildrenOptions,
  toggleExpanded,
  highlightPrevOption,
  highlightNextOption,
  localSearch,
  getControlDiv,
  getRemoteSearchEntry,
  handleRemoteSearch,
  forest,
  handleMouseDown,
  beforeListRenderer,
  afterListRenderer,
  customValueLabelRenderer,
  isSelected,
  shouldShowOptionInMenu,
  customLabelRenderer,
  selectedNodes,
  rootOptionsStates,
  loadRootOptions
});
watch(
  () => props.alwaysOpen,
  () => {
    if (props.alwaysOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }
);
watch(
  () => props.multiple,
  () => {
    if (props.multiple) {
      buildForestState();
    }
  }
);
watch(
  () => cloneDeep(props.options),
  () => {
    if (props.async) {
      return;
    }
    // Re-initialize options when the `options` prop has changed.
    initialize();
    rootOptionsStates.isLoaded = Array.isArray(props.options);
  },
  {
    deep: true,
    immediate: true
  }
);
watch(
  () => trigger.searchQuery,
  () => {
    if (props.async) {
      handleRemoteSearch();
    } else {
      handleLocalSearch();
    }
    emit("search-change", trigger.searchQuery, props.instanceId);
  }
);

watch(
  () => props.modelValue,
  () => {
    const nodeIdsFromValue = extractCheckedNodeIdsFromValue();
    const hasChanged = quickDiff(nodeIdsFromValue, internalValue.value);
    if (hasChanged) {
      fixSelectedNodeIds(nodeIdsFromValue);
    }
  },
  { immediate: true }
);
watch(
  () => props.disabled,
  (val) => {
    if (val && menu.isOpen) {
      closeMenu();
    } else if (!val && !menu.isOpen && props.alwaysOpen) {
      openMenu();
    }
  }
);
watch([() => props.flat, () => props.branchNodesFirst, () => props.matchKeys], () => {
  initialize();
});
watch(
  internalValue,
  (newValue, oldValue) => {
    const hasChanged = quickDiff(newValue, oldValue);
    if (hasChanged) {
      emit("update:modelValue", getValue(), props.instanceId);
    }
  },
  { deep: true }
);

onMounted(() => {
  // 如果需要自动选中
  if (props.autoFocus) {
    focusInput();
  }
  /**
   * 如果需要自动加载根节点数据
   */
  if (!props.options && !props.async && props.autoLoadRootOptions) {
    loadRootOptions();
  }
  // 如果总是打开
  if (props.alwaysOpen) {
    openMenu();
  }
  // 如果是异步的
  if (props.async && props.defaultOptions) {
    handleRemoteSearch();
  }
});
onUnmounted(() => {
  toggleClickOutsideEvent(false);
});
</script>
