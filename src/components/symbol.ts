import { createMap } from "@/utils";
import { constant, identity } from "lodash";
import { ExtractPropTypes, PropType, ref } from "vue";
import {
  ALL,
  ALL_CHILDREN,
  ALL_DESCENDANTS,
  ALL_WITH_INDETERMINATE,
  BRANCH_PRIORITY,
  INDEX,
  LEAF_CHILDREN,
  LEAF_DESCENDANTS,
  LEAF_PRIORITY,
  LEVEL,
  ORDER_SELECTED
} from "../constants";
type countNumberKey = "ALL_CHILDREN" | "ALL_DESCENDANTS" | "LEAF_CHILDREN" | "LEAF_DESCENDANTS";
export interface TreeSelectNode {
  id: string | number;
  label: string;
  ancestors?: TreeSelectNode[];
  children?: TreeSelectNode[] | null;
  /**
   * 是否禁用
   */
  isDisabled?: boolean;

  /**
   * 是否新建节点	用于为新节点赋予不同的颜色。
   */
  isNew?: boolean;
  /**
   *	默认情况下是否应扩展此文件夹选项
   */
  isDefaultExpanded?: boolean;
  /**
   * 是否根节点
   */
  isRootNode?: boolean;
  /**
   * 是否左节点
   */
  isLeaf?: boolean;
  /**
   * 父节点
   */
  parentNode?: TreeSelectNode | null;
  isFallbackNode?: boolean;
  isBranch?: boolean;
  index?: number[];
  /**
   * 层级
   */
  level?: number;
  /**
   * 节点数据
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}
export type TreeSelectNodeId = TreeSelectNode["id"];

const instanceId = ref(0);
export const props = {
  /**
   * Whether to allow resetting value even if there are disabled selected nodes.
   */
  allowClearingDisabled: {
    type: Boolean,
    default: false
  },

  /**
   * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
   * You may want to use this in conjunction with `allowClearingDisabled` prop.
   */
  allowSelectingDisabledDescendants: {
    type: Boolean,
    default: false
  },

  /**
   * Whether the menu should be always open.
   */
  alwaysOpen: {
    type: Boolean,
    default: false
  },

  /**
   * Append the menu to <body />?
   */
  appendToBody: {
    type: Boolean,
    default: false
  },

  /**
   * Whether to enable async search mode.
   */
  async: {
    type: Boolean,
    default: false
  },

  /**
   * Automatically focus the component on mount?
   */
  autoFocus: {
    type: Boolean,
    default: false
  },

  /**
   * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
   */
  autoLoadRootOptions: {
    type: Boolean,
    default: true
  },

  /**
   * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
   */
  autoDeselectAncestors: {
    type: Boolean,
    default: false
  },

  /**
   * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
   */
  autoDeselectDescendants: {
    type: Boolean,
    default: false
  },

  /**
   * When user selects a node, automatically select its ancestors. Applies to flat mode only.
   */
  autoSelectAncestors: {
    type: Boolean,
    default: false
  },

  /**
   * When user selects a node, automatically select its descendants. Applies to flat mode only.
   */
  autoSelectDescendants: {
    type: Boolean,
    default: false
  },

  /**
   * Whether pressing backspace key removes the last item if there is no text input.
   */
  backspaceRemoves: {
    type: Boolean,
    default: true
  },

  /**
   * Function that processes before clearing all input fields.
   * Return `false` to prevent value from being cleared.
   * @type {function(): (boolean|Promise<boolean>)}
   */
  beforeClearAll: {
    type: Function as PropType<() => boolean | Promise<boolean>>,
    default: constant(true)
  },

  /**
   * Show branch nodes before leaf nodes?
   */
  branchNodesFirst: {
    type: Boolean,
    default: false
  },

  /**
   * Should cache results of every search request?
   */
  cacheOptions: {
    type: Boolean,
    default: true
  },

  /**
   * Show an "×" button that resets value?
   */
  clearable: {
    type: Boolean,
    default: true
  },

