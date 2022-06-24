<script lang="ts">
const keysThatRequireMenuBeingOpen = [
  KEY_CODES.ENTER,
  KEY_CODES.END,
  KEY_CODES.HOME,
  KEY_CODES.ARROW_LEFT,
  KEY_CODES.ARROW_UP,
  KEY_CODES.ARROW_RIGHT,
  KEY_CODES.ARROW_DOWN,
  "Enter",
  "End",
  "Home",
  "ArrowLeft",
  "ArrowUp",
  "ArrowRight",
  "ArrowDown"
];
// const keysThatRequireMenuBeingOpen = ["Enter", "End", "Home", "ArrowLeft", "ArrowUp", "ArrowRight", "ArrowDown"];
</script>

<script lang="ts" setup>
import { MIN_INPUT_WIDTH, KEY_CODES, INPUT_DEBOUNCE_DELAY } from "../constants";
import { computed, nextTick, ref, watch } from "vue";
import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
import { debounce } from "lodash";
const inputWidth = ref(MIN_INPUT_WIDTH);
const inputValue = ref("");
const instance = injectStrict(instanceKey);

const updateSearchQuery = () => {
  instance.trigger.searchQuery = inputValue.value;
};
const debouncedCallback = debounce(updateSearchQuery, INPUT_DEBOUNCE_DELAY, { leading: true, trailing: true });
const onFocus = () => {
  instance.trigger.isFocused = true;
  // istanbul ignore else
  if (instance.props.openOnFocus) {
    instance.openMenu();
  }
};
const input = ref<HTMLInputElement>();

const focus = () => {
  if (!instance.props.disabled) {
    input.value && input.value?.focus();
  }
};
const blur = () => {
  input.value && input.value.blur();
};
const onBlur = () => {
  const menu = instance.getMenuDiv();
  // #15
  // istanbul ignore next
  if (menu && document.activeElement === menu) {
    return focus();
  }
  instance.trigger.isFocused = false;
  instance.closeMenu();
};
const onInput = (evt: { target: { value: string } } | Event) => {
  const evtVal = (evt.target as { value: string }).value;
  inputValue.value = evtVal;
  if (inputValue.value) {
    debouncedCallback();
  } else {
    debouncedCallback.cancel();
    updateSearchQuery();
  }
};

