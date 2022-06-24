import { ExtractPropTypes, PropType } from "vue";
declare type countNumberKey = "ALL_CHILDREN" | "ALL_DESCENDANTS" | "LEAF_CHILDREN" | "LEAF_DESCENDANTS";
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
    raw?: any;
    [x: string]: any;
}
export declare type TreeSelectNodeId = TreeSelectNode["id"];
declare const instanceId: import("vue").Ref<number>;
export declare const props: {
    /**
     * Whether to allow resetting value even if there are disabled selected nodes.
     */
    allowClearingDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * When an ancestor node is selected/deselected, whether its disabled descendants should be selected/deselected.
     * You may want to use this in conjunction with `allowClearingDisabled` prop.
     */
    allowSelectingDisabledDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether the menu should be always open.
     */
    alwaysOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Append the menu to <body />?
     */
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether to enable async search mode.
     */
    async: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Automatically focus the component on mount?
     */
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Automatically load root options on mount. When set to `false`, root options will be loaded when the menu is opened.
     */
    autoLoadRootOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * When user deselects a node, automatically deselect its ancestors. Applies to flat mode only.
     */
    autoDeselectAncestors: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * When user deselects a node, automatically deselect its descendants. Applies to flat mode only.
     */
    autoDeselectDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * When user selects a node, automatically select its ancestors. Applies to flat mode only.
     */
    autoSelectAncestors: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * When user selects a node, automatically select its descendants. Applies to flat mode only.
     */
    autoSelectDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether pressing backspace key removes the last item if there is no text input.
     */
    backspaceRemoves: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Function that processes before clearing all input fields.
     * Return `false` to prevent value from being cleared.
     * @type {function(): (boolean|Promise<boolean>)}
     */
    beforeClearAll: {
        type: PropType<() => boolean | Promise<boolean>>;
        default: () => boolean;
    };
    /**
     * Show branch nodes before leaf nodes?
     */
    branchNodesFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Should cache results of every search request?
     */
    cacheOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Show an "×" button that resets value?
     */
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Title for the "×" button when `multiple: true`.
     */
    clearAllText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether to clear the search input after selecting.
     * Use only when `multiple` is `true`.
     * For single-select mode, it **always** clears the input after selecting an option regardless of the prop value.
     */
    clearOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Title for the "×" button.
     */
    clearValueText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether to close the menu after selecting an option?
     * Use only when `multiple` is `true`.
     */
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * How many levels of branch nodes should be automatically expanded when loaded.
     * Set `Infinity` to make all branch nodes expanded by default.
     */
    defaultExpandLevel: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The default set of options to show before the user starts searching. Used for async search mode.
     * When set to `true`, the results for search query as a empty string will be autoloaded.
     * @type {boolean|node[]}
     */
    defaultOptions: {
        type: PropType<boolean | TreeSelectNode[]>;
        default: Boolean;
    };
    /**
     * Whether pressing delete key removes the last item if there is no text input.
     */
    deleteRemoves: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Delimiter to use to join multiple values for the hidden field value.
     */
    delimiter: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Only show the nodes that match the search value directly, excluding its ancestors.
     *
     * @type {Object}
     */
    flattenSearchResults: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Prevent branch nodes from being selected?
     */
    disableBranchNodes: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Disable the control?
     */
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Disable the fuzzy matching functionality?
     */
    disableFuzzyMatching: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether to enable flat mode or not. Non-flat mode (default) means:
     *   - Whenever a branch node gets checked, all its children will be checked too
     *   - Whenever a branch node has all children checked, the branch node itself will be checked too
     * Set `true` to disable this mechanism
     */
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Will be passed with all events as the last param.
     * Useful for identifying events origin.
     */
    instanceId: {
        default: () => string;
        type: (StringConstructor | NumberConstructor)[];
    };
    /**
     * Joins multiple values into a single form field with the `delimiter` (legacy mode).
     */
    joinValues: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Limit the display of selected options.
     * The rest will be hidden within the limitText string.
     */
    limit: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Function that processes the message shown when selected elements pass the defined limit.
     * @type {function(number): string}
     */
    limitText: {
        type: PropType<(count: number) => string>;
        default: (count: number) => string;
    };
    /**
     * Text displayed when loading options.
     */
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Used for dynamically loading options.
     * @type {function({action: string, callback: (function((Error|string)=): void), parentNode: node=, instanceId}): void}
     */
    loadOptions: {
        type: PropType<(option: {
            action: string;
            callback: (error: Error | string) => void;
            parentNode?: TreeSelectNode | undefined;
            instanceId: string;
        }) => void | Promise<void>>;
    };
    /**
     * Which node properties to filter on.
     */
    matchKeys: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * Sets `maxHeight` style value of the menu.
     */
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * Set `true` to allow selecting multiple options (a.k.a., multi-select mode).
     */
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Generates a hidden <input /> tag with this field name for html forms.
     */
    name: {
        type: StringConstructor;
    };
    /**
     * Text displayed when a branch node has no children.
     */
    noChildrenText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Text displayed when there are no available options.
     */
    noOptionsText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Text displayed when there are no matching search results.
     */
    noResultsText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Used for normalizing source data.
     * @type {function(node, instanceId): node}
     */
    normalizer: {
        type: PropType<(node: any, instanceId: string) => TreeSelectNode>;
        default: {
            <T>(value: T): T;
            (): undefined;
        };
    };
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
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /**
     * Whether to automatically open the menu when the control is clicked.
     */
    openOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Whether to automatically open the menu when the control is focused.
     */
    openOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Array of available options.
     * @type {node[]}
     */
    options: {
        type: ArrayConstructor;
    };
    /**
     * Field placeholder, displayed when there's no value.
     */
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Applies HTML5 required attribute when needed.
     */
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Text displayed asking user whether to retry loading children options.
     */
    retryText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Title for the retry button.
     */
    retryTitle: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Enable searching feature?
     */
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Search in ancestor nodes too.
     */
    searchNested: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Text tip to prompt for async search.
     */
    searchPromptText: {
        type: StringConstructor;
        default: string;
    };
    /**
     * Whether to show a children count next to the label of each branch node.
     */
    showCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * Used in conjunction with `showCount` to specify which type of count number should be displayed.
     * Acceptable values:
     *   - "ALL_CHILDREN"
     *   - "ALL_DESCENDANTS"
     *   - "LEAF_CHILDREN"
     *   - "LEAF_DESCENDANTS"
     */
    showCountOf: {
        type: PropType<countNumberKey>;
        default: string;
        validator: (value: string) => boolean;
    };
    /**
     * Whether to show children count when searching.
     * Fallbacks to the value of `showCount` when not specified.
     * @type {boolean}
     */
    showCountOnSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    /**
     * In which order the selected options should be displayed in trigger & sorted in `value` array.
     * Used for multi-select mode only.
     * Acceptable values:
     *   - "ORDER_SELECTED"
     *   - "LEVEL"
     *   - "INDEX"
     */
    sortValueBy: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    /**
     * Tab index of the control.
     */
    tabIndex: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The value of the control.
     * Should be `id` or `node` object for single-select mode, or an array of `id` or `node` object for multi-select mode.
     * Its format depends on the `valueFormat` prop.
     * For most cases, just use `v-model` instead.
     * @type {?Array}
     */
    modelValue: null;
    /**
     * Which kind of nodes should be included in the `value` array in multi-select mode.
     * Acceptable values:
     *   - "ALL" - Any node that is checked will be included in the `value` array
     *   - "BRANCH_PRIORITY" (default) - If a branch node is checked, all its descendants will be excluded in the `value` array
     *   - "LEAF_PRIORITY" - If a branch node is checked, this node itself and its branch descendants will be excluded from the `value` array but its leaf descendants will be included
     *   - "ALL_WITH_INDETERMINATE" - Any node that is checked will be included in the `value` array, plus indeterminate nodes
     */
    valueConsistsOf: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
    /**
     * Format of `value` prop.
     * Note that, when set to `"object"`, only `id` & `label` properties are required in each `node` object in `value` prop.
     * Acceptable values:
     *   - "id"
     *   - "object"
     */
    valueFormat: {
        type: StringConstructor;
        default: string;
    };
    /**
     * z-index of the menu.
     */
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
};
export declare type TreeselectProps = ExtractPropTypes<typeof props>;
export declare class Forest {
    normalizedOptions: TreeSelectNode[];
    nodeMap: {
        [x: string]: TreeSelectNode;
        [x: number]: TreeSelectNode;
    };
    checkedStateMap: {
        [x: string]: 0 | 1 | 2;
        [x: number]: 0 | 1 | 2;
    };
    selectedNodeIds: (string | number)[];
    selectedNodeMap: {
        [x: string]: boolean;
        [x: number]: boolean;
    };
}
export declare class LocalSearch {
    /**
     * Has user entered any query to search local options?
     */
    active: boolean;
    /**
     * Has any options matched the search query?
     */
    noResults: boolean;
    /**
     * <id, countObject> map for counting matched children/descendants.
     */
    countMap: {
        [x: string]: {
            ALL_CHILDREN: number;
            ALL_DESCENDANTS: number;
            LEAF_CHILDREN: number;
            LEAF_DESCENDANTS: number;
        };
        [x: number]: {
            ALL_CHILDREN: number;
            ALL_DESCENDANTS: number;
            LEAF_CHILDREN: number;
            LEAF_DESCENDANTS: number;
        };
    };
}
export declare const asyncOptionsStates: {
    isLoaded: boolean;
    isLoading: boolean;
    loadingError: string;
};
export declare type RemoteSearchValue = typeof asyncOptionsStates & {
    options?: boolean | TreeSelectNode[];
};
export declare class Menu {
    /**
     * Is the menu opened?
     */
    isOpen: boolean;
    /**
     * Id of current highlighted option.
     */
    current: string | number | null;
    /**
     * The scroll position before last menu closing.
     */
    lastScrollPosition: number;
    /**
     * Which direction to open the menu.
     */
    placement: "top" | "bottom";
}
export declare class Trigger {
    /**
     * 控制是否选中焦点
     */
    isFocused: boolean;
    /**
     * User entered search query - value of the input.
     */
    searchQuery: string;
}
/**
 * 根据索引遍历所有节点
 * @param callback 回调函数
 * @param 虚拟根节点 forest.normalizedOptions
 */
export declare const traverseAllNodesByIndex: (callback: (node: TreeSelectNode) => boolean | void, rootNode: TreeSelectNode[]) => void;
export {};