  /**
   * Title for the "×" button when `multiple: true`.
   */
  clearAllText: {
    type: String,
    default: "Clear all"
  },

  /**
   * Whether to clear the search input after selecting.
   * Use only when `multiple` is `true`.
   * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
   */
  clearOnSelect: {
    type: Boolean,
    default: false
  },

  /**
   * Title for the "×" button.
   */
  clearValueText: {
    type: String,
    default: "Clear value"
  },

  /**
   * Whether to close the menu after selecting an option?
   * Use only when `multiple` is `true`.
   */
  closeOnSelect: {
    type: Boolean,
    default: true
  },

  /**
   * How many levels of branch nodes should be automatically expanded when loaded.
   * Set `Infinity` to make all branch nodes expanded by default.
   */
  defaultExpandLevel: {
    type: Number,
    default: 0
  },

  /**
   * The default set of options to show before the user starts searching. Used for async search mode.
   * When set to `true`, the results for search query as a empty string will be autoloaded.
   * @type {boolean|node[]}
   */
  defaultOptions: {
    type: Object as PropType<boolean | TreeSelectNode[]>,
    default: new Boolean(false)
  },

  /**
   * Whether pressing delete key removes the last item if there is no text input.
   */
  deleteRemoves: {
    type: Boolean,
    default: true
  },

  /**
   * Delimiter to use to join multiple values for the hidden field value.
   */
  delimiter: {
    type: String,
    default: ","
  },

  /**
   * Only show the nodes that match the search value directly, excluding its ancestors.
   *
   * @type {Object}
   */
  flattenSearchResults: {
    type: Boolean,
    default: false
  },

  /**
   * Prevent branch nodes from being selected?
   */
  disableBranchNodes: {
    type: Boolean,
    default: false
  },

  /**
   * Disable the control?
   */
  disabled: {
    type: Boolean,
    default: false
  },

  /**
   * Disable the fuzzy matching functionality?
   */
  disableFuzzyMatching: {
    type: Boolean,
    default: false
  },

  /**
   * Whether to enable flat mode or not. Non-flat mode (default) means:
   *   - Whenever a branch node gets checked, all its children will be checked too
   *   - Whenever a branch node has all children checked, the branch node itself will be checked too
   * Set `true` to disable this mechanism
   */
  flat: {
    type: Boolean,
    default: false
  },

  /**
   * Will be passed with all events as the last param.
   * Useful for identifying events origin.
   */
  instanceId: {
    // Add two trailing "$" to distinguish from explictly specified ids.
    default: () => `${instanceId.value++}$$`,
    type: [String, Number]
  },

  /**
   * Joins multiple values into a single form field with the `delimiter` (legacy mode).
   */
  joinValues: {
    type: Boolean,
    default: false
  },

  /**
   * Limit the display of selected options.
   * The rest will be hidden within the limitText string.
   */
  limit: {
    type: Number,
    default: Infinity
  },

  /**
   * Function that processes the message shown when selected elements pass the defined limit.
   * @type {function(number): string}
   */
  limitText: {
    type: Function as PropType<(count: number) => string>,
    default: function limitTextDefault(count: number) {
      // eslint-disable-line func-name-matching
      return `and ${count} more`;
    }
  },

  /**
   * Text displayed when loading options.
   */
  loadingText: {
    type: String,
    default: "Loading..."
  },

  /**
   * Used for dynamically loading options.
   * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
   */
  loadOptions: {
    type: Function as PropType<
      (option: {
        action: string;
        callback: (error: Error | string) => void;
        parentNode?: TreeSelectNode;
        instanceId: string;
      }) => void | Promise<void>
    >
  },

  /**
   * Which node properties to filter on.
   */
  matchKeys: {
    type: Object as PropType<Array<string>>,
    default: constant(["label"])
  },

  /**
   * Sets `maxHeight` style value of the menu.
   */
  maxHeight: {
    type: Number,
    default: 300
  },

