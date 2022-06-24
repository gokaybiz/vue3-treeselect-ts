import { inject, defineComponent, computed, unref, openBlock, createElementBlock, Fragment, renderList, createCommentVNode, createElementVNode, toRefs, normalizeClass, withModifiers, createBlock, createTextVNode, toDisplayString, createVNode, renderSlot, ref, watch, nextTick, mergeProps, normalizeStyle, withCtx, TransitionGroup, resolveComponent, Transition, onMounted, onUnmounted, withDirectives, vShow, reactive, useSlots, provide, Teleport } from "vue";
import { debounce, noop, get, constant, identity, last, once, cloneDeep } from "lodash";
const instance = Symbol("instance");
function injectStrict(key, fallback) {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
}
const _hoisted_1$b = ["name", "value"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "TreeselectHiddenFields",
  setup(__props) {
    const instance$1 = injectStrict(instance);
    const flag = computed(() => {
      return !instance$1.props.name || instance$1.props.disabled || !instance$1.hasValue.value;
    });
    const stringifiedValues = computed(() => {
      let fiedValues = instance$1.internalValue.value.map((value) => {
        if (typeof value === "string")
          return value;
        if (value != null && !isNaN(value))
          return JSON.stringify(value);
        return "";
      });
      if (instance$1.props.multiple && instance$1.props.joinValues) {
        fiedValues = [fiedValues.join(instance$1.props.delimiter)];
      }
      return fiedValues;
    });
    return (_ctx, _cache) => {
      return !unref(flag) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(stringifiedValues), (stringifiedValue, i) => {
        return openBlock(), createElementBlock("input", {
          key: `hidden-field-${i}`,
          type: "hidden",
          name: unref(instance$1).props.name,
          value: stringifiedValue
        }, null, 8, _hoisted_1$b);
      }), 128)) : createCommentVNode("", true);
    };
  }
});
function isPromise(obj) {
  return !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
}
var _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$d = defineComponent({
  name: "VueTreeselectX"
});
const _hoisted_1$a = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 348.333 348.333"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", { d: "M336.559 68.611L231.016 174.165l105.543 105.549c15.699 15.705 15.699 41.145 0 56.85-7.844 7.844-18.128 11.769-28.407 11.769-10.296 0-20.581-3.919-28.419-11.769L174.167 231.003 68.609 336.563c-7.843 7.844-18.128 11.769-28.416 11.769-10.285 0-20.563-3.919-28.413-11.769-15.699-15.698-15.699-41.139 0-56.85l105.54-105.549L11.774 68.611c-15.699-15.699-15.699-41.145 0-56.844 15.696-15.687 41.127-15.687 56.829 0l105.563 105.554L279.721 11.767c15.705-15.687 41.139-15.687 56.832 0 15.705 15.699 15.705 41.145.006 56.844z" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$6
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_3$4);
}
var DeleteIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$2]]);
const _sfc_main$c = defineComponent({
  name: "VueTreeselectArrow"
});
const _hoisted_1$9 = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 292.362 292.362"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M286.935 69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952 0-9.233 1.807-12.85 5.424C1.807 72.998 0 77.279 0 82.228c0 4.948 1.807 9.229 5.424 12.847l127.907 127.907c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428L286.935 95.074c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$5
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$3);
}
var ArrowIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$1]]);
var _sfc_main$b = defineComponent({
  props: {
    slotFunction: {
      type: [Function],
      required: true
    },
    slotObject: {
      type: [Object],
      default: void 0
    }
  },
  render() {
    return this.slotObject ? this.slotFunction(this.slotObject) : this.slotFunction();
  }
});
const _hoisted_1$8 = { class: "vue-treeselect__multi-value-item-container" };
const _hoisted_2$4 = ["onMousedown"];
const _hoisted_3$2 = { class: "vue-treeselect__multi-value-label" };
const _hoisted_4$2 = { class: "vue-treeselect__icon vue-treeselect__value-remove" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TreeselectMultiValueItem",
  props: {
    node: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props2 = __props;
    const { node } = toRefs(props2);
    const instance$1 = injectStrict(instance);
    const itemClass = computed(() => {
      return {
        "vue-treeselect__multi-value-item": true,
        "vue-treeselect__multi-value-item-disabled": node.value.isDisabled,
        "vue-treeselect__multi-value-item-new": node.value.isNew
      };
    });
    const handleLeftMouseDown = () => {
      instance$1.select(node.value);
    };
    const customValueLabelRenderer = computed(() => {
      return instance$1.customValueLabelRenderer;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", {
          class: normalizeClass(unref(itemClass)),
          onMousedown: withModifiers(handleLeftMouseDown, ["left"])
        }, [
          createElementVNode("span", _hoisted_3$2, [
            unref(customValueLabelRenderer) ? (openBlock(), createBlock(_sfc_main$b, {
              key: 0,
              "slot-function": unref(customValueLabelRenderer),
              "slot-object": { node: unref(node) }
            }, null, 8, ["slot-function", "slot-object"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(unref(node).label), 1)
            ], 64))
          ]),
          createElementVNode("span", _hoisted_4$2, [
            createVNode(DeleteIcon)
          ])
        ], 42, _hoisted_2$4)
      ]);
    };
  }
});
const _sfc_main$9 = {};
const _hoisted_1$7 = { class: "vue-treeselect__value-container" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$7, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
var ValueContainer = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render]]);
const NO_PARENT_NODE = null;
const UNCHECKED = 0;
const INDETERMINATE = 1;
const CHECKED = 2;
const ALL_CHILDREN = "ALL_CHILDREN";
const ALL_DESCENDANTS = "ALL_DESCENDANTS";
const LEAF_CHILDREN = "LEAF_CHILDREN";
const LEAF_DESCENDANTS = "LEAF_DESCENDANTS";
const LOAD_ROOT_OPTIONS = "LOAD_ROOT_OPTIONS";
const LOAD_CHILDREN_OPTIONS = "LOAD_CHILDREN_OPTIONS";
const ASYNC_SEARCH = "ASYNC_SEARCH";
const ALL = "ALL";
const BRANCH_PRIORITY = "BRANCH_PRIORITY";
const LEAF_PRIORITY = "LEAF_PRIORITY";
const ALL_WITH_INDETERMINATE = "ALL_WITH_INDETERMINATE";
const ORDER_SELECTED = "ORDER_SELECTED";
const LEVEL = "LEVEL";
const INDEX = "INDEX";
const KEY_CODES = {
  BACKSPACE: 8,
  ENTER: 13,
  ESCAPE: 27,
  END: 35,
  HOME: 36,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  DELETE: 46
};
const INPUT_DEBOUNCE_DELAY = 200;
const MIN_INPUT_WIDTH = 5;
const MENU_BUFFER = 40;
const _hoisted_1$6 = ["tabIndex", "required", "value"];
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
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TreeselectInput",
  setup(__props, { expose }) {
    const inputWidth = ref(MIN_INPUT_WIDTH);
    const inputValue = ref("");
    const instance$1 = injectStrict(instance);
    const updateSearchQuery = () => {
      instance$1.trigger.searchQuery = inputValue.value;
    };
    const debouncedCallback = debounce(updateSearchQuery, INPUT_DEBOUNCE_DELAY, { leading: true, trailing: true });
    const onFocus = () => {
      instance$1.trigger.isFocused = true;
      if (instance$1.props.openOnFocus) {
        instance$1.openMenu();
      }
    };
    const input = ref();
    const focus = () => {
      var _a;
      if (!instance$1.props.disabled) {
        input.value && ((_a = input.value) == null ? void 0 : _a.focus());
      }
    };
    const blur = () => {
      input.value && input.value.blur();
    };
    const onBlur = () => {
      const menu = instance$1.getMenuDiv();
      if (menu && document.activeElement === menu) {
        return focus();
      }
      instance$1.trigger.isFocused = false;
      instance$1.closeMenu();
    };
    const onInput = (evt) => {
      const evtVal = evt.target.value;
      inputValue.value = evtVal;
      if (inputValue.value) {
        debouncedCallback();
      } else {
        debouncedCallback.cancel();
        updateSearchQuery();
      }
    };
    const onKeyDown = (evt) => {
      const key = evt.key ? evt.key : evt.keyCode;
      if (evt.ctrlKey || evt.shiftKey || evt.altKey || evt.metaKey) {
        return;
      }
      if (!instance$1.menu.isOpen && keysThatRequireMenuBeingOpen.includes(key)) {
        evt.preventDefault();
        return instance$1.openMenu();
      }
      const backspaceFunction = () => {
        if (instance$1.props.backspaceRemoves && !inputValue.value.length) {
          instance$1.removeLastValue();
        }
      };
      const enterFunction = () => {
        evt.preventDefault();
        if (instance$1.menu.current === null) {
          return;
        }
        const current = instance$1.getNode(instance$1.menu.current);
        if (current) {
          if (current.isBranch && instance$1.props.disableBranchNodes) {
            return;
          }
          instance$1.select(current);
        }
      };
      const escapeFunction = () => {
        if (inputValue.value.length) {
          onInput({ target: { value: "" } });
        } else if (instance$1.menu.isOpen) {
          instance$1.closeMenu();
        }
      };
      const endFunction = () => {
        evt.preventDefault();
        instance$1.highlightLastOption();
      };
      const homeFunction = () => {
        evt.preventDefault();
        instance$1.highlightFirstOption();
      };
      const arrowLeftFunction = () => {
        const current = instance$1.getNode(instance$1.menu.current);
        if (current) {
          if (current.isBranch && instance$1.shouldExpand(current)) {
            evt.preventDefault();
            instance$1.toggleExpanded(current);
          } else if (!current.isRootNode && (current.isLeaf || current.isBranch && !instance$1.shouldExpand(current))) {
            evt.preventDefault();
            if (current.parentNode) {
              instance$1.setCurrentHighlightedOption(current.parentNode);
            }
          }
        }
      };
      const arrowUpFunction = () => {
        evt.preventDefault();
        instance$1.highlightPrevOption();
      };
      const arrowRightFunction = () => {
        const current = instance$1.getNode(instance$1.menu.current);
        if (current && current.isBranch && !instance$1.shouldExpand(current)) {
          evt.preventDefault();
          instance$1.toggleExpanded(current);
        }
      };
      const arrowDownFunction = () => {
        evt.preventDefault();
        instance$1.highlightNextOption();
      };
      const deleteFunction = () => {
        if (instance$1.props.deleteRemoves && !inputValue.value.length) {
          instance$1.removeLastValue();
        }
      };
      const keyFunctionMap = /* @__PURE__ */ new Map();
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
      const exeFunction = keyFunctionMap.get(key) || instance$1.openMenu;
      exeFunction();
    };
    const getProps = () => {
      let props2 = {};
      if (!instance$1.props.searchable) {
        props2 = {
          on: {
            focus: onFocus,
            blur: onBlur,
            keydown: onKeyDown
          },
          ref: "input"
        };
        if (!instance$1.props.disabled) {
          props2 = {
            ...props2,
            ...{
              attrs: {
                tabIndex: instance$1.props.tabIndex
              }
            }
          };
        }
      }
    };
    const needAutoSize = computed(() => {
      return instance$1.props.searchable && !instance$1.props.disabled && instance$1.props.multiple;
    });
    const onMouseDown = (evt) => {
      if (inputValue.value.length) {
        evt.stopPropagation();
      }
    };
    expose({
      blur,
      focus
    });
    const sizer = ref();
    watch(() => instance$1.trigger.searchQuery, (isearchQuery) => {
      inputValue.value = isearchQuery;
      if (needAutoSize.value) {
        nextTick(() => {
          var _a;
          if (sizer.value) {
            inputWidth.value = Math.max(MIN_INPUT_WIDTH, ((_a = sizer.value) == null ? void 0 : _a.scrollWidth) + 15);
          }
        });
      }
    }, {
      flush: "post"
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({ class: "vue-treeselect__input-container" }, getProps), [
        unref(instance$1).props.searchable && !unref(instance$1).props.disabled ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createElementVNode("input", {
            ref_key: "input",
            ref: input,
            class: "vue-treeselect__input",
            type: "text",
            autocomplete: "off",
            tabIndex: unref(instance$1).props.tabIndex,
            required: unref(instance$1).props.required && !unref(instance$1).hasValue.value,
            value: inputValue.value,
            style: normalizeStyle(unref(needAutoSize) ? `width:${inputWidth.value}px` : ""),
            onFocus,
            onInput,
            onBlur,
            onKeydown: onKeyDown,
            onMousedown: onMouseDown
          }, null, 44, _hoisted_1$6),
          unref(needAutoSize) ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "sizer",
            ref: sizer,
            class: "vue-treeselect__sizer"
          }, toDisplayString(inputValue.value), 513)) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ], 16);
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TreeselectPlaceholder",
  setup(__props) {
    const instance$1 = injectStrict(instance);
    const placeholderClass = computed(() => {
      return {
        "vue-treeselect__placeholder": true,
        "vue-treeselect-helper-zoom-effect-off": true,
        "vue-treeselect-helper-hide": instance$1.hasValue.value || instance$1.trigger.searchQuery
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(placeholderClass))
      }, toDisplayString(unref(instance$1).props.placeholder), 3);
    };
  }
});
const _hoisted_1$5 = {
  key: "exceed-limit-tip",
  class: "vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off"
};
const _hoisted_2$3 = { class: "vue-treeselect__limit-tip-text" };
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TreeselectMultiValue",
  setup(__props) {
    const instance$1 = injectStrict(instance);
    const count = computed(() => {
      return instance$1.internalValue.value.length - instance$1.props.limit;
    });
    const nodes = computed(() => {
      return instance$1.internalValue.value.slice(0, instance$1.props.limit).map(instance$1.getNode).filter((node) => node != null);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ValueContainer, null, {
        default: withCtx(() => [
          createVNode(TransitionGroup, {
            class: "vue-treeselect__multi-value",
            tag: "div",
            name: "vue-treeselect__multi-value-item--transition",
            appear: true
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(nodes), (node) => {
                return openBlock(), createBlock(_sfc_main$a, {
                  key: `multi-value-item-${node.id}`,
                  node
                }, null, 8, ["node"]);
              }), 128)),
              unref(count) > 0 ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
                createElementVNode("span", _hoisted_2$3, toDisplayString(unref(instance$1).props.limitText(unref(count))), 1)
              ])) : createCommentVNode("", true),
              createVNode(_sfc_main$7, { key: "placeholder" }),
              createVNode(_sfc_main$8, {
                ref: "input",
                key: "input"
              }, null, 512)
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$4 = {
  key: 0,
  class: "vue-treeselect__single-value"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TreeselectSingleValue",
  setup(__props) {
    const instance$1 = injectStrict(instance);
    const shouldShowValue = computed(() => {
      return instance$1.hasValue.value && !instance$1.trigger.searchQuery;
    });
    const customValueLabelRenderer = computed(() => {
      return instance$1.customValueLabelRenderer;
    });
    const node = computed(() => {
      return instance$1.selectedNodes.value[0];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ValueContainer, null, {
        default: withCtx(() => [
          unref(shouldShowValue) ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
            unref(customValueLabelRenderer) ? (openBlock(), createBlock(_sfc_main$b, {
              key: 0,
              "slot-function": unref(customValueLabelRenderer),
              "slot-object": { node: unref(node) }
            }, null, 8, ["slot-function", "slot-object"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(unref(node).label), 1)
            ], 64))
          ])) : createCommentVNode("", true),
          createVNode(_sfc_main$7),
          createVNode(_sfc_main$8, { ref: "input" }, null, 512)
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$3 = ["title", "onMousedown"];
const _hoisted_2$2 = ["onMousedown"];
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TreeselectControl",
  setup(__props) {
    const instance$1 = injectStrict(instance);
    const shouldShowX = computed(() => {
      return instance$1.props.clearable && !instance$1.props.disabled && instance$1.hasValue.value && (instance$1.hasValue.value && instance$1.internalValue.value.some((id) => {
        var _a;
        return !((_a = instance$1.getNode(id)) == null ? void 0 : _a.isDisabled);
      }) || instance$1.props.allowClearingDisabled);
    });
    const shouldShowArrow = computed(() => {
      if (!instance$1.props.alwaysOpen)
        return true;
      return !instance$1.menu.isOpen;
    });
    const handleMouseDownOnX = () => {
      const result = instance$1.props.beforeClearAll();
      const handler = (shouldClear) => {
        if (shouldClear)
          instance$1.clear();
      };
      if (isPromise(result)) {
        result.then(handler);
      } else {
        setTimeout(() => handler(result), 0);
      }
    };
    const handleMouseDownOnArrow = () => {
      instance$1.focusInput();
      instance$1.toggleMenu();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "vue-treeselect__control",
        onMousedown: _cache[0] || (_cache[0] = withModifiers((...args) => unref(instance$1).handleMouseDown && unref(instance$1).handleMouseDown(...args), ["left", "stop", "prevent"]))
      }, [
        !unref(instance$1).props.multiple ? (openBlock(), createBlock(_sfc_main$5, {
          key: 0,
          ref: "value-container"
        }, null, 512)) : (openBlock(), createBlock(_sfc_main$6, {
          key: 1,
          ref: "value-container"
        }, null, 512)),
        unref(shouldShowX) ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: "vue-treeselect__x-container",
          title: unref(instance$1).props.multiple ? unref(instance$1).props.clearAllText : unref(instance$1).props.clearValueText,
          onMousedown: withModifiers(handleMouseDownOnX, ["left", "stop", "prevent"])
        }, [
          createVNode(DeleteIcon, { class: "vue-treeselect__x" })
        ], 40, _hoisted_1$3)) : createCommentVNode("", true),
        unref(shouldShowArrow) ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: "vue-treeselect__control-arrow-container",
          onMousedown: withModifiers(handleMouseDownOnArrow, ["left", "stop", "prevent"])
        }, [
          createVNode(ArrowIcon, {
            class: normalizeClass({
              "vue-treeselect__control-arrow": true,
              "vue-treeselect__control-arrow--rotated": unref(instance$1).menu.isOpen
            })
          }, null, 8, ["class"])
        ], 40, _hoisted_2$2)) : createCommentVNode("", true)
      ], 32);
    };
  }
});
const warning = noop;
function scrollIntoView($scrollingEl, $focusedEl) {
  const scrollingReact = $scrollingEl.getBoundingClientRect();
  const focusedRect = $focusedEl.getBoundingClientRect();
  const overScroll = $focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > scrollingReact.bottom) {
    $scrollingEl.scrollTop = Math.min($focusedEl.offsetTop + $focusedEl.clientHeight - $scrollingEl.offsetHeight + overScroll, $scrollingEl.scrollHeight);
  } else if (focusedRect.top - overScroll < scrollingReact.top) {
    $scrollingEl.scrollTop = Math.max($focusedEl.offsetTop - overScroll, 0);
  }
}
var index = function(element, listener) {
  var expand = document.createElement("_");
  var shrink = expand.appendChild(document.createElement("_"));
  var expandChild = expand.appendChild(document.createElement("_"));
  var shrinkChild = shrink.appendChild(document.createElement("_"));
  var lastWidth = void 0, lastHeight = void 0;
  shrink.style.cssText = expand.style.cssText = "height:100%;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;transition:0s;width:100%;z-index:-1";
  shrinkChild.style.cssText = expandChild.style.cssText = "display:block;height:100%;transition:0s;width:100%";
  shrinkChild.style.width = shrinkChild.style.height = "200%";
  element.appendChild(expand);
  test2();
  return stop2;
  function test2() {
    unbind();
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (width !== lastWidth || height !== lastHeight) {
      lastWidth = width;
      lastHeight = height;
      expandChild.style.width = width * 2 + "px";
      expandChild.style.height = height * 2 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
      shrink.scrollLeft = shrink.scrollWidth;
      shrink.scrollTop = shrink.scrollHeight;
      listener({ width, height });
    }
    shrink.addEventListener("scroll", test2);
    expand.addEventListener("scroll", test2);
  }
  function unbind() {
    shrink.removeEventListener("scroll", test2);
    expand.removeEventListener("scroll", test2);
  }
  function stop2() {
    unbind();
    element.removeChild(expand);
  }
};
function removeFromArray(arr, elem) {
  const idx = arr.indexOf(elem);
  if (idx !== -1)
    arr.splice(idx, 1);
}
let intervalId;
const registered = [];
const INTERVAL_DURATION = 100;
function run() {
  intervalId = setInterval(() => {
    registered.forEach(test);
  }, INTERVAL_DURATION);
}
function stop() {
  clearInterval(intervalId);
  intervalId = null;
}
function test(item) {
  const { $el, listener, lastWidth, lastHeight } = item;
  const width = $el.offsetWidth;
  const height = $el.offsetHeight;
  if (lastWidth !== width || lastHeight !== height) {
    item.lastWidth = width;
    item.lastHeight = height;
    listener({ width, height });
  }
}
function watchSizeForIE9($el, listener) {
  const item = {
    $el,
    listener,
    lastWidth: null,
    lastHeight: null
  };
  const unwatch = () => {
    removeFromArray(registered, item);
    if (!registered.length)
      stop();
  };
  registered.push(item);
  test(item);
  run();
  return unwatch;
}
function watchSize($el, listener) {
  const isIE9 = document.documentMode === 9;
  let locked = true;
  const wrappedListener = (...args) => locked || listener(...args);
  const implementation = isIE9 ? watchSizeForIE9 : index;
  const removeSizeWatcher = implementation($el, wrappedListener);
  locked = false;
  return removeSizeWatcher;
}
function findScrollParents($el) {
  const $scrollParents = [];
  let $parent = $el.parentNode;
  while ($parent && $parent.nodeName !== "BODY" && $parent.nodeType === document.ELEMENT_NODE) {
    if (isScrollElment($parent))
      $scrollParents.push($parent);
    $parent = $parent.parentNode;
  }
  $scrollParents.push(window);
  return $scrollParents;
}
function isScrollElment($el) {
  const { overflow, overflowX, overflowY } = getComputedStyle($el);
  return /(auto|scroll|overlay)/.test(overflow + overflowY + overflowX);
}
function setupResizeAndScrollEventListeners($el, listener) {
  const $scrollParents = findScrollParents($el);
  window.addEventListener("resize", listener, { passive: true });
  $scrollParents.forEach((scrollParent) => {
    scrollParent.addEventListener("scroll", listener, { passive: true });
  });
  return function removeEventListeners() {
    window.removeEventListener("resize", listener, { passive: true });
    $scrollParents.forEach(($scrollParent) => {
      $scrollParent.removeEventListener("scroll", listener, { passive: true });
    });
  };
}
const createMap = () => {
  return /* @__PURE__ */ Object.create(null);
};
function quickDiff(arrA, arrB) {
  if (arrA.length !== arrB.length)
    return true;
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i])
      return true;
  }
  return false;
}
const _hoisted_1$2 = { class: "vue-treeselect__icon-container" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TreeselectTip",
  props: {
    type: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`vue-treeselect__tip vue-treeselect__${__props.type}-tip`)
      }, [
        createElementVNode("div", _hoisted_1$2, [
          createElementVNode("span", {
            class: normalizeClass(`vue-treeselect__icon-${__props.icon}`)
          }, null, 2)
        ]),
        createElementVNode("span", {
          class: normalizeClass(`vue-treeselect__tip-text vue-treeselect__${__props.type}-tip-text`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ], 2);
    };
  }
});
const _hoisted_1$1 = ["data-id", "onMouseenter"];
const _hoisted_2$1 = ["onMousedown"];
const _hoisted_3$1 = {
  key: 1,
  class: "vue-treeselect__option-arrow-placeholder"
};
const _hoisted_4$1 = ["onMousedown"];
const _hoisted_5$1 = {
  key: 0,
  class: "vue-treeselect__checkbox-container"
};
const _hoisted_6$1 = /* @__PURE__ */ createElementVNode("span", { class: "vue-treeselect__check-mark" }, null, -1);
const _hoisted_7 = /* @__PURE__ */ createElementVNode("span", { class: "vue-treeselect__minus-mark" }, null, -1);
const _hoisted_8 = [
  _hoisted_6$1,
  _hoisted_7
];
const _hoisted_9 = {
  key: 2,
  class: "vue-treeselect__label"
};
const _hoisted_10 = {
  key: 0,
  class: "vue-treeselect__count"
};
const _hoisted_11 = {
  key: 0,
  class: "vue-treeselect__list"
};
const _hoisted_12 = ["onMousedown"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TreeselectOption",
  props: {
    node: null
  },
  setup(__props) {
    const props2 = __props;
    const instance$1 = injectStrict(instance);
    const shouldExpand = computed(() => {
      return props2.node.isBranch && instance$1.shouldExpand(props2.node);
    });
    const shouldShow = computed(() => {
      return instance$1.shouldShowOptionInMenu(props2.node);
    });
    const shouldFlattenOptions = computed(() => {
      return instance$1.localSearch.active && instance$1.props.flattenSearchResults;
    });
    const hasBranchNodes = computed(() => {
      return instance$1.forest.normalizedOptions.some((rootNode) => rootNode.isBranch);
    });
    const indentLevel = computed(() => {
      return shouldFlattenOptions.value ? 0 : props2.node.level;
    });
    const showCountOnSearchComputed = computed(() => {
      return instance$1.props.showCountOnSearch ? instance$1.props.showCountOnSearch : instance$1.props.showCount;
    });
    const handleMouseEnterOption = () => {
      instance$1.setCurrentHighlightedOption(props2.node, false);
    };
    const handleMouseDownOnArrow = () => {
      console.log("handleMouseDownOnArrow");
      instance$1.toggleExpanded(props2.node);
    };
    const handleMouseDownOnLabelContainer = () => {
      if (props2.node.isBranch && instance$1.props.disableBranchNodes) {
        instance$1.toggleExpanded(props2.node);
      } else {
        instance$1.select(props2.node);
      }
    };
    const handleMouseDownOnRetry = () => {
      instance$1.loadChildrenOptions(props2.node);
    };
    const listItemClass = computed(() => {
      return {
        "vue-treeselect__list-item": true,
        [`vue-treeselect__indent-level-${indentLevel.value}`]: true
      };
    });
    const optionClass = computed(() => {
      return {
        "vue-treeselect__option": true,
        "vue-treeselect__option--disabled": props2.node.isDisabled,
        "vue-treeselect__option--selected": instance$1.isSelected(props2.node),
        "vue-treeselect__option--highlight": props2.node.isHighlighted,
        "vue-treeselect__option--matched": instance$1.localSearch.active && props2.node.isMatched,
        "vue-treeselect__option--hide": !shouldShow.value
      };
    });
    const checkedState = computed(() => {
      return instance$1.forest.checkedStateMap[props2.node.id];
    });
    const checkboxClass = computed(() => {
      return {
        "vue-treeselect__checkbox": true,
        "vue-treeselect__checkbox--checked": checkedState.value === CHECKED,
        "vue-treeselect__checkbox--indeterminate": checkedState.value === INDETERMINATE,
        "vue-treeselect__checkbox--unchecked": checkedState.value === UNCHECKED,
        "vue-treeselect__checkbox--disabled": props2.node.isDisabled
      };
    });
    const shouldShowCount = computed(() => {
      return props2.node.isBranch && (instance$1.localSearch.active ? showCountOnSearchComputed : instance$1.props.showCount);
    });
    const count = computed(() => {
      return shouldShowCount.value ? instance$1.localSearch.active ? instance$1.localSearch.countMap[props2.node.id][instance$1.props.showCountOf] : props2.node.count[instance$1.props.showCountOf] : NaN;
    });
    const customLabelRenderer = computed(() => {
      return instance$1.customLabelRenderer;
    });
    return (_ctx, _cache) => {
      const _component_treeselect_option = resolveComponent("treeselect-option", true);
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(listItemClass))
      }, [
        createElementVNode("div", {
          class: normalizeClass(unref(optionClass)),
          "data-id": __props.node.id,
          onMouseenter: withModifiers(handleMouseEnterOption, ["self"])
        }, [
          !(unref(shouldFlattenOptions) && unref(shouldShow)) && __props.node.isBranch ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "vue-treeselect__option-arrow-container",
            onMousedown: withModifiers(handleMouseDownOnArrow, ["left", "stop", "prevent"])
          }, [
            createVNode(Transition, {
              name: "vue-treeselect__option-arrow--prepare",
              appear: true
            }, {
              default: withCtx(() => [
                createVNode(ArrowIcon, {
                  class: normalizeClass({
                    "vue-treeselect__option-arrow": true,
                    "vue-treeselect__option-arrow--rotated": unref(shouldExpand)
                  })
                }, null, 8, ["class"])
              ]),
              _: 1
            })
          ], 40, _hoisted_2$1)) : unref(hasBranchNodes) ? (openBlock(), createElementBlock("div", _hoisted_3$1, " \xA0 ")) : createCommentVNode("", true),
          createElementVNode("div", {
            class: "vue-treeselect__label-container",
            onMousedown: withModifiers(handleMouseDownOnLabelContainer, ["left", "stop", "prevent"])
          }, [
            unref(instance$1).props.multiple && !(unref(instance$1).props.disableBranchNodes && __props.node.isBranch) ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
              createElementVNode("span", {
                class: normalizeClass(unref(checkboxClass))
              }, _hoisted_8, 2)
            ])) : createCommentVNode("", true),
            unref(customLabelRenderer) ? (openBlock(), createBlock(_sfc_main$b, {
              key: 1,
              "slot-function": unref(customLabelRenderer),
              "slot-object": {
                node: __props.node,
                shouldShowCount: unref(shouldShowCount),
                count: unref(count),
                labelClassName: "vue-treeselect__label",
                countClassName: "vue-treeselect__count"
              }
            }, null, 8, ["slot-function", "slot-object"])) : (openBlock(), createElementBlock("label", _hoisted_9, [
              createTextVNode(toDisplayString(__props.node.label) + " ", 1),
              unref(shouldShowCount) ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(unref(count)), 1)) : createCommentVNode("", true)
            ]))
          ], 40, _hoisted_4$1)
        ], 42, _hoisted_1$1),
        __props.node.isBranch ? (openBlock(), createBlock(Transition, {
          key: 0,
          name: "vue-treeselect__list--transition"
        }, {
          default: withCtx(() => {
            var _a;
            return [
              unref(shouldExpand) ? (openBlock(), createElementBlock("div", _hoisted_11, [
                __props.node.childrenStates.isLoaded ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(__props.node.children, (childNode) => {
                  return openBlock(), createBlock(_component_treeselect_option, {
                    key: childNode.id,
                    node: childNode
                  }, null, 8, ["node"]);
                }), 128)) : createCommentVNode("", true),
                !(!__props.node.childrenStates.isLoaded || ((_a = __props.node.children) == null ? void 0 : _a.length)) ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 1,
                  type: "no-children",
                  icon: "warning"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.noChildrenText), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                __props.node.childrenStates.isLoading ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 2,
                  type: "loading",
                  icon: "loader"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.loadingText), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                __props.node.childrenStates.loadingError ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 3,
                  type: "error",
                  icon: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.node.childrenStates.loadingError) + " ", 1),
                    createElementVNode("a", {
                      class: "vue-treeselect__retry",
                      title: "{instance.retryTitle}",
                      onMousedown: withModifiers(handleMouseDownOnRetry, ["left", "stop", "prevent"])
                    }, toDisplayString(unref(instance$1).props.retryText), 41, _hoisted_12)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }),
          _: 1
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const _hoisted_1 = ["title"];
const _hoisted_2 = {
  key: 4,
  class: "vue-treeselect__list"
};
const _hoisted_3 = ["title"];
const _hoisted_4 = {
  key: 4,
  class: "vue-treeselect__list"
};
const _hoisted_5 = ["title"];
const _hoisted_6 = {
  key: 3,
  class: "vue-treeselect__list"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TreeselectMenu",
  setup(__props) {
    const instance$1 = injectStrict(instance);
    const directionMap = {
      top: "top",
      bottom: "bottom",
      above: "top",
      below: "bottom"
    };
    const menuContainerStyle = computed(() => {
      console.log(instance$1.props.appendToBody + "111");
      return instance$1.props.appendToBody ? "" : { zIndex: instance$1.props.zIndex };
    });
    const beforeListRenderer = computed(() => {
      return instance$1.beforeListRenderer;
    });
    const afterListRenderer = computed(() => {
      return instance$1.afterListRenderer;
    });
    const entry = computed(() => {
      return instance$1.getRemoteSearchEntry();
    });
    const shouldShowSearchPromptTip = computed(() => {
      return instance$1.trigger.searchQuery === "" && !instance$1.props.defaultOptions;
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
    const menuSizeWatcher = ref(null);
    const menuResizeAndScrollEventListeners = ref(null);
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
      if (!instance$1.menu.isOpen)
        return;
      const $menu = instance$1.getMenuDiv();
      const $control = instance$1.getControlDiv();
      const menuRect = $menu == null ? void 0 : $menu.getBoundingClientRect();
      const controlRect = $control.getBoundingClientRect();
      const menuHeight = menuRect == null ? void 0 : menuRect.height;
      const viewportHeight = window.innerHeight;
      const spaceAbove = controlRect.top;
      const spaceBelow = window.innerHeight - controlRect.bottom;
      const isControlInViewport = controlRect.top >= 0 && controlRect.top <= viewportHeight || controlRect.top < 0 && controlRect.bottom > 0;
      console.log(`menuHeight\u5F85\u9A8C\u8BC1\u5982\u679C\u4E0D\u5B58\u5728\u7F6E\u4E3A0\u662F\u5426\u6B63\u5E38`);
      const hasEnoughSpaceBelow = spaceBelow > (menuHeight || 0) + MENU_BUFFER;
      const hasEnoughSpaceAbove = spaceAbove > (menuHeight || 0) + MENU_BUFFER;
      if (!isControlInViewport) {
        instance$1.closeMenu();
      } else if (instance$1.props.openDirection !== "auto") {
        instance$1.menu.placement = get(directionMap, instance$1.props.openDirection);
      } else if (hasEnoughSpaceBelow || !hasEnoughSpaceAbove) {
        instance$1.menu.placement = "bottom";
      } else {
        instance$1.menu.placement = "top";
      }
    };
    const setupMenuSizeWatcher = () => {
      const $menu = instance$1.getMenuDiv();
      if (menuSizeWatcher.value)
        return;
      menuSizeWatcher.value = {
        remove: watchSize($menu, adjustMenuOpenDirection)
      };
    };
    const setupMenuResizeAndScrollEventListeners = () => {
      const $control = instance$1.getControlDiv();
      if (menuResizeAndScrollEventListeners.value)
        return;
      menuResizeAndScrollEventListeners.value = {
        remove: setupResizeAndScrollEventListeners($control, adjustMenuOpenDirection)
      };
    };
    const removeMenuSizeWatcher = () => {
      if (!menuSizeWatcher.value)
        return;
      menuSizeWatcher.value.remove();
      menuSizeWatcher.value = null;
    };
    const removeMenuResizeAndScrollEventListeners = () => {
      if (!menuResizeAndScrollEventListeners.value)
        return;
      menuResizeAndScrollEventListeners.value.remove();
      menuResizeAndScrollEventListeners.value = null;
    };
    watch(() => instance$1.menu.isOpen, (newValue) => {
      if (newValue) {
        nextTick(onMenuOpen);
      } else {
        onMenuClose();
      }
    });
    onMounted(() => {
      if (instance$1.menu.isOpen) {
        nextTick(onMenuOpen);
      }
    });
    onUnmounted(() => {
      onMenuClose();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref: "menu-container",
        class: "vue-treeselect__menu-container",
        style: normalizeStyle(unref(menuContainerStyle))
      }, [
        createVNode(Transition, { name: "vue-treeselect__menu--transition" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              ref: "menu",
              class: "vue-treeselect__menu",
              style: normalizeStyle({ maxHeight: unref(instance$1).props.maxHeight + "px" }),
              onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => unref(instance$1).handleMouseDown && unref(instance$1).handleMouseDown(...args), ["left", "stop", "prevent"]))
            }, [
              unref(beforeListRenderer) ? (openBlock(), createBlock(_sfc_main$b, {
                key: 0,
                "slot-function": unref(beforeListRenderer)
              }, null, 8, ["slot-function"])) : createCommentVNode("", true),
              unref(instance$1).props.async ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                unref(shouldShowSearchPromptTip) ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  type: "search-prompt",
                  icon: "warning"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.searchPromptText), 1)
                  ]),
                  _: 1
                })) : unref(entry).isLoading ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 1,
                  type: "loading",
                  icon: "loader"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.loadingText), 1)
                  ]),
                  _: 1
                })) : unref(entry).loadingError ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 2,
                  type: "error",
                  icon: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(entry).loadingError) + " ", 1),
                    createElementVNode("a", {
                      class: "vue-treeselect__retry",
                      title: unref(instance$1).props.retryTitle,
                      onClick: _cache[0] || (_cache[0] = (...args) => unref(instance$1).handleRemoteSearch && unref(instance$1).handleRemoteSearch(...args))
                    }, toDisplayString(unref(instance$1).props.retryText), 9, _hoisted_1)
                  ]),
                  _: 1
                })) : unref(shouldShowNoResultsTip) ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 3,
                  type: "no-results",
                  icon: "warning"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.noResultsText), 1)
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("div", _hoisted_2, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(instance$1).forest.normalizedOptions, (rootNode) => {
                    return openBlock(), createBlock(_sfc_main$2, {
                      key: rootNode.id,
                      node: rootNode
                    }, null, 8, ["node"]);
                  }), 128))
                ]))
              ], 64)) : unref(instance$1).localSearch.active ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                unref(instance$1).rootOptionsStates.isLoading ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  type: "loading",
                  icon: "loader"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.loadingText), 1)
                  ]),
                  _: 1
                })) : unref(instance$1).rootOptionsStates.loadingError ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 1,
                  type: "error",
                  icon: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).rootOptionsStates.loadingError) + " ", 1),
                    createElementVNode("a", {
                      class: "vue-treeselect__retry",
                      title: unref(instance$1).props.retryTitle,
                      onClick: _cache[1] || (_cache[1] = (...args) => unref(instance$1).loadRootOptions && unref(instance$1).loadRootOptions(...args))
                    }, toDisplayString(unref(instance$1).props.retryText), 9, _hoisted_3)
                  ]),
                  _: 1
                })) : unref(instance$1).rootOptionsStates.isLoaded && unref(instance$1).forest.normalizedOptions.length === 0 ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 2,
                  type: "no-options",
                  icon: "warning"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.noOptionsText), 1)
                  ]),
                  _: 1
                })) : unref(instance$1).localSearch.noResults ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 3,
                  type: "no-results",
                  icon: "warning"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.noResultsText), 1)
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("div", _hoisted_4, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(instance$1).forest.normalizedOptions, (rootNode) => {
                    return openBlock(), createBlock(_sfc_main$2, {
                      key: rootNode.id,
                      node: rootNode
                    }, null, 8, ["node"]);
                  }), 128))
                ]))
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                unref(instance$1).rootOptionsStates.isLoading ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 0,
                  type: "loading",
                  icon: "loader"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.loadingText), 1)
                  ]),
                  _: 1
                })) : unref(instance$1).rootOptionsStates.loadingError ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 1,
                  type: "error",
                  icon: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).rootOptionsStates.loadingError) + " ", 1),
                    createElementVNode("a", {
                      class: "vue-treeselect__retry",
                      title: unref(instance$1).props.retryTitle,
                      onClick: _cache[2] || (_cache[2] = (...args) => unref(instance$1).loadRootOptions && unref(instance$1).loadRootOptions(...args))
                    }, toDisplayString(unref(instance$1).props.retryText), 9, _hoisted_5)
                  ]),
                  _: 1
                })) : unref(instance$1).rootOptionsStates.isLoaded && unref(instance$1).forest.normalizedOptions.length === 0 ? (openBlock(), createBlock(_sfc_main$3, {
                  key: 2,
                  type: "no-options",
                  icon: "warning"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(instance$1).props.noOptionsText), 1)
                  ]),
                  _: 1
                })) : (openBlock(), createElementBlock("div", _hoisted_6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(instance$1).forest.normalizedOptions, (rootNode) => {
                    return openBlock(), createBlock(_sfc_main$2, {
                      key: rootNode.id,
                      node: rootNode
                    }, null, 8, ["node"]);
                  }), 128))
                ]))
              ], 64)),
              unref(afterListRenderer) ? (openBlock(), createBlock(_sfc_main$b, {
                key: 4,
                "slot-function": unref(afterListRenderer)
              }, null, 8, ["slot-function"])) : createCommentVNode("", true)
            ], 36), [
              [vShow, unref(instance$1).menu.isOpen]
            ])
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
const instanceId = ref(0);
const props = {
  allowClearingDisabled: {
    type: Boolean,
    default: false
  },
  allowSelectingDisabledDescendants: {
    type: Boolean,
    default: false
  },
  alwaysOpen: {
    type: Boolean,
    default: false
  },
  appendToBody: {
    type: Boolean,
    default: false
  },
  async: {
    type: Boolean,
    default: false
  },
  autoFocus: {
    type: Boolean,
    default: false
  },
  autoLoadRootOptions: {
    type: Boolean,
    default: true
  },
  autoDeselectAncestors: {
    type: Boolean,
    default: false
  },
  autoDeselectDescendants: {
    type: Boolean,
    default: false
  },
  autoSelectAncestors: {
    type: Boolean,
    default: false
  },
  autoSelectDescendants: {
    type: Boolean,
    default: false
  },
  backspaceRemoves: {
    type: Boolean,
    default: true
  },
  beforeClearAll: {
    type: Function,
    default: constant(true)
  },
  branchNodesFirst: {
    type: Boolean,
    default: false
  },
  cacheOptions: {
    type: Boolean,
    default: true
  },
  clearable: {
    type: Boolean,
    default: true
  },
  clearAllText: {
    type: String,
    default: "Clear all"
  },
  clearOnSelect: {
    type: Boolean,
    default: false
  },
  clearValueText: {
    type: String,
    default: "Clear value"
  },
  closeOnSelect: {
    type: Boolean,
    default: true
  },
  defaultExpandLevel: {
    type: Number,
    default: 0
  },
  defaultOptions: {
    type: Object,
    default: new Boolean(false)
  },
  deleteRemoves: {
    type: Boolean,
    default: true
  },
  delimiter: {
    type: String,
    default: ","
  },
  flattenSearchResults: {
    type: Boolean,
    default: false
  },
  disableBranchNodes: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  disableFuzzyMatching: {
    type: Boolean,
    default: false
  },
  flat: {
    type: Boolean,
    default: false
  },
  instanceId: {
    default: () => `${instanceId.value++}$$`,
    type: [String, Number]
  },
  joinValues: {
    type: Boolean,
    default: false
  },
  limit: {
    type: Number,
    default: Infinity
  },
  limitText: {
    type: Function,
    default: function limitTextDefault(count) {
      return `and ${count} more`;
    }
  },
  loadingText: {
    type: String,
    default: "Loading..."
  },
  loadOptions: {
    type: Function
  },
  matchKeys: {
    type: Object,
    default: constant(["label"])
  },
  maxHeight: {
    type: Number,
    default: 300
  },
  multiple: {
    type: Boolean,
    default: false
  },
  name: {
    type: String
  },
  noChildrenText: {
    type: String,
    default: "No sub-options."
  },
  noOptionsText: {
    type: String,
    default: "No options available."
  },
  noResultsText: {
    type: String,
    default: "No results found..."
  },
  normalizer: {
    type: Function,
    default: identity
  },
  openDirection: {
    type: String,
    default: "auto",
    validator: (value) => {
      const acceptableValues = ["auto", "top", "bottom", "above", "below"];
      return acceptableValues.includes(value);
    }
  },
  openOnClick: {
    type: Boolean,
    default: true
  },
  openOnFocus: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array
  },
  placeholder: {
    type: String,
    default: "Select..."
  },
  required: {
    type: Boolean,
    default: false
  },
  retryText: {
    type: String,
    default: "Retry?"
  },
  retryTitle: {
    type: String,
    default: "Click to retry"
  },
  searchable: {
    type: Boolean,
    default: true
  },
  searchNested: {
    type: Boolean,
    default: false
  },
  searchPromptText: {
    type: String,
    default: "Type to search..."
  },
  showCount: {
    type: Boolean,
    default: false
  },
  showCountOf: {
    type: String,
    default: ALL_CHILDREN,
    validator: (value) => {
      const acceptableValues = [ALL_CHILDREN, ALL_DESCENDANTS, LEAF_CHILDREN, LEAF_DESCENDANTS];
      return acceptableValues.includes(value);
    }
  },
  showCountOnSearch: {
    type: Boolean,
    default: false
  },
  sortValueBy: {
    type: String,
    default: ORDER_SELECTED,
    validator: (value) => {
      const acceptableValues = [ORDER_SELECTED, LEVEL, INDEX];
      return acceptableValues.includes(value);
    }
  },
  tabIndex: {
    type: Number,
    default: 0
  },
  modelValue: null,
  valueConsistsOf: {
    type: String,
    default: BRANCH_PRIORITY,
    validator(value) {
      const acceptableValues = [ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE];
      return acceptableValues.includes(value);
    }
  },
  valueFormat: {
    type: String,
    default: "id"
  },
  zIndex: {
    type: [Number, String],
    default: 999
  }
};
class Forest {
  constructor() {
    this.normalizedOptions = new Array();
    this.nodeMap = createMap();
    this.checkedStateMap = createMap();
    this.selectedNodeIds = new Array();
    this.selectedNodeMap = createMap();
  }
}
class LocalSearch {
  constructor() {
    this.active = false;
    this.noResults = true;
    this.countMap = createMap();
  }
}
const asyncOptionsStates = {
  isLoaded: false,
  isLoading: false,
  loadingError: ""
};
class Menu {
  constructor() {
    this.isOpen = false;
    this.current = null;
    this.lastScrollPosition = 0;
    this.placement = "bottom";
  }
}
class Trigger {
  constructor() {
    this.isFocused = false;
    this.searchQuery = "";
  }
}
const traverseAllNodesByIndex = (callback, rootNode) => {
  const walk = (parentNode) => {
    var _a;
    (_a = parentNode == null ? void 0 : parentNode.children) == null ? void 0 : _a.forEach((child) => {
      if (callback(child) !== false && child.isBranch) {
        walk(child);
      }
    });
  };
  walk({ children: rootNode });
};
const verifyProps = (props2) => {
  warning(() => props2.async ? props2.searchable : true, () => 'For async search mode, the value of "searchable" prop must be true.');
  if (props2.options == null && !props2.loadOptions) {
    warning(() => false, () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.');
  }
  if (props2.flat) {
    warning(() => props2.multiple, () => 'You are using flat mode. But you forgot to add "multiple=true"?');
  }
  if (!props2.flat) {
    const propNames = [
      "autoSelectAncestors",
      "autoSelectDescendants",
      "autoDeselectAncestors",
      "autoDeselectDescendants"
    ];
    propNames.forEach((propName) => {
      warning(() => !get(props2, propName), () => `"${propName}" only applies to flat mode.`);
    });
  }
};
function sortValueByLevel(a, b) {
  if (typeof a.level != "undefined" && typeof b.level != "undefined") {
    return a.level === b.level ? sortValueByIndex(a, b) : a.level - b.level;
  }
  return -1;
}
function sortValueByIndex(a, b) {
  var _a, _b;
  let i = 0;
  do {
    if (!a.level || !b.level)
      return -1;
    if ((a == null ? void 0 : a.level) < i) {
      return -1;
    }
    if ((b == null ? void 0 : b.level) < i) {
      return 1;
    }
    if (a.index != void 0 && b.index != void 0 && a.index[i] !== b.index[i]) {
      return ((_a = a == null ? void 0 : a.index) == null ? void 0 : _a[i]) - ((_b = b == null ? void 0 : b.index) == null ? void 0 : _b[i]);
    }
    i++;
  } while (true);
}
function NodeOperation(props2, forest) {
  const selectedNodes = computed(() => {
    const nodes = forest.selectedNodeIds.map(getNode);
    const notNullNodes = nodes.filter((el) => el !== null);
    return notNullNodes;
  });
  const internalValue = computed(() => {
    let internalValue2 = [];
    if (!props2.multiple || props2.flat || props2.disableBranchNodes || props2.valueConsistsOf === ALL) {
      internalValue2 = forest.selectedNodeIds.slice();
    } else if (props2.valueConsistsOf === BRANCH_PRIORITY) {
      internalValue2 = forest.selectedNodeIds.filter((id) => {
        const node = getNode(id);
        if (node == null ? void 0 : node.isRootNode)
          return true;
        return !isSelected(node == null ? void 0 : node.parentNode);
      });
    } else if (props2.valueConsistsOf === LEAF_PRIORITY) {
      internalValue2 = forest.selectedNodeIds.filter((id) => {
        var _a;
        const node = getNode(id);
        if (node == null ? void 0 : node.isLeaf)
          return true;
        return ((_a = node == null ? void 0 : node.children) == null ? void 0 : _a.length) === 0;
      });
    } else if (props2.valueConsistsOf === ALL_WITH_INDETERMINATE) {
      const indeterminateNodeIds = new Array();
      internalValue2 = forest.selectedNodeIds.slice();
      selectedNodes.value.forEach((selectedNode) => {
        var _a;
        (_a = selectedNode.ancestors) == null ? void 0 : _a.forEach((ancestor) => {
          if (indeterminateNodeIds.includes(ancestor.id))
            return;
          if (internalValue2.includes(ancestor.id))
            return;
          indeterminateNodeIds.push(ancestor.id);
        });
      });
      internalValue2.push(...indeterminateNodeIds);
    }
    if (props2.sortValueBy === LEVEL) {
      internalValue2.sort((a, b) => {
        const nodeA = getNode(a);
        const nodeB = getNode(b);
        if (nodeA && nodeB) {
          return sortValueByLevel(nodeA, nodeB);
        } else {
          return 0;
        }
      });
    } else if (props2.sortValueBy === INDEX) {
      internalValue2.sort((a, b) => {
        const nodeA = getNode(a);
        const nodeB = getNode(b);
        if (nodeA && nodeB) {
          return sortValueByIndex(nodeA, nodeB);
        } else {
          return 0;
        }
      });
    }
    return internalValue2;
  });
  const getValue = () => {
    if (props2.valueFormat === "id") {
      return props2.multiple ? internalValue.value.slice() : internalValue.value[0];
    }
    const rawNodes = internalValue.value.map((id) => {
      var _a;
      return (_a = getNode(id)) == null ? void 0 : _a.raw;
    });
    return props2.multiple ? rawNodes : rawNodes[0];
  };
  const getNode = (nodeId) => {
    warning(() => nodeId != null, () => `Invalid node id: ${nodeId}`);
    if (nodeId == null)
      return null;
    return nodeId in forest.nodeMap ? forest.nodeMap[nodeId] : createFallbackNode(nodeId);
  };
  const createFallbackNode = (id) => {
    const raw = extractNodeFromValue(id);
    const label = enhancedNormalizer(raw).label || `${id} (unknown)`;
    const fallbackNode = {
      id,
      label,
      ancestors: [],
      parentNode: NO_PARENT_NODE,
      isFallbackNode: true,
      isRootNode: true,
      isLeaf: true,
      isBranch: false,
      isDisabled: false,
      isNew: false,
      index: [-1],
      level: 0,
      raw
    };
    return forest.nodeMap[id] = fallbackNode;
  };
  const extractNodeFromValue = (id) => {
    const defaultNode = { id };
    if (props2.valueFormat === "id") {
      return defaultNode;
    }
    const valueArray = props2.multiple ? Array.isArray(props2.modelValue) ? props2.modelValue : [] : props2.modelValue ? [props2.modelValue] : [];
    const matched = valueArray.find((value) => {
      return enhancedNormalizer(value).id === id;
    });
    return matched || defaultNode;
  };
  const enhancedNormalizer = (node) => {
    var _a;
    const normalizer = (_a = props2.normalizer) == null ? void 0 : _a.call(props2, node, props2.instanceId.toString());
    return normalizer ? {
      ...node,
      ...normalizer
    } : node;
  };
  const traverseDescendantsBFS = (parentNode, callback) => {
    var _a;
    if (!parentNode.isBranch)
      return;
    const queue = (_a = parentNode == null ? void 0 : parentNode.children) == null ? void 0 : _a.slice();
    while (queue == null ? void 0 : queue.length) {
      const currNode = queue[0];
      if (currNode.isBranch && currNode.children)
        queue.push(...currNode.children);
      callback(currNode);
      queue.shift();
    }
  };
  const isSelected = (node) => {
    return node && forest.selectedNodeMap[node.id] === true;
  };
  const buildForestState = () => {
    const selectedNodeMap = createMap();
    forest.selectedNodeIds.forEach((selectedNodeId) => {
      selectedNodeMap[selectedNodeId] = true;
    });
    forest.selectedNodeMap = selectedNodeMap;
    const checkedStateMap = createMap();
    if (props2.multiple) {
      traverseAllNodesByIndex((node) => {
        checkedStateMap[node.id] = UNCHECKED;
      }, forest.normalizedOptions);
      selectedNodes.value.forEach((selectedNode) => {
        var _a;
        checkedStateMap[selectedNode.id] = CHECKED;
        if (!props2.flat && !props2.disableBranchNodes) {
          (_a = selectedNode.ancestors) == null ? void 0 : _a.forEach((ancestorNode) => {
            if (!isSelected(ancestorNode)) {
              checkedStateMap[ancestorNode.id] = INDETERMINATE;
            }
          });
        }
      });
    }
    forest.checkedStateMap = checkedStateMap;
  };
  const traverseAllNodesDFS = (callback) => {
    forest.normalizedOptions.forEach((rootNode) => {
      traverseDescendantsDFS(rootNode, callback);
      callback(rootNode);
    });
  };
  const traverseDescendantsDFS = (parentNode, callback) => {
    var _a;
    if (!parentNode.isBranch)
      return;
    (_a = parentNode == null ? void 0 : parentNode.children) == null ? void 0 : _a.forEach((child) => {
      traverseDescendantsDFS(child, callback);
      callback(child);
    });
  };
  return {
    getNode,
    enhancedNormalizer,
    traverseDescendantsBFS,
    buildForestState,
    internalValue,
    isSelected,
    getValue,
    selectedNodes,
    traverseAllNodesDFS,
    traverseDescendantsDFS
  };
}
function highlightOption(props2, forest, localSearch, menu, getNode, getMenuDiv) {
  const hasVisibleOptions = computed(() => {
    return visibleOptionIds.value.length !== 0;
  });
  const shouldOptionBeIncludedInSearchResult = (node) => {
    var _a;
    if (node.isMatched)
      return true;
    if (node.isBranch && node.hasMatchedDescendants && !props2.flattenSearchResults)
      return true;
    if (!node.isRootNode && ((_a = node.parentNode) == null ? void 0 : _a.showAllChildrenOnSearch))
      return true;
    return false;
  };
  const visibleOptionIds = computed(() => {
    const visibleOptionIds2 = [];
    const shouldExpand = (node) => {
      return localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
    };
    traverseAllNodesByIndex((node) => {
      if (!localSearch.active || shouldOptionBeIncludedInSearchResult(node)) {
        visibleOptionIds2.push(node.id);
      }
      if (node.isBranch && !shouldExpand(node)) {
        return false;
      }
      return true;
    }, forest.normalizedOptions);
    return visibleOptionIds2;
  });
  const highlightFirstOption = () => {
    if (!hasVisibleOptions.value)
      return;
    const first = visibleOptionIds.value[0];
    const node = getNode(first);
    if (node) {
      setCurrentHighlightedOption(node);
    }
  };
  const highlightPrevOption = () => {
    if (!hasVisibleOptions.value)
      return;
    if (menu.current) {
      const prev = visibleOptionIds.value.indexOf(menu.current) - 1;
      if (prev === -1)
        return highlightLastOption();
      const prevNode = getNode(visibleOptionIds.value[prev]);
      prevNode && setCurrentHighlightedOption(prevNode);
    }
  };
  const highlightNextOption = () => {
    if (!hasVisibleOptions.value)
      return;
    if (menu.current) {
      const next = visibleOptionIds.value.indexOf(menu.current) + 1;
      if (next === visibleOptionIds.value.length)
        return highlightFirstOption();
      const nextNode = getNode(visibleOptionIds.value[next]);
      nextNode && setCurrentHighlightedOption(nextNode);
    }
  };
  const highlightLastOption = () => {
    if (!hasVisibleOptions.value)
      return;
    const last$1 = last(visibleOptionIds.value);
    if (last$1 != void 0) {
      const lastNode = getNode(last$1);
      lastNode && setCurrentHighlightedOption(lastNode);
    }
  };
  const shouldShowOptionInMenu = (node) => {
    if (localSearch.active && !shouldOptionBeIncludedInSearchResult(node)) {
      return false;
    }
    return true;
  };
  const resetHighlightedOptionWhenNecessary = (forceReset = false) => {
    const { current } = menu;
    const node = current && getNode(current);
    if (forceReset || current == null || !(current in forest.nodeMap) || node && !shouldShowOptionInMenu(node)) {
      highlightFirstOption();
    }
  };
  const setCurrentHighlightedOption = (node, scroll = true) => {
    const prev = menu.current;
    if (prev != null && prev in forest.nodeMap) {
      forest.nodeMap[prev].isHighlighted = false;
    }
    menu.current = node.id;
    node.isHighlighted = true;
    if (menu.isOpen && scroll) {
      const scrollToOption = () => {
        const $menu = getMenuDiv();
        const $option = $menu == null ? void 0 : $menu.querySelector(`.vue-treeselect__option[data-id="${node.id}"]`);
        if ($option && $menu) {
          scrollIntoView($menu, $option);
        }
      };
      if (getMenuDiv()) {
        scrollToOption();
      } else {
        nextTick(scrollToOption);
      }
    }
  };
  return {
    resetHighlightedOptionWhenNecessary,
    highlightLastOption,
    highlightFirstOption,
    setCurrentHighlightedOption,
    highlightPrevOption,
    highlightNextOption,
    shouldShowOptionInMenu
  };
}
function fuzzysearch(needle, haystack) {
  var tlen = haystack.length;
  var qlen = needle.length;
  if (qlen > tlen) {
    return false;
  }
  if (qlen === tlen) {
    return needle === haystack;
  }
  outer:
    for (var i = 0, j = 0; i < qlen; i++) {
      var nch = needle.charCodeAt(i);
      while (j < tlen) {
        if (haystack.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
  return true;
}
var fuzzysearch_1 = fuzzysearch;
const getErrorMessage = (err) => {
  return err.message || String(err);
};
function stringifyOptionPropValue(value) {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value.toString();
  }
  return "";
}
function match(enableFuzzyMatch, needle, haystack) {
  return enableFuzzyMatch ? fuzzysearch_1(needle, haystack) : haystack.includes(needle);
}
function delayedLoad(props2, forest, trigger, internalValue, localSearch, getNode, traverseDescendantsBFS, resetHighlightedOptionWhenNecessary, enhancedNormalizer, buildForestState, traverseAllNodesDFS) {
  const remoteSearch = createMap();
  const createAsyncOptionsStates = () => {
    return { ...asyncOptionsStates };
  };
  const rootOptionsStates = reactive(createAsyncOptionsStates());
  const callLoadOptionsProp = ({
    action,
    args,
    isPending,
    start,
    succeed,
    fail,
    end
  }) => {
    if (!props2.loadOptions || isPending()) {
      return;
    }
    start();
    const callback = once((err, result2) => {
      if (err) {
        fail(err);
      } else {
        succeed(result2);
      }
      end();
    });
    const result = props2.loadOptions({
      instanceId: props2.instanceId,
      action,
      ...args,
      callback
    });
    if (isPromise(result)) {
      result.then(() => {
        callback();
      }, (err) => {
        callback(err);
      });
    }
  };
  const loadRootOptions = () => {
    callLoadOptionsProp({
      action: LOAD_ROOT_OPTIONS,
      isPending: () => {
        return rootOptionsStates.isLoading;
      },
      start: () => {
        rootOptionsStates.isLoading = true;
        rootOptionsStates.loadingError = "";
      },
      succeed: () => {
        rootOptionsStates.isLoaded = true;
        nextTick(() => {
          resetHighlightedOptionWhenNecessary(true);
        });
      },
      fail: (err) => {
        rootOptionsStates.loadingError = getErrorMessage(err);
      },
      end: () => {
        rootOptionsStates.isLoading = false;
      }
    });
  };
  const getRemoteSearchEntry = () => {
    const { searchQuery } = trigger;
    const entry = remoteSearch[searchQuery] || reactive({
      ...createAsyncOptionsStates(),
      options: []
    });
    watch(() => entry.options, () => {
      if (trigger.searchQuery === searchQuery)
        initialize();
    }, { deep: true });
    if (searchQuery === "") {
      if (Array.isArray(props2.defaultOptions)) {
        entry.options = props2.defaultOptions;
        entry.isLoaded = true;
        return entry;
      } else if (props2.defaultOptions !== true) {
        entry.isLoaded = true;
        return entry;
      }
    }
    if (!remoteSearch[searchQuery]) {
      remoteSearch[searchQuery] = entry;
    }
    return entry;
  };
  const keepDataOfSelectedNodes = (prevNodeMap) => {
    forest.selectedNodeIds.forEach((id) => {
      if (!prevNodeMap[id])
        return;
      const node = {
        ...prevNodeMap[id],
        isFallbackNode: true
      };
      forest.nodeMap[id] = node;
    });
  };
  const checkDuplication = (node) => {
    warning(() => !(node.id in forest.nodeMap && !forest.nodeMap[node.id].isFallbackNode), () => `Detected duplicate presence of node id ${JSON.stringify(node.id)}. Their labels are "${forest.nodeMap[node.id].label}" and "${node.label}" respectively.`);
  };
  const verifyNodeShape = (node) => {
    warning(() => !(node.children === void 0 && node.isBranch === true), () => "Are you meant to declare an unloaded branch node? `isBranch: true` is no longer supported, please use `children: null` instead.");
  };
  const loadChildrenOptions = (parentNode) => {
    const { id, raw } = parentNode;
    callLoadOptionsProp({
      action: LOAD_CHILDREN_OPTIONS,
      args: {
        parentNode: raw
      },
      isPending: () => {
        var _a;
        return (_a = getNode(id)) == null ? void 0 : _a.childrenStates.isLoading;
      },
      start: () => {
        const node = getNode(id);
        if (node) {
          node.childrenStates.isLoading = true;
          node.childrenStates.loadingError = "";
        }
      },
      succeed: () => {
        const node = getNode(id);
        if (node) {
          node.childrenStates.isLoaded = true;
        }
      },
      fail: (err) => {
        const node = getNode(id);
        if (node) {
          node.childrenStates.loadingError = getErrorMessage(err);
        }
      },
      end: () => {
        const node = getNode(id);
        if (node) {
          node.childrenStates.isLoading = false;
        }
      }
    });
  };
  const fixSelectedNodeIds = (nodeIdListOfPrevValue) => {
    var _a, _b;
    let nextSelectedNodeIds = [];
    if (!props2.multiple || props2.flat || props2.disableBranchNodes || props2.valueConsistsOf === ALL) {
      nextSelectedNodeIds = nodeIdListOfPrevValue;
    } else if (props2.valueConsistsOf === BRANCH_PRIORITY) {
      nodeIdListOfPrevValue.forEach((nodeId) => {
        nextSelectedNodeIds.push(nodeId);
        const node = getNode(nodeId);
        if (node == null ? void 0 : node.isBranch)
          traverseDescendantsBFS(node, (descendant) => {
            nextSelectedNodeIds.push(descendant.id);
          });
      });
    } else if (props2.valueConsistsOf === LEAF_PRIORITY) {
      const map = createMap();
      const queue = nodeIdListOfPrevValue.slice();
      while (queue.length) {
        const nodeId = queue.shift();
        const node = nodeId && getNode(nodeId);
        if (nodeId && node) {
          nextSelectedNodeIds.push(nodeId);
          if (node.isRootNode)
            continue;
          if (node.parentNode) {
            if (!(node.parentNode.id in map)) {
              map[node.parentNode.id] = (_a = node.parentNode.children) == null ? void 0 : _a.length;
            }
            let parentNodeLength = map[node.parentNode.id];
            if (parentNodeLength && --parentNodeLength === 0) {
              queue.push(node.parentNode.id);
            }
          }
        }
      }
    } else if (props2.valueConsistsOf === ALL_WITH_INDETERMINATE) {
      const map = createMap();
      const queue = nodeIdListOfPrevValue.filter((nodeId) => {
        var _a2;
        const node = getNode(nodeId);
        return (node == null ? void 0 : node.isLeaf) || ((_a2 = node == null ? void 0 : node.children) == null ? void 0 : _a2.length) === 0;
      });
      while (queue.length) {
        const nodeId = queue.shift();
        const node = nodeId && getNode(nodeId);
        if (nodeId && node) {
          nextSelectedNodeIds.push(nodeId);
          if (node.isRootNode)
            continue;
          if (node.parentNode) {
            if (!(node.parentNode.id in map)) {
              map[node.parentNode.id] = (_b = node.parentNode.children) == null ? void 0 : _b.length;
            }
            let parentNodeLength = map[node.parentNode.id];
            if (parentNodeLength && --parentNodeLength === 0) {
              queue.push(node.parentNode.id);
            }
          }
        }
      }
    }
    const hasChanged = quickDiff(forest.selectedNodeIds, nextSelectedNodeIds);
    if (hasChanged) {
      forest.selectedNodeIds = nextSelectedNodeIds;
    }
    buildForestState();
  };
  const normalize = (parentNode, nodes, prevNodeMap) => {
    let normalizedOptions = nodes.map((node) => [enhancedNormalizer(node), node]).map(([node, raw], index2) => {
      var _a, _b, _c;
      checkDuplication(node);
      verifyNodeShape(node);
      const { id, label, children, isDefaultExpanded } = node;
      const isRootNode = parentNode === NO_PARENT_NODE;
      const level = isRootNode ? 0 : parentNode.level != void 0 ? parentNode.level + 1 : 0;
      const isBranch = Array.isArray(children) || children === null;
      const isLeaf = !isBranch;
      const isDisabled = !!node.isDisabled || !props2.flat && !isRootNode && parentNode.isDisabled;
      const isNew = !!node.isNew;
      const lowerCased = props2.matchKeys.reduce((prev, key) => ({
        ...prev,
        [key]: stringifyOptionPropValue(node[key]).toLocaleLowerCase()
      }), {});
      const nestedSearchLabel = isRootNode ? lowerCased.label : parentNode.nestedSearchLabel + " " + lowerCased.label;
      forest.nodeMap[id] = createMap();
      const normalized = forest.nodeMap[id];
      normalized.id = id;
      normalized.label = label;
      normalized.level = level;
      normalized.ancestors = isRootNode ? [] : (parentNode == null ? void 0 : parentNode.ancestors) && [parentNode].concat(parentNode == null ? void 0 : parentNode.ancestors);
      normalized.index = (isRootNode ? [] : parentNode.index ? parentNode.index : []).concat(index2);
      normalized.parentNode = parentNode;
      normalized.lowerCased = lowerCased;
      normalized.nestedSearchLabel = nestedSearchLabel;
      normalized.isDisabled = isDisabled;
      normalized.isNew = isNew;
      normalized.isMatched = false;
      normalized.isHighlighted = false;
      normalized.isBranch = isBranch;
      normalized.isLeaf = isLeaf;
      normalized.isRootNode = isRootNode;
      normalized.raw = raw;
      if (isBranch) {
        const isLoaded = Array.isArray(children);
        normalized.childrenStates = { ...createAsyncOptionsStates(), isLoaded };
        normalized.isExpanded = typeof isDefaultExpanded === "boolean" ? isDefaultExpanded : level < props2.defaultExpandLevel;
        normalized.hasMatchedDescendants = false;
        normalized.hasDisabledDescendants = false;
        normalized.isExpandedOnSearch = false;
        normalized.showAllChildrenOnSearch = false;
        normalized.count = {
          [ALL_CHILDREN]: 0,
          [ALL_DESCENDANTS]: 0,
          [LEAF_CHILDREN]: 0,
          [LEAF_DESCENDANTS]: 0
        };
        normalized.children = isLoaded ? normalize(normalized, children, prevNodeMap) : [];
        if (isDefaultExpanded === true)
          (_a = normalized.ancestors) == null ? void 0 : _a.forEach((ancestor) => {
            ancestor.isExpanded = true;
          });
        if (!isLoaded && typeof props2.loadOptions !== "function") {
          warning(() => false, () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.');
        } else if (!isLoaded && normalized.isExpanded) {
          loadChildrenOptions(normalized);
        }
      }
      (_b = normalized.ancestors) == null ? void 0 : _b.forEach((ancestor) => ancestor.count[ALL_DESCENDANTS]++);
      if (isLeaf)
        (_c = normalized.ancestors) == null ? void 0 : _c.forEach((ancestor) => ancestor.count[LEAF_DESCENDANTS]++);
      if (!isRootNode) {
        parentNode.count[ALL_CHILDREN] += 1;
        if (isLeaf)
          parentNode.count[LEAF_CHILDREN] += 1;
        if (isDisabled)
          parentNode.hasDisabledDescendants = true;
      }
      if (prevNodeMap && prevNodeMap[id]) {
        const prev = prevNodeMap[id];
        normalized.isMatched = prev.isMatched;
        normalized.showAllChildrenOnSearch = prev.showAllChildrenOnSearch;
        normalized.isHighlighted = prev.isHighlighted;
        if (prev.isBranch && normalized.isBranch) {
          normalized.isExpanded = prev.isExpanded;
          normalized.isExpandedOnSearch = prev.isExpandedOnSearch;
          if (prev.childrenStates.isLoaded && !normalized.childrenStates.isLoaded) {
            normalized.isExpanded = false;
          } else {
            normalized.childrenStates = { ...prev.childrenStates };
          }
        }
      }
      return normalized;
    });
    if (props2.branchNodesFirst) {
      const branchNodes = normalizedOptions.filter((option) => option.isBranch);
      const leafNodes = normalizedOptions.filter((option) => option.isLeaf);
      normalizedOptions = branchNodes.concat(leafNodes);
    }
    return normalizedOptions;
  };
  const initialize = () => {
    const options = props2.async ? getRemoteSearchEntry().options : props2.options;
    if (Array.isArray(options)) {
      const prevNodeMap = forest.nodeMap;
      forest.nodeMap = createMap();
      keepDataOfSelectedNodes(prevNodeMap);
      forest.normalizedOptions = normalize(NO_PARENT_NODE, options, prevNodeMap);
      fixSelectedNodeIds(internalValue.value);
    } else {
      forest.normalizedOptions = [];
    }
  };
  const handleRemoteSearch = () => {
    const { searchQuery } = trigger;
    const entry = getRemoteSearchEntry();
    const done = () => {
      initialize();
      resetHighlightedOptionWhenNecessary(true);
    };
    if ((searchQuery === "" || props2.cacheOptions) && entry.isLoaded) {
      return done();
    }
    callLoadOptionsProp({
      action: ASYNC_SEARCH,
      args: { searchQuery },
      isPending() {
        return entry.isLoading;
      },
      start: () => {
        entry.isLoading = true;
        entry.isLoaded = false;
        entry.loadingError = "";
      },
      succeed: (options) => {
        entry.isLoaded = true;
        entry.options = options;
        if (trigger.searchQuery === searchQuery)
          done();
      },
      fail: (err) => {
        entry.loadingError = getErrorMessage(err);
      },
      end: () => {
        entry.isLoading = false;
      }
    });
  };
  const handleLocalSearch = () => {
    const { searchQuery } = trigger;
    const done = () => resetHighlightedOptionWhenNecessary(true);
    if (!searchQuery) {
      localSearch.active = false;
      return done();
    }
    localSearch.active = true;
    localSearch.noResults = true;
    traverseAllNodesDFS((node) => {
      if (node.isBranch) {
        node.isExpandedOnSearch = false;
        node.showAllChildrenOnSearch = false;
        node.isMatched = false;
        node.hasMatchedDescendants = false;
        localSearch.countMap[node.id] = {
          [ALL_CHILDREN]: 0,
          [ALL_DESCENDANTS]: 0,
          [LEAF_CHILDREN]: 0,
          [LEAF_DESCENDANTS]: 0
        };
      }
    });
    const lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase();
    const splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, " ").split(" ");
    traverseAllNodesDFS((node) => {
      var _a, _b;
      if (props2.searchNested && splitSearchQuery.length > 1) {
        node.isMatched = splitSearchQuery.every((filterValue) => match(false, filterValue, node.nestedSearchLabel));
      } else {
        node.isMatched = props2.matchKeys.some((matchKey) => match(!props2.disableFuzzyMatching, lowerCasedSearchQuery, node.lowerCased[matchKey]));
      }
      if (node.isMatched) {
        localSearch.noResults = false;
        (_a = node.ancestors) == null ? void 0 : _a.forEach((ancestor) => localSearch.countMap[ancestor.id][ALL_DESCENDANTS]++);
        if (node.isLeaf) {
          (_b = node.ancestors) == null ? void 0 : _b.forEach((ancestor) => localSearch.countMap[ancestor.id][LEAF_DESCENDANTS]++);
        }
        if (node.parentNode && node.parentNode !== NO_PARENT_NODE) {
          localSearch.countMap[node.parentNode.id][ALL_CHILDREN] += 1;
          if (node.isLeaf) {
            localSearch.countMap[node.parentNode.id][LEAF_CHILDREN] += 1;
          }
        }
      }
      if ((node.isMatched || node.isBranch && node.isExpandedOnSearch) && node.parentNode && node.parentNode !== NO_PARENT_NODE) {
        node.parentNode.isExpandedOnSearch = true;
        node.parentNode.hasMatchedDescendants = true;
      }
    });
    done();
  };
  return {
    handleRemoteSearch,
    loadRootOptions,
    loadChildrenOptions,
    getRemoteSearchEntry,
    initialize,
    rootOptionsStates,
    fixSelectedNodeIds,
    handleLocalSearch
  };
}
function menuOperation(props2, emit, menu, wrapper, loadRootOptions, resetHighlightedOptionWhenNecessary, getMenuDiv, getValue, resetSearchQuery, blurInput) {
  const openMenu = () => {
    if (props2.disabled || menu.isOpen) {
      return;
    }
    menu.isOpen = true;
    nextTick(resetHighlightedOptionWhenNecessary);
    nextTick(restoreMenuScrollPosition);
    if (!props2.options && !props2.async) {
      loadRootOptions();
    }
    toggleClickOutsideEvent(true);
    emit("open", props2.instanceId);
  };
  const closeMenu = () => {
    if (!menu.isOpen || !props2.disabled && props2.alwaysOpen) {
      return;
    }
    saveMenuScrollPosition();
    menu.isOpen = false;
    toggleClickOutsideEvent(false);
    resetSearchQuery();
    emit("close", getValue(), props2.instanceId);
  };
  const toggleClickOutsideEvent = (enabled) => {
    if (enabled) {
      document.addEventListener("mousedown", handleClickOutside, false);
    } else {
      document.removeEventListener("mousedown", handleClickOutside, false);
    }
  };
  const handleClickOutside = (evt) => {
    var _a;
    if (wrapper.value && !((_a = wrapper.value) == null ? void 0 : _a.contains(evt.target))) {
      blurInput();
      closeMenu();
    }
  };
  const restoreMenuScrollPosition = () => {
    const $menu = getMenuDiv();
    if ($menu) {
      $menu.scrollTop = menu.lastScrollPosition;
    }
  };
  const saveMenuScrollPosition = () => {
    const $menu = getMenuDiv();
    if ($menu) {
      menu.lastScrollPosition = $menu.scrollTop;
    }
  };
  const toggleMenu = () => {
    if (menu.isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  return { openMenu, toggleClickOutsideEvent, toggleMenu, closeMenu };
}
function nodeValueOperation(props2, emit, forest, localSearch, internalValue, closeMenu, resetSearchQuery, getNode, buildForestState, isSelected, traverseDescendantsBFS, loadChildrenOptions, enhancedNormalizer, traverseDescendantsDFS) {
  const blurOnSelect = ref(false);
  const hasValue = computed(() => {
    return internalValue.value.length > 0;
  });
  const addValue = (node) => {
    forest.selectedNodeIds.push(node.id);
    forest.selectedNodeMap[node.id] = true;
  };
  const removeValue = (node) => {
    removeFromArray(forest.selectedNodeIds, node.id);
    delete forest.selectedNodeMap[node.id];
  };
  const removeLastValue = () => {
    if (!hasValue.value)
      return;
    if (!props2.multiple) {
      return clear();
    }
    const lastValue = last(internalValue.value);
    if (lastValue != void 0) {
      const lastSelectedNode = getNode(lastValue);
      lastSelectedNode && select(lastSelectedNode);
    }
  };
  const clear = () => {
    if (hasValue.value) {
      if (!props2.multiple || props2.allowClearingDisabled) {
        forest.selectedNodeIds = [];
      } else {
        forest.selectedNodeIds = forest.selectedNodeIds.filter((nodeId) => {
          var _a;
          return (_a = getNode(nodeId)) == null ? void 0 : _a.isDisabled;
        });
      }
      buildForestState();
    }
  };
  const _selectNode = (node) => {
    var _a, _b;
    if (!props2.multiple || props2.disableBranchNodes) {
      return addValue(node);
    }
    if (props2.flat) {
      addValue(node);
      if (props2.autoSelectAncestors) {
        (_a = node.ancestors) == null ? void 0 : _a.forEach((ancestor) => {
          if (!isSelected(ancestor) && !ancestor.isDisabled) {
            addValue(ancestor);
          }
        });
      } else if (props2.autoSelectDescendants) {
        traverseDescendantsBFS(node, (descendant) => {
          if (!isSelected(descendant) && !descendant.isDisabled) {
            addValue(descendant);
          }
        });
      }
      return;
    }
    const isFullyChecked = node.isLeaf || !node.hasDisabledDescendants || props2.allowSelectingDisabledDescendants;
    if (isFullyChecked) {
      addValue(node);
    }
    if (node.isBranch) {
      traverseDescendantsBFS(node, (descendant) => {
        if (!descendant.isDisabled || props2.allowSelectingDisabledDescendants) {
          addValue(descendant);
        }
      });
    }
    if (isFullyChecked) {
      let curr = node;
      while ((curr = curr == null ? void 0 : curr.parentNode) !== NO_PARENT_NODE) {
        if ((_b = curr == null ? void 0 : curr.children) == null ? void 0 : _b.every(isSelected)) {
          addValue(curr);
        } else
          break;
      }
    }
  };
  const _deselectNode = (node) => {
    var _a, _b;
    if (props2.disableBranchNodes) {
      return removeValue(node);
    }
    if (props2.flat) {
      removeValue(node);
      if (props2.autoDeselectAncestors) {
        (_a = node.ancestors) == null ? void 0 : _a.forEach((ancestor) => {
          if (isSelected(ancestor) && !ancestor.isDisabled) {
            removeValue(ancestor);
          }
        });
      } else if (props2.autoDeselectDescendants) {
        traverseDescendantsBFS(node, (descendant) => {
          if (isSelected(descendant) && !descendant.isDisabled) {
            removeValue(descendant);
          }
        });
      }
      return;
    }
    let hasUncheckedSomeDescendants = false;
    if (node.isBranch) {
      traverseDescendantsDFS(node, (descendant) => {
        if (!descendant.isDisabled || props2.allowSelectingDisabledDescendants) {
          removeValue(descendant);
          hasUncheckedSomeDescendants = true;
        }
      });
    }
    if (node.isLeaf || hasUncheckedSomeDescendants || ((_b = node.children) == null ? void 0 : _b.length) === 0) {
      removeValue(node);
      let curr = node;
      while ((curr = curr.parentNode ? curr.parentNode : null) !== NO_PARENT_NODE) {
        if (isSelected(curr)) {
          removeValue(curr);
        } else
          break;
      }
    }
  };
  const select = (node) => {
    if (props2.disabled || node.isDisabled) {
      return;
    }
    if (!props2.multiple) {
      clear();
    }
    const nextState = props2.multiple && !props2.flat ? forest.checkedStateMap[node.id] === UNCHECKED : !isSelected(node);
    if (nextState) {
      _selectNode(node);
    } else {
      _deselectNode(node);
    }
    buildForestState();
    if (nextState) {
      emit("select", node.raw, props2.instanceId);
    } else {
      emit("deselect", node.raw, props2.instanceId);
    }
    if (localSearch.active && nextState && (!props2.multiple || props2.clearOnSelect)) {
      resetSearchQuery();
    }
    if (!props2.multiple && props2.closeOnSelect) {
      closeMenu();
      if (props2.searchable) {
        blurOnSelect.value = true;
      }
    }
  };
  const shouldExpand = (node) => {
    return localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
  };
  const toggleExpanded = (node) => {
    let nextState;
    if (localSearch.active) {
      nextState = node.isExpandedOnSearch = !node.isExpandedOnSearch;
      if (nextState)
        node.showAllChildrenOnSearch = true;
    } else {
      nextState = node.isExpanded = !node.isExpanded;
    }
    if (nextState && !node.childrenStates.isLoaded) {
      loadChildrenOptions(node);
    }
  };
  const extractCheckedNodeIdsFromValue = () => {
    if (props2.modelValue == null)
      return [];
    if (props2.valueFormat === "id") {
      return props2.multiple ? props2.modelValue.slice() : [props2.modelValue];
    }
    return (props2.multiple ? props2.modelValue : [props2.modelValue]).map((node) => enhancedNormalizer(node)).map((node) => node.id);
  };
  return {
    clear,
    hasValue,
    removeLastValue,
    select,
    shouldExpand,
    toggleExpanded,
    blurOnSelect,
    extractCheckedNodeIdsFromValue
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Treeselect",
  props,
  emits: ["select", "deselect", "close", "open", "update:modelValue", "search-change"],
  setup(__props, { emit }) {
    const props2 = __props;
    verifyProps(props2);
    const control = ref();
    const forest = reactive(new Forest());
    const trigger = reactive(new Trigger());
    const menu = reactive(new Menu());
    const menuRef = ref();
    const wrapper = ref();
    const localSearch = reactive(new LocalSearch());
    const wrapperClass = computed(() => {
      return {
        "vue-treeselect": true,
        "vue-treeselect--single": !props2.multiple,
        "vue-treeselect--multi": props2.multiple,
        "vue-treeselect--searchable": props2.searchable,
        "vue-treeselect--disabled": props2.disabled,
        "vue-treeselect--focused": trigger.isFocused,
        "vue-treeselect--has-value": hasValue.value,
        "vue-treeselect--open": menu.isOpen,
        "vue-treeselect--open-above": menu.placement === "top",
        "vue-treeselect--open-below": menu.placement === "bottom",
        "vue-treeselect--branch-nodes-disabled": props2.disableBranchNodes,
        "vue-treeselect--append-to-body": props2.appendToBody
      };
    });
    const $slots = useSlots();
    const beforeListRenderer = $slots["before-list"];
    const afterListRenderer = $slots["after-list"];
    const customValueLabelRenderer = $slots["value-label"];
    const customLabelRenderer = $slots["option-label"];
    const getMenuDiv = () => {
      var _a;
      const $menu = (_a = menuRef.value) == null ? void 0 : _a.$refs.menu;
      return $menu && $menu.nodeName !== "#comment" ? $menu : null;
    };
    const getControlDiv = () => {
      var _a;
      return (_a = control.value) == null ? void 0 : _a.$el;
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
    } = NodeOperation(props2, forest);
    const {
      resetHighlightedOptionWhenNecessary,
      highlightLastOption,
      highlightFirstOption,
      setCurrentHighlightedOption,
      highlightPrevOption,
      highlightNextOption,
      shouldShowOptionInMenu
    } = highlightOption(props2, forest, localSearch, menu, getNode, getMenuDiv);
    const {
      handleRemoteSearch,
      loadRootOptions,
      loadChildrenOptions,
      getRemoteSearchEntry,
      initialize,
      rootOptionsStates,
      fixSelectedNodeIds,
      handleLocalSearch
    } = delayedLoad(props2, forest, trigger, internalValue, localSearch, getNode, traverseDescendantsBFS, resetHighlightedOptionWhenNecessary, enhancedNormalizer, buildForestState, traverseAllNodesDFS);
    const getValueContainer = () => {
      var _a;
      return (_a = control.value) == null ? void 0 : _a.$refs["value-container"];
    };
    const getInput = () => {
      return getValueContainer().$refs.input;
    };
    const blurInput = () => {
      getInput().blur();
    };
    const focusInput = () => {
      getInput().focus();
    };
    const { openMenu, toggleClickOutsideEvent, toggleMenu, closeMenu } = menuOperation(props2, emit, menu, wrapper, loadRootOptions, resetHighlightedOptionWhenNecessary, getMenuDiv, getValue, resetSearchQuery, blurInput);
    const {
      clear,
      hasValue,
      removeLastValue,
      select,
      shouldExpand,
      toggleExpanded,
      blurOnSelect,
      extractCheckedNodeIdsFromValue
    } = nodeValueOperation(props2, emit, forest, localSearch, internalValue, closeMenu, resetSearchQuery, getNode, buildForestState, isSelected, traverseDescendantsBFS, loadChildrenOptions, enhancedNormalizer, traverseDescendantsDFS);
    const handleMouseDown = (evt) => {
      if (props2.disabled)
        return;
      const isClickedOnValueContainer = getValueContainer().$el.contains(evt.target);
      if (isClickedOnValueContainer && !menu.isOpen && (props2.openOnClick || trigger.isFocused)) {
        openMenu();
      }
      if (blurOnSelect.value) {
        blurInput();
      } else {
        focusInput();
      }
      blurOnSelect.value = false;
    };
    const appendToBodyMenuStyle = computed(() => {
      var _a;
      if (props2.appendToBody) {
        const controlRect = (_a = getControlDiv()) == null ? void 0 : _a.getBoundingClientRect();
        const offsetY = menu.placement === "bottom" ? controlRect == null ? void 0 : controlRect.height : 0;
        return {
          left: Math.round(controlRect == null ? void 0 : controlRect.left) + "px",
          top: Math.round((controlRect == null ? void 0 : controlRect.top) + offsetY) + "px",
          width: (controlRect == null ? void 0 : controlRect.width) + "px"
        };
      }
      return "";
    });
    provide(instance, {
      props: props2,
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
    watch(() => props2.alwaysOpen, () => {
      if (props2.alwaysOpen) {
        openMenu();
      } else {
        closeMenu();
      }
    });
    watch(() => props2.multiple, () => {
      if (props2.multiple) {
        buildForestState();
      }
    });
    watch(() => cloneDeep(props2.options), () => {
      if (props2.async) {
        return;
      }
      initialize();
      rootOptionsStates.isLoaded = Array.isArray(props2.options);
    }, {
      deep: true,
      immediate: true
    });
    watch(() => trigger.searchQuery, () => {
      if (props2.async) {
        handleRemoteSearch();
      } else {
        handleLocalSearch();
      }
      emit("search-change", trigger.searchQuery, props2.instanceId);
    });
    watch(() => props2.modelValue, () => {
      const nodeIdsFromValue = extractCheckedNodeIdsFromValue();
      const hasChanged = quickDiff(nodeIdsFromValue, internalValue.value);
      if (hasChanged) {
        fixSelectedNodeIds(nodeIdsFromValue);
      }
    }, { immediate: true });
    watch(() => props2.disabled, (val) => {
      if (val && menu.isOpen) {
        closeMenu();
      } else if (!val && !menu.isOpen && props2.alwaysOpen) {
        openMenu();
      }
    });
    watch([() => props2.flat, () => props2.branchNodesFirst, () => props2.matchKeys], () => {
      initialize();
    });
    watch(internalValue, (newValue, oldValue) => {
      const hasChanged = quickDiff(newValue, oldValue);
      if (hasChanged) {
        emit("update:modelValue", getValue(), props2.instanceId);
      }
    }, { deep: true });
    onMounted(() => {
      if (props2.autoFocus) {
        focusInput();
      }
      if (!props2.options && !props2.async && props2.autoLoadRootOptions) {
        loadRootOptions();
      }
      if (props2.alwaysOpen) {
        openMenu();
      }
      if (props2.async && props2.defaultOptions) {
        handleRemoteSearch();
      }
    });
    onUnmounted(() => {
      toggleClickOutsideEvent(false);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "wrapper",
        ref: wrapper,
        class: normalizeClass(unref(wrapperClass))
      }, [
        createVNode(_sfc_main$e),
        createVNode(_sfc_main$4, {
          ref_key: "control",
          ref: control
        }, null, 512),
        (openBlock(), createBlock(Teleport, {
          to: "body",
          disabled: !props2.appendToBody
        }, [
          createVNode(_sfc_main$1, {
            ref_key: "menuRef",
            ref: menuRef,
            class: normalizeClass(_ctx.appendToBody ? unref(wrapperClass) : ""),
            style: normalizeStyle(unref(appendToBodyMenuStyle))
          }, null, 8, ["class", "style"])
        ], 8, ["disabled"]))
      ], 2);
    };
  }
});
var style = /* @__PURE__ */ (() => '.vue-treeselect-helper-hide{display:none}.vue-treeselect-helper-zoom-effect-off{transform:none!important}@keyframes vue-treeselect-animation-fade-in{0%{opacity:0}}@keyframes vue-treeselect-animation-bounce{0%,to{transform:scale(0)}50%{transform:scale(1)}}@keyframes vue-treeselect-animation-rotate{to{transform:rotate(360deg)}}.vue-treeselect__multi-value-item--transition-enter-active,.vue-treeselect__multi-value-item--transition-leave-active{transition-duration:.2s;transition-property:transform,opacity}.vue-treeselect__multi-value-item--transition-enter-active{transition-timing-function:cubic-bezier(.075,.82,.165,1)}.vue-treeselect__multi-value-item--transition-leave-active{transition-timing-function:cubic-bezier(.215,.61,.355,1);position:absolute}.vue-treeselect__multi-value-item--transition-enter,.vue-treeselect__multi-value-item--transition-leave-to{transform:scale(.7);opacity:0}.vue-treeselect__multi-value-item--transition-move{transition:.2s transform cubic-bezier(.165,.84,.44,1)}.vue-treeselect{position:relative;text-align:left}[dir=rtl] .vue-treeselect{text-align:right}.vue-treeselect div,.vue-treeselect span{box-sizing:border-box}.vue-treeselect svg{fill:currentColor}.vue-treeselect__control{padding-left:5px;padding-right:5px;display:table;table-layout:fixed;width:100%;height:36px;border:1px solid #ddd;border-radius:5px;background:#fff;transition-duration:.2s;transition-property:border-color,box-shadow,width,height,background-color,opacity;transition-timing-function:cubic-bezier(.215,.61,.355,1)}.vue-treeselect:not(.vue-treeselect--disabled):not(.vue-treeselect--focused) .vue-treeselect__control:hover{border-color:#cfcfcf}.vue-treeselect--focused:not(.vue-treeselect--open) .vue-treeselect__control{border-color:#039be5;box-shadow:0 0 0 3px #039be51a}.vue-treeselect--disabled .vue-treeselect__control{background-color:#f9f9f9}.vue-treeselect--open .vue-treeselect__control{border-color:#cfcfcf}.vue-treeselect--open.vue-treeselect--open-below .vue-treeselect__control{border-bottom-left-radius:0;border-bottom-right-radius:0}.vue-treeselect--open.vue-treeselect--open-above .vue-treeselect__control{border-top-left-radius:0;border-top-right-radius:0}.vue-treeselect__value-container,.vue-treeselect__multi-value{vertical-align:middle}.vue-treeselect__value-container{display:table-cell;position:relative}.vue-treeselect--searchable:not(.vue-treeselect--disabled) .vue-treeselect__value-container{cursor:text}.vue-treeselect__multi-value{display:inline-block}.vue-treeselect--has-value .vue-treeselect__multi-value{margin-bottom:5px}.vue-treeselect__placeholder,.vue-treeselect__single-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-left:5px;padding-right:5px;position:absolute;top:0;right:0;bottom:0;left:0;line-height:34px;user-select:none;pointer-events:none}.vue-treeselect__placeholder{color:#bdbdbd}.vue-treeselect__single-value{color:#333}.vue-treeselect--focused.vue-treeselect--searchable .vue-treeselect__single-value{color:#bdbdbd}.vue-treeselect--disabled .vue-treeselect__single-value{position:static}.vue-treeselect__multi-value-item-container{display:inline-block;padding-top:5px;padding-right:5px;vertical-align:top}[dir=rtl] .vue-treeselect__multi-value-item-container{padding-right:0;padding-left:5px}.vue-treeselect__multi-value-item{cursor:pointer;display:inline-table;background:#e3f2fd;padding:2px 0;border:1px solid transparent;border-radius:2px;color:#039be5;font-size:12px;vertical-align:top}.vue-treeselect:not(.vue-treeselect--disabled) .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-disabled):hover .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new) .vue-treeselect__multi-value-item:not(.vue-treeselect__multi-value-item-new):hover{cursor:pointer;background:#e3f2fd;color:#039be5}.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-disabled{cursor:default;background:#f5f5f5;color:#757575}.vue-treeselect--disabled .vue-treeselect__multi-value-item{cursor:default;background:#fff;border-color:#e5e5e5;color:#555}.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new,.vue-treeselect__multi-value-item.vue-treeselect__multi-value-item-new:hover{background:#e8f5e9}.vue-treeselect__value-remove,.vue-treeselect__multi-value-label{display:table-cell;padding:0 5px;vertical-align:middle}.vue-treeselect__value-remove{color:#039be5;padding-left:5px;border-left:1px solid #fff;line-height:0}[dir=rtl] .vue-treeselect__value-remove{border-left:0 none;border-right:1px solid #fff}.vue-treeselect__multi-value-item:hover .vue-treeselect__value-remove{color:#e53935}.vue-treeselect--disabled .vue-treeselect__value-remove,.vue-treeselect__multi-value-item-disabled .vue-treeselect__value-remove{display:none}.vue-treeselect__value-remove>svg{width:6px;height:6px}.vue-treeselect__multi-value-label{padding-right:5px;white-space:pre-line;user-select:none}.vue-treeselect__limit-tip{display:inline-block;padding-top:5px;padding-right:5px;vertical-align:top}[dir=rtl] .vue-treeselect__limit-tip{padding-right:0;padding-left:5px}.vue-treeselect__limit-tip-text{cursor:default;display:block;margin:2px 0;padding:1px 0;color:#bdbdbd;font-size:12px;font-weight:600}.vue-treeselect__input-container{display:block;max-width:100%;outline:none}.vue-treeselect--single .vue-treeselect__input-container{font-size:inherit;height:100%}.vue-treeselect--multi .vue-treeselect__input-container{display:inline-block;font-size:12px;vertical-align:top}.vue-treeselect--searchable .vue-treeselect__input-container{padding-left:5px;padding-right:5px}.vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value .vue-treeselect__input-container{padding-top:5px;padding-left:0}[dir=rtl] .vue-treeselect--searchable.vue-treeselect--multi.vue-treeselect--has-value .vue-treeselect__input-container{padding-left:5px;padding-right:0}.vue-treeselect--disabled .vue-treeselect__input-container{display:none}.vue-treeselect__input,.vue-treeselect__sizer{margin:0;line-height:inherit;font-family:inherit;font-size:inherit}.vue-treeselect__input{max-width:100%;margin:0;padding:0;border:0;outline:none;box-sizing:content-box;box-shadow:none;background:none transparent;line-height:1;vertical-align:middle}.vue-treeselect__input::-ms-clear{display:none}.vue-treeselect--single .vue-treeselect__input{width:100%;height:100%}.vue-treeselect--multi .vue-treeselect__input{padding-top:3px;padding-bottom:3px}.vue-treeselect--has-value .vue-treeselect__input{line-height:inherit;vertical-align:top}.vue-treeselect__sizer{position:absolute;top:0;left:0;visibility:hidden;height:0;overflow:scroll;white-space:pre}.vue-treeselect__x-container{display:table-cell;vertical-align:middle;width:20px;text-align:center;line-height:0;cursor:pointer;color:#ccc;animation:.2s vue-treeselect-animation-fade-in cubic-bezier(.075,.82,.165,1)}.vue-treeselect__x-container:hover{color:#e53935}.vue-treeselect__x{width:8px;height:8px}.vue-treeselect__control-arrow-container{display:table-cell;vertical-align:middle;width:20px;text-align:center;line-height:0;cursor:pointer}.vue-treeselect--disabled .vue-treeselect__control-arrow-container{cursor:default}.vue-treeselect__control-arrow{width:9px;height:9px;color:#ccc}.vue-treeselect:not(.vue-treeselect--disabled) .vue-treeselect__control-arrow-container:hover .vue-treeselect__control-arrow{color:#616161}.vue-treeselect--disabled .vue-treeselect__control-arrow{opacity:.35}.vue-treeselect__control-arrow--rotated{transform:rotate(180deg)}.vue-treeselect__menu-container{position:absolute;left:0;width:100%;overflow:visible;transition:0s}.vue-treeselect--open-below:not(.vue-treeselect--append-to-body) .vue-treeselect__menu-container{top:100%}.vue-treeselect--open-above:not(.vue-treeselect--append-to-body) .vue-treeselect__menu-container{bottom:100%}.vue-treeselect__menu{cursor:default;padding-top:5px;padding-bottom:5px;display:block;position:absolute;overflow-x:hidden;overflow-y:auto;width:auto;border:1px solid #cfcfcf;background:#fff;line-height:180%;-webkit-overflow-scrolling:touch}.vue-treeselect--open-below .vue-treeselect__menu{border-bottom-left-radius:5px;border-bottom-right-radius:5px;top:0;margin-top:-1px;border-top-color:#f2f2f2;box-shadow:0 1px #0000000f}.vue-treeselect--open-above .vue-treeselect__menu{border-top-left-radius:5px;border-top-right-radius:5px;bottom:0;margin-bottom:-1px;border-bottom-color:#f2f2f2}.vue-treeselect__indent-level-0 .vue-treeselect__option{padding-left:5px}[dir=rtl] .vue-treeselect__indent-level-0 .vue-treeselect__option{padding-left:5px;padding-right:5px}.vue-treeselect__indent-level-0 .vue-treeselect__tip{padding-left:25px}[dir=rtl] .vue-treeselect__indent-level-0 .vue-treeselect__tip{padding-left:5px;padding-right:25px}.vue-treeselect__indent-level-1 .vue-treeselect__option{padding-left:25px}[dir=rtl] .vue-treeselect__indent-level-1 .vue-treeselect__option{padding-left:5px;padding-right:25px}.vue-treeselect__indent-level-1 .vue-treeselect__tip{padding-left:45px}[dir=rtl] .vue-treeselect__indent-level-1 .vue-treeselect__tip{padding-left:5px;padding-right:45px}.vue-treeselect__indent-level-2 .vue-treeselect__option{padding-left:45px}[dir=rtl] .vue-treeselect__indent-level-2 .vue-treeselect__option{padding-left:5px;padding-right:45px}.vue-treeselect__indent-level-2 .vue-treeselect__tip{padding-left:65px}[dir=rtl] .vue-treeselect__indent-level-2 .vue-treeselect__tip{padding-left:5px;padding-right:65px}.vue-treeselect__indent-level-3 .vue-treeselect__option{padding-left:65px}[dir=rtl] .vue-treeselect__indent-level-3 .vue-treeselect__option{padding-left:5px;padding-right:65px}.vue-treeselect__indent-level-3 .vue-treeselect__tip{padding-left:85px}[dir=rtl] .vue-treeselect__indent-level-3 .vue-treeselect__tip{padding-left:5px;padding-right:85px}.vue-treeselect__indent-level-4 .vue-treeselect__option{padding-left:85px}[dir=rtl] .vue-treeselect__indent-level-4 .vue-treeselect__option{padding-left:5px;padding-right:85px}.vue-treeselect__indent-level-4 .vue-treeselect__tip{padding-left:105px}[dir=rtl] .vue-treeselect__indent-level-4 .vue-treeselect__tip{padding-left:5px;padding-right:105px}.vue-treeselect__indent-level-5 .vue-treeselect__option{padding-left:105px}[dir=rtl] .vue-treeselect__indent-level-5 .vue-treeselect__option{padding-left:5px;padding-right:105px}.vue-treeselect__indent-level-5 .vue-treeselect__tip{padding-left:125px}[dir=rtl] .vue-treeselect__indent-level-5 .vue-treeselect__tip{padding-left:5px;padding-right:125px}.vue-treeselect__indent-level-6 .vue-treeselect__option{padding-left:125px}[dir=rtl] .vue-treeselect__indent-level-6 .vue-treeselect__option{padding-left:5px;padding-right:125px}.vue-treeselect__indent-level-6 .vue-treeselect__tip{padding-left:145px}[dir=rtl] .vue-treeselect__indent-level-6 .vue-treeselect__tip{padding-left:5px;padding-right:145px}.vue-treeselect__indent-level-7 .vue-treeselect__option{padding-left:145px}[dir=rtl] .vue-treeselect__indent-level-7 .vue-treeselect__option{padding-left:5px;padding-right:145px}.vue-treeselect__indent-level-7 .vue-treeselect__tip{padding-left:165px}[dir=rtl] .vue-treeselect__indent-level-7 .vue-treeselect__tip{padding-left:5px;padding-right:165px}.vue-treeselect__indent-level-8 .vue-treeselect__option{padding-left:165px}[dir=rtl] .vue-treeselect__indent-level-8 .vue-treeselect__option{padding-left:5px;padding-right:165px}.vue-treeselect__indent-level-8 .vue-treeselect__tip{padding-left:185px}[dir=rtl] .vue-treeselect__indent-level-8 .vue-treeselect__tip{padding-left:5px;padding-right:185px}.vue-treeselect__option{padding-left:5px;padding-right:5px;display:table;table-layout:fixed;width:100%}.vue-treeselect__option--highlight{background:#fff9c4}.vue-treeselect--single .vue-treeselect__option--selected{background:#e3f2fd;font-weight:600}.vue-treeselect--single .vue-treeselect__option--selected:hover{background:#e3f2fd}.vue-treeselect__option--hide{display:none}.vue-treeselect__option-arrow-container,.vue-treeselect__option-arrow-placeholder{display:table-cell;vertical-align:middle;width:20px;text-align:center;line-height:0}.vue-treeselect__option-arrow-container{cursor:pointer}.vue-treeselect__option-arrow{display:inline-block;width:9px;height:9px;color:#ccc;vertical-align:middle;transition:.2s transform cubic-bezier(.19,1,.22,1);transform:rotate(-90deg)}[dir=rtl] .vue-treeselect__option-arrow{transform:rotate(90deg)}.vue-treeselect__option-arrow-container:hover .vue-treeselect__option-arrow,.vue-treeselect--branch-nodes-disabled .vue-treeselect__option:hover .vue-treeselect__option-arrow{color:#616161}.vue-treeselect__option-arrow--rotated,[dir=rtl] .vue-treeselect__option-arrow--rotated{transform:rotate(0)}.vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter{transform:rotate(-90deg)!important}[dir=rtl] .vue-treeselect__option-arrow--rotated.vue-treeselect__option-arrow--prepare-enter{transform:rotate(90deg)!important}.vue-treeselect__label-container{display:table-cell;vertical-align:middle;cursor:pointer;display:table;width:100%;table-layout:fixed;color:inherit}.vue-treeselect__option--disabled .vue-treeselect__label-container{cursor:not-allowed;color:#00000040}.vue-treeselect__checkbox-container{display:table-cell;width:20px;min-width:20px;height:100%;text-align:center;vertical-align:middle}.vue-treeselect__checkbox{display:block;margin:auto;width:12px;height:12px;border-width:1px;border-style:solid;border-radius:2px;position:relative;transition:.2s all cubic-bezier(.075,.82,.165,1)}.vue-treeselect__check-mark,.vue-treeselect__minus-mark{display:block;position:absolute;left:1px;top:1px;background-repeat:no-repeat;opacity:0;transition:.2s all ease}.vue-treeselect__minus-mark{width:8px;height:8px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAD///////9zeKVjAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=);background-size:8px 8px}@media (min-resolution: 1.5dppx){.vue-treeselect__minus-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==)}}@media (min-resolution: 192dpi){.vue-treeselect__minus-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAAD///////////84wDuoAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==)}}@media (min-resolution: 288dpi){.vue-treeselect__minus-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAAD///////////////+PQt5oAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==)}}.vue-treeselect__checkbox--indeterminate>.vue-treeselect__minus-mark{opacity:1}.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAADi4uLh4eHOxeSRAAAAAnRSTlMAuLMp9oYAAAAPSURBVAjXY4CDrJUgBAMAGaECJ9dz3BAAAAAASUVORK5CYII=)}@media (min-resolution: 1.5dppx){.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==)}}@media (min-resolution: 192dpi){.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAADFBMVEUAAADi4uLi4uLh4eE5RQaIAAAAA3RSTlMAyTzPIdReAAAAGUlEQVQI12PAD+b///+Nof7//79gAsLFCwAx/w4blADeeQAAAABJRU5ErkJggg==)}}@media (min-resolution: 288dpi){.vue-treeselect__checkbox--disabled .vue-treeselect__minus-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAD1BMVEUAAADh4eHg4ODNzc3h4eEYfw2wAAAABHRSTlMAy2EFIuWxUgAAACRJREFUGNNjGBBgJOICBY7KDCoucODEAJSAS6FwUJShGjAQAADBPRGrK2/FhgAAAABJRU5ErkJggg==)}}.vue-treeselect__check-mark{width:8px;height:8px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA8u24NxILB+Tawb6jiH1zRz0xIQIIP3GUAAAAMklEQVQI1y3FtQEAMQDDQD+EGbz/qkEVOpyEOP6PudKjZNSXn4Jm2CKRdBKzSLsFWl8fMG0Bl6Jk1rMAAAAASUVORK5CYII=);background-size:8px 8px;transform:scaleY(1 / 8)}@media (min-resolution: 1.5dppx){.vue-treeselect__check-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC)}}@media (min-resolution: 192dpi){.vue-treeselect__check-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAYFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////98JRy6AAAAH3RSTlMAzu4sDenl38fBvo1OMyIdEQrj1cSihX5hYFpHNycIcQOASAAAAF9JREFUGNN9zEcOgDAMRFHTS0LvNfe/JRmHKAIJ/mqeLJn+k9uDtaeUeFnFziGsBucUTirrprfe81RqZ3Bb6hPWeuZwDFOHyf+ig9CCzQ7INBn7bG5kF+QSt13BHNJnF7AaCT4Y+CW7AAAAAElFTkSuQmCC)}}@media (min-resolution: 288dpi){.vue-treeselect__check-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAWlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////9ZMre9AAAAHXRSTlMA/PiJhGNI9XlEHJB/b2ldV08+Oibk49vPp6QhAYgGBuwAAACCSURBVCjPrdHdDoIwDAXgTWAqCigo/+f9X5OwnoUwtis4V92XNWladUl+rzQPeQJAN2EHxoOnsPn7/oYk8fxBv08Rr/deOH/aZ2Nm8ZJ+s573QGfWKnNuZGzWm3+lv2V3pcU1XQ385/yjmBoM3Z+dXvlbYLLD3ujhTaOM3KaIXvNkFkuSEvYy1LqOAAAAAElFTkSuQmCC)}}.vue-treeselect__checkbox--checked>.vue-treeselect__check-mark{opacity:1;transform:scaleY(1)}.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUAAADj4+Pf39/h4eHh4eHh4eHk5OTh4eHg4ODi4uLh4eHh4eHg4ODh4eHh4eHg4ODh4eHh4eHp6en////h4eFqcyvUAAAAFHRSTlMAOQfy7bgS5NrBvqOIfXNHMSELAgQ/iFsAAAA2SURBVAjXY4AANjYIzcjMAaVFuBkY+RkEWERYmRjYRXjANAOfiIgIFxNIAa8IpxBEi6AwiAQAK2MBd7xY8csAAAAASUVORK5CYII=)}@media (min-resolution: 1.5dppx){.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==)}}@media (min-resolution: 192dpi){.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAXVBMVEUAAADh4eHh4eHh4eHi4uLb29vh4eHh4eHh4eHh4eHh4eHh4eHh4eHi4uLi4uLj4+Pi4uLk5OTo6Ojh4eHh4eHi4uLg4ODg4ODh4eHg4ODh4eHf39/g4OD////h4eEzIk+wAAAAHnRSTlMAzu6/LA3p5eLZx8ONTjYiHRIKooV+YWBaRzEnCANnm5rnAAAAZElEQVQY033P2wqAIAyA4VWaaWrnc/n+j5mbhBjUf7WPoTD47TJb4i5zTr/sRDRHuyFaoWX7uK/RlbctlPEuyI1f4WY9yQINEkf6rzzo8YIzmUFoCs7J1EjeIaa9bXIEmzl8dgOZEAj/+2IvzAAAAABJRU5ErkJggg==)}}@media (min-resolution: 288dpi){.vue-treeselect__checkbox--disabled .vue-treeselect__check-mark{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAUVBMVEUAAADh4eHh4eHh4eHh4eHi4uLi4uLh4eHh4eHh4eHf39/j4+Ph4eHh4eHh4eHg4ODi4uLh4eHh4eHi4uLh4eHh4eHh4eHh4eHh4eH////h4eF3FMFTAAAAGnRSTlMA+/eJhGhfSHE9JBzz5KaQf3pXT0Xbz0I5AYDw8F0AAAB+SURBVCjPrdHbDoMgEEVRKAii1dZe9fz/hxplTiKIT7qfYCWTEEZdUvOwbckNAD2WHeh3brHW5f5EzGQ+iN+b1Gt6KPvtv16Dn6JX9M9ya3/A1yfu5dlyduL6Hec7mXY6ddXLPP2lpABGZ8PWXfYLTJxZekVhhl7eTX24zZPNKXoRC7zQLjUAAAAASUVORK5CYII=)}}.vue-treeselect__checkbox--unchecked{border-color:#e0e0e0;background:#fff}.vue-treeselect__label-container:hover .vue-treeselect__checkbox--unchecked{border-color:#039be5;background:#fff}.vue-treeselect__checkbox--indeterminate,.vue-treeselect__label-container:hover .vue-treeselect__checkbox--indeterminate,.vue-treeselect__checkbox--checked,.vue-treeselect__label-container:hover .vue-treeselect__checkbox--checked{border-color:#039be5;background:#039be5}.vue-treeselect__checkbox--disabled,.vue-treeselect__label-container:hover .vue-treeselect__checkbox--disabled{border-color:#e0e0e0;background-color:#f7f7f7}.vue-treeselect__label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:table-cell;padding-left:5px;max-width:100%;vertical-align:middle;cursor:inherit}[dir=rtl] .vue-treeselect__label{padding-left:0;padding-right:5px}.vue-treeselect__count{margin-left:5px;font-weight:400;opacity:.6}[dir=rtl] .vue-treeselect__count{margin-left:0;margin-right:5px}.vue-treeselect__tip{padding-left:5px;padding-right:5px;display:table;table-layout:fixed;width:100%;color:#757575}.vue-treeselect__tip-text{display:table-cell;vertical-align:middle;padding-left:5px;padding-right:5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%;font-size:12px}.vue-treeselect__error-tip .vue-treeselect__retry{cursor:pointer;margin-left:5px;font-style:normal;font-weight:600;text-decoration:none;color:#039be5}[dir=rtl] .vue-treeselect__error-tip .vue-treeselect__retry{margin-left:0;margin-right:5px}.vue-treeselect__icon-container{display:table-cell;vertical-align:middle;width:20px;text-align:center;line-height:0}.vue-treeselect--single .vue-treeselect__icon-container{padding-left:5px}[dir=rtl] .vue-treeselect--single .vue-treeselect__icon-container{padding-left:0;padding-right:5px}.vue-treeselect__icon-warning{display:block;margin:auto;border-radius:50%;position:relative;width:12px;height:12px;background:#fb8c00}.vue-treeselect__icon-warning:after{display:block;position:absolute;content:"";left:5px;top:2.5px;width:2px;height:1px;border:0 solid #fff;border-top-width:5px;border-bottom-width:1px}.vue-treeselect__icon-error{display:block;margin:auto;border-radius:50%;position:relative;width:12px;height:12px;background:#e53935}.vue-treeselect__icon-error:before,.vue-treeselect__icon-error:after{display:block;position:absolute;content:"";background:#fff;transform:rotate(45deg)}.vue-treeselect__icon-error:before{width:6px;height:2px;left:3px;top:5px}.vue-treeselect__icon-error:after{width:2px;height:6px;left:5px;top:3px}.vue-treeselect__icon-loader{display:block;margin:auto;position:relative;width:12px;height:12px;text-align:center;animation:1.6s vue-treeselect-animation-rotate linear infinite}.vue-treeselect__icon-loader:before,.vue-treeselect__icon-loader:after{border-radius:50%;position:absolute;content:"";left:0;top:0;display:block;width:100%;height:100%;opacity:.6;animation:1.6s vue-treeselect-animation-bounce ease-in-out infinite}.vue-treeselect__icon-loader:before{background:#039be5}.vue-treeselect__icon-loader:after{background:#b3e5fc;animation-delay:-.8s}.vue-treeselect__menu-placeholder{display:none}.vue-treeselect__portal-target{position:absolute;display:block;left:0;top:0;height:0;width:0;padding:0;margin:0;border:0;overflow:visible;box-sizing:border-box}\n')();
export { ASYNC_SEARCH, LOAD_CHILDREN_OPTIONS, LOAD_ROOT_OPTIONS, _sfc_main as default };