// 用 keyUp 事件存在一个问题，删除输入框最后一个字符也会导致取消选中最后一项
const onKeyDown = (evt: KeyboardEvent) => {
  // https://css-tricks.com/snippets/javascript/javascript-keycodes/
  // https://stackoverflow.com/questions/4471582/javascript-keycode-vs-which
  // // 使用key来处理事件,keyCode后置
  const key = evt.key ? evt.key : evt.keyCode;
  if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) {
    return;
  }
  if (!instance.menu.isOpen && keysThatRequireMenuBeingOpen.includes(key)) {
    evt.preventDefault();
    return instance.openMenu();
  }
  const backspaceFunction = () => {
    if (instance.props.backspaceRemoves && !inputValue.value.length) {
      instance.removeLastValue();
    }
  };
  const enterFunction = () => {
    evt.preventDefault();
    if (instance.menu.current === null) {
      return;
    }
    const current = instance.getNode(instance.menu.current);
    if (current) {
      if (current.isBranch && instance.props.disableBranchNodes) {
        return;
      }
      instance.select(current);
    }
  };
  const escapeFunction = () => {
    if (inputValue.value.length) {
      onInput({ target: { value: "" } });
    } else if (instance.menu.isOpen) {
      instance.closeMenu();
    }
  };
  const endFunction = () => {
    evt.preventDefault();
    instance.highlightLastOption();
  };
  const homeFunction = () => {
    evt.preventDefault();
    instance.highlightFirstOption();
  };
  const arrowLeftFunction = () => {
    const current = instance.getNode(instance.menu.current);
    if (current) {
      if (current.isBranch && instance.shouldExpand(current)) {
        evt.preventDefault();
        instance.toggleExpanded(current);
      } else if (!current.isRootNode && (current.isLeaf || (current.isBranch && !instance.shouldExpand(current)))) {
        evt.preventDefault();
        if (current.parentNode) {
          instance.setCurrentHighlightedOption(current.parentNode);
        }
      }
    }
  };
  const arrowUpFunction = () => {
    evt.preventDefault();
    instance.highlightPrevOption();
  };
  const arrowRightFunction = () => {
    const current = instance.getNode(instance.menu.current);
    if (current && current.isBranch && !instance.shouldExpand(current)) {
      evt.preventDefault();
      instance.toggleExpanded(current);
    }
  };
  const arrowDownFunction = () => {
    evt.preventDefault();
    instance.highlightNextOption();
  };
  const deleteFunction = () => {
    if (instance.props.deleteRemoves && !inputValue.value.length) {
      instance.removeLastValue();
    }
  };
  const keyFunctionMap = new Map<string | number, () => void>();
  keyFunctionMap.set(KEY_CODES.BACKSPACE, backspaceFunction);
  keyFunctionMap.set("Backspace", backspaceFunction);
  keyFunctionMap.set(KEY_CODES.ENTER, enterFunction);
  keyFunctionMap.set("Enter", enterFunction);
  keyFunctionMap.set(KEY_CODES.ESCAPE, escapeFunction);
  keyFunctionMap.set("Escape", escapeFunction);
  keyFunctionMap.set(KEY_CODES.END, endFunction);
  keyFunctionMap.set("End", endFunction);
  keyFunctionMap.set(KEY_CODES.HOME, homeFunction);
  keyFunctionMap.set("Home", homeFunction);
  keyFunctionMap.set(KEY_CODES.ARROW_LEFT, arrowLeftFunction);
  keyFunctionMap.set("ArrowLeft", arrowLeftFunction);
  keyFunctionMap.set(KEY_CODES.ARROW_UP, arrowUpFunction);
  keyFunctionMap.set("ArrowUp", arrowUpFunction);
  keyFunctionMap.set(KEY_CODES.ARROW_RIGHT, arrowRightFunction);
  keyFunctionMap.set("ArrowRight", arrowRightFunction);
  keyFunctionMap.set(KEY_CODES.ARROW_DOWN, arrowDownFunction);
  keyFunctionMap.set("ArrowDown", arrowDownFunction);
  keyFunctionMap.set(KEY_CODES.DELETE, deleteFunction);
  keyFunctionMap.set("Delete", deleteFunction);
  const exeFunction = keyFunctionMap.get(key) || instance.openMenu;
  exeFunction();
};

const getProps = () => {
  let props = {};
  if (!instance.props.searchable) {
    props = {
      on: {
        focus: onFocus,
        blur: onBlur,
        keydown: onKeyDown
      },
      ref: "input"
    };
    if (!instance.props.disabled) {
      props = {
        ...props,
        ...{
          attrs: {
            tabIndex: instance.props.tabIndex
          }
        }
      };
    }
  }
};

const needAutoSize = computed(() => {
  return instance.props.searchable && !instance.props.disabled && instance.props.multiple;
});
const onMouseDown = (evt: MouseEvent) => {
  // istanbul ignore next
  if (inputValue.value.length) {
    // Prevent it from bubbling to the top level and triggering `preventDefault()`
    // to make the textbox unselectable
    evt.stopPropagation();
  }
};
defineExpose({
  blur,
  focus
});
const sizer = ref<HTMLDivElement>();
watch(
  () => instance.trigger.searchQuery,
  (isearchQuery) => {
    inputValue.value = isearchQuery;
    if (needAutoSize.value) {
      nextTick(() => {
        if (sizer.value) {
          inputWidth.value = Math.max(MIN_INPUT_WIDTH, sizer.value?.scrollWidth + 15);
        }
      });
    }
  },
  {
    flush: "post"
  }
);
</script>

<template>
  <div class="vue-treeselect__input-container" v-bind="getProps">
    <template v-if="instance.props.searchable && !instance.props.disabled">
      <input
        ref="input"
        class="vue-treeselect__input"
        type="text"
        autocomplete="off"
        :tabIndex="instance.props.tabIndex"
        :required="instance.props.required && !instance.hasValue.value"
        :value="inputValue"
        :style="needAutoSize ? `width:${inputWidth}px` : ''"
        :onFocus="onFocus"
        :onInput="onInput"
        :onBlur="onBlur"
        :onKeydown="onKeyDown"
        :onMousedown="onMouseDown" />
      <div v-if="needAutoSize" ref="sizer" class="vue-treeselect__sizer">{{ inputValue }}</div>
    </template>
  </div>
  <!-- :onBlur="onBlur" -->
</template>