  /**
   * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
   */
  multiple: {
    type: Boolean,
    default: false
  },

  /**
   * Generates a hidden <input /> tag with this field name for html forms.
   */
  name: {
    type: String
  },

  /**
   * Text displayed when a branch node has no children.
   */
  noChildrenText: {
    type: String,
    default: "No sub-options."
  },

  /**
   * Text displayed when there are no available options.
   */
  noOptionsText: {
    type: String,
    default: "No options available."
  },

  /**
   * Text displayed when there are no matching search results.
   */
  noResultsText: {
    type: String,
    default: "No results found..."
  },

  /**
   * Used for normalizing source data.
   * @type {function(node, instanceId): node}
   */
  normalizer: {
    type: Function as PropType<(node: unknown, instanceId: string) => TreeSelectNode>,
    default: identity
  },

  /**
   * By default (`auto`), the menu will open below the control. If there is not
   * enough space, vue-treeselect will automatically flip the menu.
   * You can use one of other four options to force the menu to be always opened
   * to specified direction.
   * Acceptable values:
   *   - `"auto"`
   *   - `"below"`
   *   - `"bottom"`
   *   - `"above"`
   *   - `"top"`
   */
  openDirection: {
    type: String,
    default: "auto",
    validator: (value: string) => {
      const acceptableValues = ["auto", "top", "bottom", "above", "below"];
      return acceptableValues.includes(value);
    }
  },

  /**
   * Whether to automatically open the menu when the control is clicked.
   */
  openOnClick: {
    type: Boolean,
    default: true
  },

  /**
   * Whether to automatically open the menu when the control is focused.
   */
  openOnFocus: {
    type: Boolean,
    default: false
  },

  /**
   * Array of available options.
   * @type {node[]}
   */
  options: {
    type: Array
  },

  /**
   * Field placeholder, displayed when there's no value.
   */
  placeholder: {
    type: String,
    default: "Select..."
  },

  /**
   * Applies HTML5 required attribute when needed.
   */
  required: {
    type: Boolean,
    default: false
  },

  /**
   * Text displayed asking user whether to retry loading children options.
   */
  retryText: {
    type: String,
    default: "Retry?"
  },

  /**
   * Title for the retry button.
   */
  retryTitle: {
    type: String,
    default: "Click to retry"
  },

  /**
   * Enable searching feature?
   */
  searchable: {
    type: Boolean,
    default: true
  },

  /**
   * Search in ancestor nodes too.
   */
  searchNested: {
    type: Boolean,
    default: false
  },

  /**
   * Text tip to prompt for async search.
   */
  searchPromptText: {
    type: String,
    default: "Type to search..."
  },

  /**
   * Whether to show a children count next to the label of each branch node.
   */
  showCount: {
    type: Boolean,
    default: false
  },

  /**
   * Used in conjunction with `showCount` to specify which type of count number should be displayed.
   * Acceptable values:
   *   - "ALL_CHILDREN"
   *   - "ALL_DESCENDANTS"
   *   - "LEAF_CHILDREN"
   *   - "LEAF_DESCENDANTS"
   */
  showCountOf: {
    type: String as PropType<countNumberKey>,
    default: ALL_CHILDREN,
    validator: (value: string) => {
      const acceptableValues = [ALL_CHILDREN, ALL_DESCENDANTS, LEAF_CHILDREN, LEAF_DESCENDANTS];
      return acceptableValues.includes(value);
    }
  },

  /**
   * Whether to show children count when searching.
   * Fallbacks to the value of `showCount` when not specified.
   * @type {boolean}
   */
  showCountOnSearch: {
    type: Boolean,
    default: false
  },

  /**
   * In which order the selected options should be displayed in trigger & sorted in `value` array.
   * Used for multi-select mode only.
   * Acceptable values:
   *   - "ORDER_SELECTED"
   *   - "LEVEL"
   *   - "INDEX"
   */
  sortValueBy: {
    type: String,
    default: ORDER_SELECTED,
    validator: (value: string) => {
      const acceptableValues = [ORDER_SELECTED, LEVEL, INDEX];
      return acceptableValues.includes(value);
    }
  },

  /**
   * Tab index of the control.
   */
  tabIndex: {
    type: Number,
    default: 0
  },

  /**
   * The value of the control.
   * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
   * Its format depends on the `valueFormat` prop.
   * For most cases, just use `v-model` instead.
   * @type {?Array}
   */
  modelValue: null,

  /**
   * Which kind of nodes should be included in the `value` array in multi-select mode.
   * Acceptable values:
   *   - "ALL" - Any node that is checked will be included in the `value` array
   *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
   *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
   *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
   */
  valueConsistsOf: {
    type: String,
    default: BRANCH_PRIORITY,
    validator(value: string) {
      const acceptableValues = [ALL, BRANCH_PRIORITY, LEAF_PRIORITY, ALL_WITH_INDETERMINATE];
      return acceptableValues.includes(value);
    }
  },

  /**
   * Format of `value` prop.
   * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
   * Acceptable values:
   *   - "id"
   *   - "object"
   */
  valueFormat: {
    type: String,
    default: "id"
  },

  /**
   * z-index of the menu.
   */
  zIndex: {
    type: [Number, String],
    default: 999
  }
};
export type TreeselectProps = ExtractPropTypes<typeof props>;

// data定义
export class Forest {
  // Normalized options.
  normalizedOptions = new Array<TreeSelectNode>();
  // <id, node> map for quick look-up.
  nodeMap = createMap<{ [x: TreeSelectNodeId]: TreeSelectNode }>();
  // <id, checkedState> map, used for multi-select mode.
  checkedStateMap = createMap<{ [x: TreeSelectNodeId]: 0 | 1 | 2 }>();
  // Id list of all selected options.
  selectedNodeIds = new Array<TreeSelectNodeId>();
  // <id, true> map for fast checking:
  //   if (forest.selectedNodeIds.indexOf(id) !== -1) forest.selectedNodeMap[id] === true
  selectedNodeMap = createMap<{ [x: TreeSelectNodeId]: boolean }>();
}
export class LocalSearch {
  /**
   * Has user entered any query to search local options?
   */
  active = false;
  /**
   * Has any options matched the search query?
   */
  noResults = true;
  /**
   * <id, countObject> map for counting matched children/descendants.
   */
  countMap = createMap<{ [x: TreeSelectNodeId]: { [x in countNumberKey]: number } }>();
}
export const asyncOptionsStates = {
  isLoaded: false,
  isLoading: false,
  loadingError: ""
};
export type RemoteSearchValue = typeof asyncOptionsStates & { options?: boolean | TreeSelectNode[] };

export class Menu {
  /**
   * Is the menu opened?
   */
  isOpen = false;
  /**
   * Id of current highlighted option.
   */
  current = null as TreeSelectNode["id"] | null;
  /**
   * The scroll position before last menu closing.
   */
  lastScrollPosition = 0;
  /**
   * Which direction to open the menu.
   */
  placement = "bottom" as "top" | "bottom";
}
export class Trigger {
  /**
   * 控制是否选中焦点
   */
  isFocused = false;
  /**
   * User entered search query - value of the input.
   */
  searchQuery = "";
}
// data定义结束

/**
 * 根据索引遍历所有节点
 * @param callback 回调函数
 * @param 虚拟根节点 forest.normalizedOptions
 */
export const traverseAllNodesByIndex = (
  callback: (node: TreeSelectNode) => boolean | void,
  rootNode: TreeSelectNode[]
) => {
  const walk = (parentNode: { children: TreeSelectNode[] }) => {
    parentNode?.children?.forEach((child) => {
      if (callback(child) !== false && child.isBranch) {
        walk(child as { children: TreeSelectNode[] });
      }
    });
  };
  // To simplify the code logic of traversal,
  // we create a fake root node that holds all the root options.
  walk({ children: rootNode });
};
