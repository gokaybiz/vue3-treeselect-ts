import { Forest, Menu as MenuData, LocalSearch, Trigger } from "./symbol";
declare const _sfc_main: import("vue").DefineComponent<{
    allowClearingDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowSelectingDisabledDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    async: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoLoadRootOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoDeselectAncestors: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoDeselectDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSelectAncestors: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSelectDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    backspaceRemoves: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClearAll: {
        type: import("vue").PropType<() => boolean | Promise<boolean>>;
        default: () => boolean;
    };
    branchNodesFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    cacheOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearAllText: {
        type: StringConstructor;
        default: string;
    };
    clearOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearValueText: {
        type: StringConstructor;
        default: string;
    };
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpandLevel: {
        type: NumberConstructor;
        default: number;
    };
    defaultOptions: {
        type: import("vue").PropType<boolean | import("./symbol").TreeSelectNode[]>;
        default: Boolean;
    };
    deleteRemoves: {
        type: BooleanConstructor;
        default: boolean;
    };
    delimiter: {
        type: StringConstructor;
        default: string;
    };
    flattenSearchResults: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableBranchNodes: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableFuzzyMatching: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    instanceId: {
        default: () => string;
        type: (StringConstructor | NumberConstructor)[];
    };
    joinValues: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    limitText: {
        type: import("vue").PropType<(count: number) => string>;
        default: (count: number) => string;
    };
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    loadOptions: {
        type: import("vue").PropType<(option: {
            action: string;
            callback: (error: string | Error) => void;
            parentNode?: import("./symbol").TreeSelectNode | undefined;
            instanceId: string;
        }) => void | Promise<void>>;
    };
    matchKeys: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
    };
    noChildrenText: {
        type: StringConstructor;
        default: string;
    };
    noOptionsText: {
        type: StringConstructor;
        default: string;
    };
    noResultsText: {
        type: StringConstructor;
        default: string;
    };
    normalizer: {
        type: import("vue").PropType<(node: any, instanceId: string) => import("./symbol").TreeSelectNode>;
        default: {
            <T>(value: T): T;
            (): undefined;
        };
    };
    openDirection: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    openOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    openOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ArrayConstructor;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    retryText: {
        type: StringConstructor;
        default: string;
    };
    retryTitle: {
        type: StringConstructor;
        default: string;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchNested: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchPromptText: {
        type: StringConstructor;
        default: string;
    };
    showCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCountOf: {
        type: import("vue").PropType<"ALL_CHILDREN" | "ALL_DESCENDANTS" | "LEAF_CHILDREN" | "LEAF_DESCENDANTS">;
        default: string;
        validator: (value: string) => boolean;
    };
    showCountOnSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortValueBy: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    tabIndex: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: null;
    valueConsistsOf: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
    valueFormat: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        allowClearingDisabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowSelectingDisabledDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        alwaysOpen: {
            type: BooleanConstructor;
            default: boolean;
        };
        appendToBody: {
            type: BooleanConstructor;
            default: boolean;
        };
        async: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoLoadRootOptions: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoDeselectAncestors: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoDeselectDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSelectAncestors: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoSelectDescendants: {
            type: BooleanConstructor;
            default: boolean;
        };
        backspaceRemoves: {
            type: BooleanConstructor;
            default: boolean;
        };
        beforeClearAll: {
            type: import("vue").PropType<() => boolean | Promise<boolean>>;
            default: () => boolean;
        };
        branchNodesFirst: {
            type: BooleanConstructor;
            default: boolean;
        };
        cacheOptions: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearable: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearAllText: {
            type: StringConstructor;
            default: string;
        };
        clearOnSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        clearValueText: {
            type: StringConstructor;
            default: string;
        };
        closeOnSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        defaultExpandLevel: {
            type: NumberConstructor;
            default: number;
        };
        defaultOptions: {
            type: import("vue").PropType<boolean | import("./symbol").TreeSelectNode[]>;
            default: Boolean;
        };
        deleteRemoves: {
            type: BooleanConstructor;
            default: boolean;
        };
        delimiter: {
            type: StringConstructor;
            default: string;
        };
        flattenSearchResults: {
            type: BooleanConstructor;
            default: boolean;
        };
        disableBranchNodes: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        disableFuzzyMatching: {
            type: BooleanConstructor;
            default: boolean;
        };
        flat: {
            type: BooleanConstructor;
            default: boolean;
        };
        instanceId: {
            default: () => string;
            type: (StringConstructor | NumberConstructor)[];
        };
        joinValues: {
            type: BooleanConstructor;
            default: boolean;
        };
        limit: {
            type: NumberConstructor;
            default: number;
        };
        limitText: {
            type: import("vue").PropType<(count: number) => string>;
            default: (count: number) => string;
        };
        loadingText: {
            type: StringConstructor;
            default: string;
        };
        loadOptions: {
            type: import("vue").PropType<(option: {
                action: string;
                callback: (error: string | Error) => void;
                parentNode?: import("./symbol").TreeSelectNode | undefined;
                instanceId: string;
            }) => void | Promise<void>>;
        };
        matchKeys: {
            type: import("vue").PropType<string[]>;
            default: () => string[];
        };
        maxHeight: {
            type: NumberConstructor;
            default: number;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        name: {
            type: StringConstructor;
        };
        noChildrenText: {
            type: StringConstructor;
            default: string;
        };
        noOptionsText: {
            type: StringConstructor;
            default: string;
        };
        noResultsText: {
            type: StringConstructor;
            default: string;
        };
        normalizer: {
            type: import("vue").PropType<(node: any, instanceId: string) => import("./symbol").TreeSelectNode>;
            default: {
                <T>(value: T): T;
                (): undefined;
            };
        };
        openDirection: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        openOnClick: {
            type: BooleanConstructor;
            default: boolean;
        };
        openOnFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        options: {
            type: ArrayConstructor;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        retryText: {
            type: StringConstructor;
            default: string;
        };
        retryTitle: {
            type: StringConstructor;
            default: string;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchNested: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchPromptText: {
            type: StringConstructor;
            default: string;
        };
        showCount: {
            type: BooleanConstructor;
            default: boolean;
        };
        showCountOf: {
            type: import("vue").PropType<"ALL_CHILDREN" | "ALL_DESCENDANTS" | "LEAF_CHILDREN" | "LEAF_DESCENDANTS">;
            default: string;
            validator: (value: string) => boolean;
        };
        showCountOnSearch: {
            type: BooleanConstructor;
            default: boolean;
        };
        sortValueBy: {
            type: StringConstructor;
            default: string;
            validator: (value: string) => boolean;
        };
        tabIndex: {
            type: NumberConstructor;
            default: number;
        };
        modelValue: null;
        valueConsistsOf: {
            type: StringConstructor;
            default: string;
            validator(value: string): boolean;
        };
        valueFormat: {
            type: StringConstructor;
            default: string;
        };
        zIndex: {
            type: (StringConstructor | NumberConstructor)[];
            default: number;
        };
    }>> & {
        onSelect?: ((...args: any[]) => any) | undefined;
        onDeselect?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        onOpen?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        "onSearch-change"?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: (event: "select" | "deselect" | "close" | "open" | "update:modelValue" | "search-change", ...args: any[]) => void;
    control: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            shouldShowX: import("vue").ComputedRef<boolean>;
            shouldShowArrow: import("vue").ComputedRef<boolean>;
            handleMouseDownOnX: () => void;
            handleMouseDownOnArrow: () => void;
            DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            ArrowIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            MultiValue: import("vue").DefineComponent<{}, {
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                count: import("vue").ComputedRef<number>;
                nodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                MultiValueItem: import("vue").DefineComponent<{
                    node: {
                        type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                        required: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        node: {
                            type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                            required: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    node: import("vue").Ref<import("./symbol").TreeSelectNode>;
                    instance: {
                        props: import("./symbol").TreeselectProps;
                        hasValue: import("vue").ComputedRef<boolean>;
                        internalValue: import("vue").ComputedRef<(string | number)[]>;
                        menu: MenuData;
                        trigger: Trigger;
                        getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                        clear: () => void;
                        focusInput: () => void;
                        toggleMenu: () => void;
                        openMenu: () => void;
                        getMenuDiv: () => HTMLElement | null;
                        closeMenu: () => void;
                        removeLastValue: () => void;
                        select: (node: import("./symbol").TreeSelectNode) => void;
                        highlightLastOption: () => void;
                        highlightFirstOption: () => void;
                        shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                        setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                        loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                        toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                        highlightPrevOption: () => void;
                        highlightNextOption: () => void;
                        localSearch: LocalSearch;
                        getControlDiv: () => HTMLElement;
                        getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                        handleRemoteSearch: () => void;
                        forest: Forest;
                        handleMouseDown: (evt: Event) => void;
                        beforeListRenderer: import("vue").Slot | undefined;
                        afterListRenderer: import("vue").Slot | undefined;
                        customValueLabelRenderer: import("vue").Slot | undefined;
                        customLabelRenderer: import("vue").Slot | undefined;
                        isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                        shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                        selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                        rootOptionsStates: import("./symbol").RemoteSearchValue;
                        loadRootOptions: () => void;
                    };
                    itemClass: import("vue").ComputedRef<{
                        "vue-treeselect__multi-value-item": boolean;
                        "vue-treeselect__multi-value-item-disabled": boolean | undefined;
                        "vue-treeselect__multi-value-item-new": boolean | undefined;
                    }>;
                    handleLeftMouseDown: () => void;
                    customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
                    DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                    DynamicSlot: import("vue").DefineComponent<{
                        slotFunction: {
                            type: import("vue").PropType<import("vue").Slot>;
                            required: true;
                        };
                        slotObject: {
                            type: ObjectConstructor[];
                            default: undefined;
                        };
                    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        slotFunction: {
                            type: import("vue").PropType<import("vue").Slot>;
                            required: true;
                        };
                        slotObject: {
                            type: ObjectConstructor[];
                            default: undefined;
                        };
                    }>>, {
                        slotObject: Record<string, any>;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    node: {
                        type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                        required: true;
                    };
                }>>, {}>;
                ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                Input: import("vue").DefineComponent<{}, {
                    keysThatRequireMenuBeingOpen: (string | number)[];
                    inputWidth: import("vue").Ref<number>;
                    inputValue: import("vue").Ref<string>;
                    instance: {
                        props: import("./symbol").TreeselectProps;
                        hasValue: import("vue").ComputedRef<boolean>;
                        internalValue: import("vue").ComputedRef<(string | number)[]>;
                        menu: MenuData;
                        trigger: Trigger;
                        getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                        clear: () => void;
                        focusInput: () => void;
                        toggleMenu: () => void;
                        openMenu: () => void;
                        getMenuDiv: () => HTMLElement | null;
                        closeMenu: () => void;
                        removeLastValue: () => void;
                        select: (node: import("./symbol").TreeSelectNode) => void;
                        highlightLastOption: () => void;
                        highlightFirstOption: () => void;
                        shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                        setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                        loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                        toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                        highlightPrevOption: () => void;
                        highlightNextOption: () => void;
                        localSearch: LocalSearch;
                        getControlDiv: () => HTMLElement;
                        getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                        handleRemoteSearch: () => void;
                        forest: Forest;
                        handleMouseDown: (evt: Event) => void;
                        beforeListRenderer: import("vue").Slot | undefined;
                        afterListRenderer: import("vue").Slot | undefined;
                        customValueLabelRenderer: import("vue").Slot | undefined;
                        customLabelRenderer: import("vue").Slot | undefined;
                        isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                        shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                        selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                        rootOptionsStates: import("./symbol").RemoteSearchValue;
                        loadRootOptions: () => void;
                    };
                    updateSearchQuery: () => void;
                    debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
                    onFocus: () => void;
                    input: import("vue").Ref<HTMLInputElement | undefined>;
                    focus: () => void;
                    blur: () => void;
                    onBlur: () => void;
                    onInput: (evt: {
                        target: {
                            value: string;
                        };
                    } | Event) => void;
                    onKeyDown: (evt: KeyboardEvent) => void;
                    getProps: () => {};
                    needAutoSize: import("vue").ComputedRef<boolean>;
                    onMouseDown: (evt: MouseEvent) => void;
                    sizer: import("vue").Ref<HTMLDivElement | undefined>;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                Placeholder: import("vue").DefineComponent<{}, {
                    instance: {
                        props: import("./symbol").TreeselectProps;
                        hasValue: import("vue").ComputedRef<boolean>;
                        internalValue: import("vue").ComputedRef<(string | number)[]>;
                        menu: MenuData;
                        trigger: Trigger;
                        getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                        clear: () => void;
                        focusInput: () => void;
                        toggleMenu: () => void;
                        openMenu: () => void;
                        getMenuDiv: () => HTMLElement | null;
                        closeMenu: () => void;
                        removeLastValue: () => void;
                        select: (node: import("./symbol").TreeSelectNode) => void;
                        highlightLastOption: () => void;
                        highlightFirstOption: () => void;
                        shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                        setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                        loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                        toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                        highlightPrevOption: () => void;
                        highlightNextOption: () => void;
                        localSearch: LocalSearch;
                        getControlDiv: () => HTMLElement;
                        getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                        handleRemoteSearch: () => void;
                        forest: Forest;
                        handleMouseDown: (evt: Event) => void;
                        beforeListRenderer: import("vue").Slot | undefined;
                        afterListRenderer: import("vue").Slot | undefined;
                        customValueLabelRenderer: import("vue").Slot | undefined;
                        customLabelRenderer: import("vue").Slot | undefined;
                        isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                        shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                        selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                        rootOptionsStates: import("./symbol").RemoteSearchValue;
                        loadRootOptions: () => void;
                    };
                    placeholderClass: import("vue").ComputedRef<{
                        "vue-treeselect__placeholder": boolean;
                        "vue-treeselect-helper-zoom-effect-off": boolean;
                        "vue-treeselect-helper-hide": string | true;
                    }>;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            SingleValue: import("vue").DefineComponent<{}, {
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                shouldShowValue: import("vue").ComputedRef<boolean>;
                customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
                node: import("vue").ComputedRef<import("./symbol").TreeSelectNode>;
                Input: import("vue").DefineComponent<{}, {
                    keysThatRequireMenuBeingOpen: (string | number)[];
                    inputWidth: import("vue").Ref<number>;
                    inputValue: import("vue").Ref<string>;
                    instance: {
                        props: import("./symbol").TreeselectProps;
                        hasValue: import("vue").ComputedRef<boolean>;
                        internalValue: import("vue").ComputedRef<(string | number)[]>;
                        menu: MenuData;
                        trigger: Trigger;
                        getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                        clear: () => void;
                        focusInput: () => void;
                        toggleMenu: () => void;
                        openMenu: () => void;
                        getMenuDiv: () => HTMLElement | null;
                        closeMenu: () => void;
                        removeLastValue: () => void;
                        select: (node: import("./symbol").TreeSelectNode) => void;
                        highlightLastOption: () => void;
                        highlightFirstOption: () => void;
                        shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                        setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                        loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                        toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                        highlightPrevOption: () => void;
                        highlightNextOption: () => void;
                        localSearch: LocalSearch;
                        getControlDiv: () => HTMLElement;
                        getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                        handleRemoteSearch: () => void;
                        forest: Forest;
                        handleMouseDown: (evt: Event) => void;
                        beforeListRenderer: import("vue").Slot | undefined;
                        afterListRenderer: import("vue").Slot | undefined;
                        customValueLabelRenderer: import("vue").Slot | undefined;
                        customLabelRenderer: import("vue").Slot | undefined;
                        isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                        shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                        selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                        rootOptionsStates: import("./symbol").RemoteSearchValue;
                        loadRootOptions: () => void;
                    };
                    updateSearchQuery: () => void;
                    debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
                    onFocus: () => void;
                    input: import("vue").Ref<HTMLInputElement | undefined>;
                    focus: () => void;
                    blur: () => void;
                    onBlur: () => void;
                    onInput: (evt: {
                        target: {
                            value: string;
                        };
                    } | Event) => void;
                    onKeyDown: (evt: KeyboardEvent) => void;
                    getProps: () => {};
                    needAutoSize: import("vue").ComputedRef<boolean>;
                    onMouseDown: (evt: MouseEvent) => void;
                    sizer: import("vue").Ref<HTMLDivElement | undefined>;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                Placeholder: import("vue").DefineComponent<{}, {
                    instance: {
                        props: import("./symbol").TreeselectProps;
                        hasValue: import("vue").ComputedRef<boolean>;
                        internalValue: import("vue").ComputedRef<(string | number)[]>;
                        menu: MenuData;
                        trigger: Trigger;
                        getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                        clear: () => void;
                        focusInput: () => void;
                        toggleMenu: () => void;
                        openMenu: () => void;
                        getMenuDiv: () => HTMLElement | null;
                        closeMenu: () => void;
                        removeLastValue: () => void;
                        select: (node: import("./symbol").TreeSelectNode) => void;
                        highlightLastOption: () => void;
                        highlightFirstOption: () => void;
                        shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                        setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                        loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                        toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                        highlightPrevOption: () => void;
                        highlightNextOption: () => void;
                        localSearch: LocalSearch;
                        getControlDiv: () => HTMLElement;
                        getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                        handleRemoteSearch: () => void;
                        forest: Forest;
                        handleMouseDown: (evt: Event) => void;
                        beforeListRenderer: import("vue").Slot | undefined;
                        afterListRenderer: import("vue").Slot | undefined;
                        customValueLabelRenderer: import("vue").Slot | undefined;
                        customLabelRenderer: import("vue").Slot | undefined;
                        isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                        shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                        selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                        rootOptionsStates: import("./symbol").RemoteSearchValue;
                        loadRootOptions: () => void;
                    };
                    placeholderClass: import("vue").ComputedRef<{
                        "vue-treeselect__placeholder": boolean;
                        "vue-treeselect-helper-zoom-effect-off": boolean;
                        "vue-treeselect-helper-hide": string | true;
                    }>;
                }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                DynamicSlot: import("vue").DefineComponent<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }>>, {
                    slotObject: Record<string, any>;
                }>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
        instance: {
            props: import("./symbol").TreeselectProps;
            hasValue: import("vue").ComputedRef<boolean>;
            internalValue: import("vue").ComputedRef<(string | number)[]>;
            menu: MenuData;
            trigger: Trigger;
            getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
            clear: () => void;
            focusInput: () => void;
            toggleMenu: () => void;
            openMenu: () => void;
            getMenuDiv: () => HTMLElement | null;
            closeMenu: () => void;
            removeLastValue: () => void;
            select: (node: import("./symbol").TreeSelectNode) => void;
            highlightLastOption: () => void;
            highlightFirstOption: () => void;
            shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
            setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
            loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
            toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
            highlightPrevOption: () => void;
            highlightNextOption: () => void;
            localSearch: LocalSearch;
            getControlDiv: () => HTMLElement;
            getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
            handleRemoteSearch: () => void;
            forest: Forest;
            handleMouseDown: (evt: Event) => void;
            beforeListRenderer: import("vue").Slot | undefined;
            afterListRenderer: import("vue").Slot | undefined;
            customValueLabelRenderer: import("vue").Slot | undefined;
            customLabelRenderer: import("vue").Slot | undefined;
            isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
            shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
            selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            rootOptionsStates: import("./symbol").RemoteSearchValue;
            loadRootOptions: () => void;
        };
        shouldShowX: import("vue").ComputedRef<boolean>;
        shouldShowArrow: import("vue").ComputedRef<boolean>;
        handleMouseDownOnX: () => void;
        handleMouseDownOnArrow: () => void;
        DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        ArrowIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        MultiValue: import("vue").DefineComponent<{}, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            count: import("vue").ComputedRef<number>;
            nodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            MultiValueItem: import("vue").DefineComponent<{
                node: {
                    type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                    required: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    node: {
                        type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                        required: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                node: import("vue").Ref<import("./symbol").TreeSelectNode>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                itemClass: import("vue").ComputedRef<{
                    "vue-treeselect__multi-value-item": boolean;
                    "vue-treeselect__multi-value-item-disabled": boolean | undefined;
                    "vue-treeselect__multi-value-item-new": boolean | undefined;
                }>;
                handleLeftMouseDown: () => void;
                customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
                DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                DynamicSlot: import("vue").DefineComponent<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }>>, {
                    slotObject: Record<string, any>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                node: {
                    type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                    required: true;
                };
            }>>, {}>;
            ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Input: import("vue").DefineComponent<{}, {
                keysThatRequireMenuBeingOpen: (string | number)[];
                inputWidth: import("vue").Ref<number>;
                inputValue: import("vue").Ref<string>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                updateSearchQuery: () => void;
                debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
                onFocus: () => void;
                input: import("vue").Ref<HTMLInputElement | undefined>;
                focus: () => void;
                blur: () => void;
                onBlur: () => void;
                onInput: (evt: {
                    target: {
                        value: string;
                    };
                } | Event) => void;
                onKeyDown: (evt: KeyboardEvent) => void;
                getProps: () => {};
                needAutoSize: import("vue").ComputedRef<boolean>;
                onMouseDown: (evt: MouseEvent) => void;
                sizer: import("vue").Ref<HTMLDivElement | undefined>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Placeholder: import("vue").DefineComponent<{}, {
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                placeholderClass: import("vue").ComputedRef<{
                    "vue-treeselect__placeholder": boolean;
                    "vue-treeselect-helper-zoom-effect-off": boolean;
                    "vue-treeselect-helper-hide": string | true;
                }>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        SingleValue: import("vue").DefineComponent<{}, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            shouldShowValue: import("vue").ComputedRef<boolean>;
            customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
            node: import("vue").ComputedRef<import("./symbol").TreeSelectNode>;
            Input: import("vue").DefineComponent<{}, {
                keysThatRequireMenuBeingOpen: (string | number)[];
                inputWidth: import("vue").Ref<number>;
                inputValue: import("vue").Ref<string>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                updateSearchQuery: () => void;
                debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
                onFocus: () => void;
                input: import("vue").Ref<HTMLInputElement | undefined>;
                focus: () => void;
                blur: () => void;
                onBlur: () => void;
                onInput: (evt: {
                    target: {
                        value: string;
                    };
                } | Event) => void;
                onKeyDown: (evt: KeyboardEvent) => void;
                getProps: () => {};
                needAutoSize: import("vue").ComputedRef<boolean>;
                onMouseDown: (evt: MouseEvent) => void;
                sizer: import("vue").Ref<HTMLDivElement | undefined>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Placeholder: import("vue").DefineComponent<{}, {
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                placeholderClass: import("vue").ComputedRef<{
                    "vue-treeselect__placeholder": boolean;
                    "vue-treeselect-helper-zoom-effect-off": boolean;
                    "vue-treeselect-helper-hide": string | true;
                }>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            DynamicSlot: import("vue").DefineComponent<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }>>, {
                slotObject: Record<string, any>;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    forest: {
        normalizedOptions: {
            [x: string]: any;
            id: string | number;
            label: string;
            ancestors?: any[] | undefined;
            children?: any[] | null | undefined;
            isDisabled?: boolean | undefined;
            isNew?: boolean | undefined;
            isDefaultExpanded?: boolean | undefined;
            isRootNode?: boolean | undefined;
            isLeaf?: boolean | undefined;
            parentNode?: any | null | undefined;
            isFallbackNode?: boolean | undefined;
            isBranch?: boolean | undefined;
            index?: number[] | undefined;
            level?: number | undefined;
            raw?: any;
        }[];
        nodeMap: {
            [x: string]: import("./symbol").TreeSelectNode;
            [x: number]: import("./symbol").TreeSelectNode;
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
    };
    trigger: {
        isFocused: boolean;
        searchQuery: string;
    };
    menu: {
        isOpen: boolean;
        current: string | number | null;
        lastScrollPosition: number;
        placement: "top" | "bottom";
    };
    menuRef: import("vue").Ref<({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            directionMap: {
                top: string;
                bottom: string;
                above: string;
                below: string;
            };
            menuContainerStyle: import("vue").ComputedRef<"" | import("vue").CSSProperties>;
            beforeListRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
            afterListRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
            entry: import("vue").ComputedRef<import("./symbol").RemoteSearchValue>;
            shouldShowSearchPromptTip: import("vue").ComputedRef<boolean>;
            options: import("vue").ComputedRef<boolean | import("./symbol").TreeSelectNode[] | undefined>;
            shouldShowNoResultsTip: import("vue").ComputedRef<boolean>;
            menuSizeWatcher: import("vue").Ref<{
                remove: () => void;
            } | null>;
            menuResizeAndScrollEventListeners: import("vue").Ref<{
                remove: () => void;
            } | null>;
            onMenuOpen: () => void;
            onMenuClose: () => void;
            adjustMenuOpenDirection: () => void;
            setupMenuSizeWatcher: () => void;
            setupMenuResizeAndScrollEventListeners: () => void;
            removeMenuSizeWatcher: () => void;
            removeMenuResizeAndScrollEventListeners: () => void;
            Option: import("vue").DefineComponent<{
                node: {
                    type: null;
                    required: true;
                };
            }, {
                props: {
                    node: import("./symbol").TreeSelectNode;
                };
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                shouldExpand: import("vue").ComputedRef<any>;
                shouldShow: import("vue").ComputedRef<boolean>;
                shouldFlattenOptions: import("vue").ComputedRef<boolean>;
                hasBranchNodes: import("vue").ComputedRef<boolean>;
                indentLevel: import("vue").ComputedRef<number | undefined>;
                showCountOnSearchComputed: import("vue").ComputedRef<boolean>;
                handleMouseEnterOption: () => void;
                handleMouseDownOnArrow: () => void;
                handleMouseDownOnLabelContainer: () => void;
                handleMouseDownOnRetry: () => void;
                listItemClass: import("vue").ComputedRef<{
                    [x: string]: boolean;
                    "vue-treeselect__list-item": boolean;
                }>;
                optionClass: import("vue").ComputedRef<{
                    "vue-treeselect__option": boolean;
                    "vue-treeselect__option--disabled": boolean | undefined;
                    "vue-treeselect__option--selected": boolean | null | undefined;
                    "vue-treeselect__option--highlight": any;
                    "vue-treeselect__option--matched": any;
                    "vue-treeselect__option--hide": boolean;
                }>;
                checkedState: import("vue").ComputedRef<0 | 1 | 2>;
                checkboxClass: import("vue").ComputedRef<{
                    "vue-treeselect__checkbox": boolean;
                    "vue-treeselect__checkbox--checked": boolean;
                    "vue-treeselect__checkbox--indeterminate": boolean;
                    "vue-treeselect__checkbox--unchecked": boolean;
                    "vue-treeselect__checkbox--disabled": boolean | undefined;
                }>;
                shouldShowCount: import("vue").ComputedRef<boolean | import("vue").ComputedRef<boolean> | undefined>;
                count: import("vue").ComputedRef<any>;
                customLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
                Tip: import("vue").DefineComponent<{
                    type: {
                        type: StringConstructor;
                        required: true;
                    };
                    icon: {
                        type: StringConstructor;
                        required: true;
                    };
                }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    type: {
                        type: StringConstructor;
                        required: true;
                    };
                    icon: {
                        type: StringConstructor;
                        required: true;
                    };
                }>>, {}>;
                ArrowIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                DynamicSlot: import("vue").DefineComponent<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }>>, {
                    slotObject: Record<string, any>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                node: {
                    type: null;
                    required: true;
                };
            }>>, {}>;
            Tip: import("vue").DefineComponent<{
                type: {
                    type: StringConstructor;
                    required: true;
                };
                icon: {
                    type: StringConstructor;
                    required: true;
                };
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: StringConstructor;
                    required: true;
                };
                icon: {
                    type: StringConstructor;
                    required: true;
                };
            }>>, {}>;
            DynamicSlot: import("vue").DefineComponent<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }>>, {
                slotObject: Record<string, any>;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
        instance: {
            props: import("./symbol").TreeselectProps;
            hasValue: import("vue").ComputedRef<boolean>;
            internalValue: import("vue").ComputedRef<(string | number)[]>;
            menu: MenuData;
            trigger: Trigger;
            getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
            clear: () => void;
            focusInput: () => void;
            toggleMenu: () => void;
            openMenu: () => void;
            getMenuDiv: () => HTMLElement | null;
            closeMenu: () => void;
            removeLastValue: () => void;
            select: (node: import("./symbol").TreeSelectNode) => void;
            highlightLastOption: () => void;
            highlightFirstOption: () => void;
            shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
            setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
            loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
            toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
            highlightPrevOption: () => void;
            highlightNextOption: () => void;
            localSearch: LocalSearch;
            getControlDiv: () => HTMLElement;
            getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
            handleRemoteSearch: () => void;
            forest: Forest;
            handleMouseDown: (evt: Event) => void;
            beforeListRenderer: import("vue").Slot | undefined;
            afterListRenderer: import("vue").Slot | undefined;
            customValueLabelRenderer: import("vue").Slot | undefined;
            customLabelRenderer: import("vue").Slot | undefined;
            isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
            shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
            selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            rootOptionsStates: import("./symbol").RemoteSearchValue;
            loadRootOptions: () => void;
        };
        directionMap: {
            top: string;
            bottom: string;
            above: string;
            below: string;
        };
        menuContainerStyle: import("vue").ComputedRef<"" | import("vue").CSSProperties>;
        beforeListRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
        afterListRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
        entry: import("vue").ComputedRef<import("./symbol").RemoteSearchValue>;
        shouldShowSearchPromptTip: import("vue").ComputedRef<boolean>;
        options: import("vue").ComputedRef<boolean | import("./symbol").TreeSelectNode[] | undefined>;
        shouldShowNoResultsTip: import("vue").ComputedRef<boolean>;
        menuSizeWatcher: import("vue").Ref<{
            remove: () => void;
        } | null>;
        menuResizeAndScrollEventListeners: import("vue").Ref<{
            remove: () => void;
        } | null>;
        onMenuOpen: () => void;
        onMenuClose: () => void;
        adjustMenuOpenDirection: () => void;
        setupMenuSizeWatcher: () => void;
        setupMenuResizeAndScrollEventListeners: () => void;
        removeMenuSizeWatcher: () => void;
        removeMenuResizeAndScrollEventListeners: () => void;
        Option: import("vue").DefineComponent<{
            node: {
                type: null;
                required: true;
            };
        }, {
            props: {
                node: import("./symbol").TreeSelectNode;
            };
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            shouldExpand: import("vue").ComputedRef<any>;
            shouldShow: import("vue").ComputedRef<boolean>;
            shouldFlattenOptions: import("vue").ComputedRef<boolean>;
            hasBranchNodes: import("vue").ComputedRef<boolean>;
            indentLevel: import("vue").ComputedRef<number | undefined>;
            showCountOnSearchComputed: import("vue").ComputedRef<boolean>;
            handleMouseEnterOption: () => void;
            handleMouseDownOnArrow: () => void;
            handleMouseDownOnLabelContainer: () => void;
            handleMouseDownOnRetry: () => void;
            listItemClass: import("vue").ComputedRef<{
                [x: string]: boolean;
                "vue-treeselect__list-item": boolean;
            }>;
            optionClass: import("vue").ComputedRef<{
                "vue-treeselect__option": boolean;
                "vue-treeselect__option--disabled": boolean | undefined;
                "vue-treeselect__option--selected": boolean | null | undefined;
                "vue-treeselect__option--highlight": any;
                "vue-treeselect__option--matched": any;
                "vue-treeselect__option--hide": boolean;
            }>;
            checkedState: import("vue").ComputedRef<0 | 1 | 2>;
            checkboxClass: import("vue").ComputedRef<{
                "vue-treeselect__checkbox": boolean;
                "vue-treeselect__checkbox--checked": boolean;
                "vue-treeselect__checkbox--indeterminate": boolean;
                "vue-treeselect__checkbox--unchecked": boolean;
                "vue-treeselect__checkbox--disabled": boolean | undefined;
            }>;
            shouldShowCount: import("vue").ComputedRef<boolean | import("vue").ComputedRef<boolean> | undefined>;
            count: import("vue").ComputedRef<any>;
            customLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
            Tip: import("vue").DefineComponent<{
                type: {
                    type: StringConstructor;
                    required: true;
                };
                icon: {
                    type: StringConstructor;
                    required: true;
                };
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: StringConstructor;
                    required: true;
                };
                icon: {
                    type: StringConstructor;
                    required: true;
                };
            }>>, {}>;
            ArrowIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            DynamicSlot: import("vue").DefineComponent<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }>>, {
                slotObject: Record<string, any>;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            node: {
                type: null;
                required: true;
            };
        }>>, {}>;
        Tip: import("vue").DefineComponent<{
            type: {
                type: StringConstructor;
                required: true;
            };
            icon: {
                type: StringConstructor;
                required: true;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                required: true;
            };
            icon: {
                type: StringConstructor;
                required: true;
            };
        }>>, {}>;
        DynamicSlot: import("vue").DefineComponent<{
            slotFunction: {
                type: import("vue").PropType<import("vue").Slot>;
                required: true;
            };
            slotObject: {
                type: ObjectConstructor[];
                default: undefined;
            };
        }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            slotFunction: {
                type: import("vue").PropType<import("vue").Slot>;
                required: true;
            };
            slotObject: {
                type: ObjectConstructor[];
                default: undefined;
            };
        }>>, {
            slotObject: Record<string, any>;
        }>;
    }> & {} & import("vue").ComponentCustomProperties) | undefined>;
    wrapper: import("vue").Ref<HTMLDivElement | undefined>;
    localSearch: {
        active: boolean;
        noResults: boolean;
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
    };
    wrapperClass: import("vue").ComputedRef<{
        "vue-treeselect": boolean;
        "vue-treeselect--single": boolean;
        "vue-treeselect--multi": boolean;
        "vue-treeselect--searchable": boolean;
        "vue-treeselect--disabled": boolean;
        "vue-treeselect--focused": boolean;
        "vue-treeselect--has-value": boolean;
        "vue-treeselect--open": boolean;
        "vue-treeselect--open-above": boolean;
        "vue-treeselect--open-below": boolean;
        "vue-treeselect--branch-nodes-disabled": boolean;
        "vue-treeselect--append-to-body": boolean;
    }>;
    $slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    beforeListRenderer: import("vue").Slot | undefined;
    afterListRenderer: import("vue").Slot | undefined;
    customValueLabelRenderer: import("vue").Slot | undefined;
    customLabelRenderer: import("vue").Slot | undefined;
    getMenuDiv: () => HTMLElement | null;
    getControlDiv: () => HTMLElement;
    resetSearchQuery: () => void;
    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
    internalValue: import("vue").ComputedRef<(string | number)[]>;
    traverseDescendantsBFS: (parentNode: import("./symbol").TreeSelectNode, callback: (node: import("./symbol").TreeSelectNode) => void) => void;
    enhancedNormalizer: (node: import("./symbol").TreeSelectNode) => import("./symbol").TreeSelectNode;
    buildForestState: () => void;
    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
    getValue: () => any;
    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
    traverseAllNodesDFS: (callback: (node: import("./symbol").TreeSelectNode) => void) => void;
    traverseDescendantsDFS: (parentNode: import("./symbol").TreeSelectNode, callback: (node: import("./symbol").TreeSelectNode) => void) => void;
    resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void;
    highlightLastOption: () => void;
    highlightFirstOption: () => void;
    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean) => void;
    highlightPrevOption: () => void;
    highlightNextOption: () => void;
    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
    handleRemoteSearch: () => void;
    loadRootOptions: () => void;
    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
    initialize: () => void;
    rootOptionsStates: {
        isLoaded: boolean;
        isLoading: boolean;
        loadingError: string;
    };
    fixSelectedNodeIds: (nodeIdListOfPrevValue: (string | number)[]) => void;
    handleLocalSearch: () => void;
    getValueContainer: () => ({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            count: import("vue").ComputedRef<number>;
            nodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            MultiValueItem: import("vue").DefineComponent<{
                node: {
                    type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                    required: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    node: {
                        type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                        required: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                node: import("vue").Ref<import("./symbol").TreeSelectNode>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                itemClass: import("vue").ComputedRef<{
                    "vue-treeselect__multi-value-item": boolean;
                    "vue-treeselect__multi-value-item-disabled": boolean | undefined;
                    "vue-treeselect__multi-value-item-new": boolean | undefined;
                }>;
                handleLeftMouseDown: () => void;
                customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
                DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                DynamicSlot: import("vue").DefineComponent<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }>>, {
                    slotObject: Record<string, any>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                node: {
                    type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                    required: true;
                };
            }>>, {}>;
            ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Input: import("vue").DefineComponent<{}, {
                keysThatRequireMenuBeingOpen: (string | number)[];
                inputWidth: import("vue").Ref<number>;
                inputValue: import("vue").Ref<string>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                updateSearchQuery: () => void;
                debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
                onFocus: () => void;
                input: import("vue").Ref<HTMLInputElement | undefined>;
                focus: () => void;
                blur: () => void;
                onBlur: () => void;
                onInput: (evt: {
                    target: {
                        value: string;
                    };
                } | Event) => void;
                onKeyDown: (evt: KeyboardEvent) => void;
                getProps: () => {};
                needAutoSize: import("vue").ComputedRef<boolean>;
                onMouseDown: (evt: MouseEvent) => void;
                sizer: import("vue").Ref<HTMLDivElement | undefined>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Placeholder: import("vue").DefineComponent<{}, {
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                placeholderClass: import("vue").ComputedRef<{
                    "vue-treeselect__placeholder": boolean;
                    "vue-treeselect-helper-zoom-effect-off": boolean;
                    "vue-treeselect-helper-hide": string | true;
                }>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
        instance: {
            props: import("./symbol").TreeselectProps;
            hasValue: import("vue").ComputedRef<boolean>;
            internalValue: import("vue").ComputedRef<(string | number)[]>;
            menu: MenuData;
            trigger: Trigger;
            getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
            clear: () => void;
            focusInput: () => void;
            toggleMenu: () => void;
            openMenu: () => void;
            getMenuDiv: () => HTMLElement | null;
            closeMenu: () => void;
            removeLastValue: () => void;
            select: (node: import("./symbol").TreeSelectNode) => void;
            highlightLastOption: () => void;
            highlightFirstOption: () => void;
            shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
            setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
            loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
            toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
            highlightPrevOption: () => void;
            highlightNextOption: () => void;
            localSearch: LocalSearch;
            getControlDiv: () => HTMLElement;
            getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
            handleRemoteSearch: () => void;
            forest: Forest;
            handleMouseDown: (evt: Event) => void;
            beforeListRenderer: import("vue").Slot | undefined;
            afterListRenderer: import("vue").Slot | undefined;
            customValueLabelRenderer: import("vue").Slot | undefined;
            customLabelRenderer: import("vue").Slot | undefined;
            isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
            shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
            selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            rootOptionsStates: import("./symbol").RemoteSearchValue;
            loadRootOptions: () => void;
        };
        count: import("vue").ComputedRef<number>;
        nodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
        MultiValueItem: import("vue").DefineComponent<{
            node: {
                type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                required: true;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                node: {
                    type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                    required: true;
                };
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            node: import("vue").Ref<import("./symbol").TreeSelectNode>;
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            itemClass: import("vue").ComputedRef<{
                "vue-treeselect__multi-value-item": boolean;
                "vue-treeselect__multi-value-item-disabled": boolean | undefined;
                "vue-treeselect__multi-value-item-new": boolean | undefined;
            }>;
            handleLeftMouseDown: () => void;
            customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
            DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            DynamicSlot: import("vue").DefineComponent<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }>>, {
                slotObject: Record<string, any>;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            node: {
                type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                required: true;
            };
        }>>, {}>;
        ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        Input: import("vue").DefineComponent<{}, {
            keysThatRequireMenuBeingOpen: (string | number)[];
            inputWidth: import("vue").Ref<number>;
            inputValue: import("vue").Ref<string>;
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            updateSearchQuery: () => void;
            debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
            onFocus: () => void;
            input: import("vue").Ref<HTMLInputElement | undefined>;
            focus: () => void;
            blur: () => void;
            onBlur: () => void;
            onInput: (evt: {
                target: {
                    value: string;
                };
            } | Event) => void;
            onKeyDown: (evt: KeyboardEvent) => void;
            getProps: () => {};
            needAutoSize: import("vue").ComputedRef<boolean>;
            onMouseDown: (evt: MouseEvent) => void;
            sizer: import("vue").Ref<HTMLDivElement | undefined>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        Placeholder: import("vue").DefineComponent<{}, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            placeholderClass: import("vue").ComputedRef<{
                "vue-treeselect__placeholder": boolean;
                "vue-treeselect-helper-zoom-effect-off": boolean;
                "vue-treeselect-helper-hide": string | true;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }> & {} & import("vue").ComponentCustomProperties) | ({
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{}> & Omit<Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, never>;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{}>>, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            shouldShowValue: import("vue").ComputedRef<boolean>;
            customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
            node: import("vue").ComputedRef<import("./symbol").TreeSelectNode>;
            Input: import("vue").DefineComponent<{}, {
                keysThatRequireMenuBeingOpen: (string | number)[];
                inputWidth: import("vue").Ref<number>;
                inputValue: import("vue").Ref<string>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                updateSearchQuery: () => void;
                debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
                onFocus: () => void;
                input: import("vue").Ref<HTMLInputElement | undefined>;
                focus: () => void;
                blur: () => void;
                onBlur: () => void;
                onInput: (evt: {
                    target: {
                        value: string;
                    };
                } | Event) => void;
                onKeyDown: (evt: KeyboardEvent) => void;
                getProps: () => {};
                needAutoSize: import("vue").ComputedRef<boolean>;
                onMouseDown: (evt: MouseEvent) => void;
                sizer: import("vue").Ref<HTMLDivElement | undefined>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Placeholder: import("vue").DefineComponent<{}, {
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                placeholderClass: import("vue").ComputedRef<{
                    "vue-treeselect__placeholder": boolean;
                    "vue-treeselect-helper-zoom-effect-off": boolean;
                    "vue-treeselect-helper-hide": string | true;
                }>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            DynamicSlot: import("vue").DefineComponent<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }>>, {
                slotObject: Record<string, any>;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{}>> & import("vue").ShallowUnwrapRef<{
        instance: {
            props: import("./symbol").TreeselectProps;
            hasValue: import("vue").ComputedRef<boolean>;
            internalValue: import("vue").ComputedRef<(string | number)[]>;
            menu: MenuData;
            trigger: Trigger;
            getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
            clear: () => void;
            focusInput: () => void;
            toggleMenu: () => void;
            openMenu: () => void;
            getMenuDiv: () => HTMLElement | null;
            closeMenu: () => void;
            removeLastValue: () => void;
            select: (node: import("./symbol").TreeSelectNode) => void;
            highlightLastOption: () => void;
            highlightFirstOption: () => void;
            shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
            setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
            loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
            toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
            highlightPrevOption: () => void;
            highlightNextOption: () => void;
            localSearch: LocalSearch;
            getControlDiv: () => HTMLElement;
            getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
            handleRemoteSearch: () => void;
            forest: Forest;
            handleMouseDown: (evt: Event) => void;
            beforeListRenderer: import("vue").Slot | undefined;
            afterListRenderer: import("vue").Slot | undefined;
            customValueLabelRenderer: import("vue").Slot | undefined;
            customLabelRenderer: import("vue").Slot | undefined;
            isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
            shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
            selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            rootOptionsStates: import("./symbol").RemoteSearchValue;
            loadRootOptions: () => void;
        };
        shouldShowValue: import("vue").ComputedRef<boolean>;
        customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
        node: import("vue").ComputedRef<import("./symbol").TreeSelectNode>;
        Input: import("vue").DefineComponent<{}, {
            keysThatRequireMenuBeingOpen: (string | number)[];
            inputWidth: import("vue").Ref<number>;
            inputValue: import("vue").Ref<string>;
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            updateSearchQuery: () => void;
            debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
            onFocus: () => void;
            input: import("vue").Ref<HTMLInputElement | undefined>;
            focus: () => void;
            blur: () => void;
            onBlur: () => void;
            onInput: (evt: {
                target: {
                    value: string;
                };
            } | Event) => void;
            onKeyDown: (evt: KeyboardEvent) => void;
            getProps: () => {};
            needAutoSize: import("vue").ComputedRef<boolean>;
            onMouseDown: (evt: MouseEvent) => void;
            sizer: import("vue").Ref<HTMLDivElement | undefined>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        Placeholder: import("vue").DefineComponent<{}, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            placeholderClass: import("vue").ComputedRef<{
                "vue-treeselect__placeholder": boolean;
                "vue-treeselect-helper-zoom-effect-off": boolean;
                "vue-treeselect-helper-hide": string | true;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        DynamicSlot: import("vue").DefineComponent<{
            slotFunction: {
                type: import("vue").PropType<import("vue").Slot>;
                required: true;
            };
            slotObject: {
                type: ObjectConstructor[];
                default: undefined;
            };
        }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            slotFunction: {
                type: import("vue").PropType<import("vue").Slot>;
                required: true;
            };
            slotObject: {
                type: ObjectConstructor[];
                default: undefined;
            };
        }>>, {
            slotObject: Record<string, any>;
        }>;
    }> & {} & import("vue").ComponentCustomProperties);
    getInput: () => HTMLDivElement;
    blurInput: () => void;
    focusInput: () => void;
    openMenu: () => void;
    toggleClickOutsideEvent: (enabled: boolean) => void;
    toggleMenu: () => void;
    closeMenu: () => void;
    clear: () => void;
    hasValue: import("vue").ComputedRef<boolean>;
    removeLastValue: () => void;
    select: (node: import("./symbol").TreeSelectNode) => void;
    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
    blurOnSelect: import("vue").Ref<boolean>;
    extractCheckedNodeIdsFromValue: () => any;
    handleMouseDown: (evt: Event) => void;
    appendToBodyMenuStyle: import("vue").ComputedRef<"" | {
        left: string;
        top: string;
        width: string;
    }>;
    HiddenFields: import("vue").DefineComponent<{}, {
        instance: {
            props: import("./symbol").TreeselectProps;
            hasValue: import("vue").ComputedRef<boolean>;
            internalValue: import("vue").ComputedRef<(string | number)[]>;
            menu: MenuData;
            trigger: Trigger;
            getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
            clear: () => void;
            focusInput: () => void;
            toggleMenu: () => void;
            openMenu: () => void;
            getMenuDiv: () => HTMLElement | null;
            closeMenu: () => void;
            removeLastValue: () => void;
            select: (node: import("./symbol").TreeSelectNode) => void;
            highlightLastOption: () => void;
            highlightFirstOption: () => void;
            shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
            setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
            loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
            toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
            highlightPrevOption: () => void;
            highlightNextOption: () => void;
            localSearch: LocalSearch;
            getControlDiv: () => HTMLElement;
            getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
            handleRemoteSearch: () => void;
            forest: Forest;
            handleMouseDown: (evt: Event) => void;
            beforeListRenderer: import("vue").Slot | undefined;
            afterListRenderer: import("vue").Slot | undefined;
            customValueLabelRenderer: import("vue").Slot | undefined;
            customLabelRenderer: import("vue").Slot | undefined;
            isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
            shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
            selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            rootOptionsStates: import("./symbol").RemoteSearchValue;
            loadRootOptions: () => void;
        };
        flag: import("vue").ComputedRef<boolean>;
        stringifiedValues: import("vue").ComputedRef<string[]>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    Control: import("vue").DefineComponent<{}, {
        instance: {
            props: import("./symbol").TreeselectProps;
            hasValue: import("vue").ComputedRef<boolean>;
            internalValue: import("vue").ComputedRef<(string | number)[]>;
            menu: MenuData;
            trigger: Trigger;
            getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
            clear: () => void;
            focusInput: () => void;
            toggleMenu: () => void;
            openMenu: () => void;
            getMenuDiv: () => HTMLElement | null;
            closeMenu: () => void;
            removeLastValue: () => void;
            select: (node: import("./symbol").TreeSelectNode) => void;
            highlightLastOption: () => void;
            highlightFirstOption: () => void;
            shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
            setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
            loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
            toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
            highlightPrevOption: () => void;
            highlightNextOption: () => void;
            localSearch: LocalSearch;
            getControlDiv: () => HTMLElement;
            getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
            handleRemoteSearch: () => void;
            forest: Forest;
            handleMouseDown: (evt: Event) => void;
            beforeListRenderer: import("vue").Slot | undefined;
            afterListRenderer: import("vue").Slot | undefined;
            customValueLabelRenderer: import("vue").Slot | undefined;
            customLabelRenderer: import("vue").Slot | undefined;
            isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
            shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
            selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            rootOptionsStates: import("./symbol").RemoteSearchValue;
            loadRootOptions: () => void;
        };
        shouldShowX: import("vue").ComputedRef<boolean>;
        shouldShowArrow: import("vue").ComputedRef<boolean>;
        handleMouseDownOnX: () => void;
        handleMouseDownOnArrow: () => void;
        DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        ArrowIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        MultiValue: import("vue").DefineComponent<{}, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            count: import("vue").ComputedRef<number>;
            nodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            MultiValueItem: import("vue").DefineComponent<{
                node: {
                    type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                    required: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    node: {
                        type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                        required: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                node: import("vue").Ref<import("./symbol").TreeSelectNode>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                itemClass: import("vue").ComputedRef<{
                    "vue-treeselect__multi-value-item": boolean;
                    "vue-treeselect__multi-value-item-disabled": boolean | undefined;
                    "vue-treeselect__multi-value-item-new": boolean | undefined;
                }>;
                handleLeftMouseDown: () => void;
                customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
                DeleteIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
                DynamicSlot: import("vue").DefineComponent<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    slotFunction: {
                        type: import("vue").PropType<import("vue").Slot>;
                        required: true;
                    };
                    slotObject: {
                        type: ObjectConstructor[];
                        default: undefined;
                    };
                }>>, {
                    slotObject: Record<string, any>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                node: {
                    type: import("vue").PropType<import("./symbol").TreeSelectNode>;
                    required: true;
                };
            }>>, {}>;
            ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Input: import("vue").DefineComponent<{}, {
                keysThatRequireMenuBeingOpen: (string | number)[];
                inputWidth: import("vue").Ref<number>;
                inputValue: import("vue").Ref<string>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                updateSearchQuery: () => void;
                debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
                onFocus: () => void;
                input: import("vue").Ref<HTMLInputElement | undefined>;
                focus: () => void;
                blur: () => void;
                onBlur: () => void;
                onInput: (evt: {
                    target: {
                        value: string;
                    };
                } | Event) => void;
                onKeyDown: (evt: KeyboardEvent) => void;
                getProps: () => {};
                needAutoSize: import("vue").ComputedRef<boolean>;
                onMouseDown: (evt: MouseEvent) => void;
                sizer: import("vue").Ref<HTMLDivElement | undefined>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Placeholder: import("vue").DefineComponent<{}, {
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                placeholderClass: import("vue").ComputedRef<{
                    "vue-treeselect__placeholder": boolean;
                    "vue-treeselect-helper-zoom-effect-off": boolean;
                    "vue-treeselect-helper-hide": string | true;
                }>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
        SingleValue: import("vue").DefineComponent<{}, {
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            shouldShowValue: import("vue").ComputedRef<boolean>;
            customValueLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
            node: import("vue").ComputedRef<import("./symbol").TreeSelectNode>;
            Input: import("vue").DefineComponent<{}, {
                keysThatRequireMenuBeingOpen: (string | number)[];
                inputWidth: import("vue").Ref<number>;
                inputValue: import("vue").Ref<string>;
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                updateSearchQuery: () => void;
                debouncedCallback: import("lodash").DebouncedFuncLeading<() => void>;
                onFocus: () => void;
                input: import("vue").Ref<HTMLInputElement | undefined>;
                focus: () => void;
                blur: () => void;
                onBlur: () => void;
                onInput: (evt: {
                    target: {
                        value: string;
                    };
                } | Event) => void;
                onKeyDown: (evt: KeyboardEvent) => void;
                getProps: () => {};
                needAutoSize: import("vue").ComputedRef<boolean>;
                onMouseDown: (evt: MouseEvent) => void;
                sizer: import("vue").Ref<HTMLDivElement | undefined>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            ValueContainer: import("vue").DefineComponent<{}, {}, any, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            Placeholder: import("vue").DefineComponent<{}, {
                instance: {
                    props: import("./symbol").TreeselectProps;
                    hasValue: import("vue").ComputedRef<boolean>;
                    internalValue: import("vue").ComputedRef<(string | number)[]>;
                    menu: MenuData;
                    trigger: Trigger;
                    getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                    clear: () => void;
                    focusInput: () => void;
                    toggleMenu: () => void;
                    openMenu: () => void;
                    getMenuDiv: () => HTMLElement | null;
                    closeMenu: () => void;
                    removeLastValue: () => void;
                    select: (node: import("./symbol").TreeSelectNode) => void;
                    highlightLastOption: () => void;
                    highlightFirstOption: () => void;
                    shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                    setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                    loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                    toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                    highlightPrevOption: () => void;
                    highlightNextOption: () => void;
                    localSearch: LocalSearch;
                    getControlDiv: () => HTMLElement;
                    getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                    handleRemoteSearch: () => void;
                    forest: Forest;
                    handleMouseDown: (evt: Event) => void;
                    beforeListRenderer: import("vue").Slot | undefined;
                    afterListRenderer: import("vue").Slot | undefined;
                    customValueLabelRenderer: import("vue").Slot | undefined;
                    customLabelRenderer: import("vue").Slot | undefined;
                    isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                    shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                    selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                    rootOptionsStates: import("./symbol").RemoteSearchValue;
                    loadRootOptions: () => void;
                };
                placeholderClass: import("vue").ComputedRef<{
                    "vue-treeselect__placeholder": boolean;
                    "vue-treeselect-helper-zoom-effect-off": boolean;
                    "vue-treeselect-helper-hide": string | true;
                }>;
            }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            DynamicSlot: import("vue").DefineComponent<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }>>, {
                slotObject: Record<string, any>;
            }>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
    Menu: import("vue").DefineComponent<{}, {
        instance: {
            props: import("./symbol").TreeselectProps;
            hasValue: import("vue").ComputedRef<boolean>;
            internalValue: import("vue").ComputedRef<(string | number)[]>;
            menu: MenuData;
            trigger: Trigger;
            getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
            clear: () => void;
            focusInput: () => void;
            toggleMenu: () => void;
            openMenu: () => void;
            getMenuDiv: () => HTMLElement | null;
            closeMenu: () => void;
            removeLastValue: () => void;
            select: (node: import("./symbol").TreeSelectNode) => void;
            highlightLastOption: () => void;
            highlightFirstOption: () => void;
            shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
            setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
            loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
            toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
            highlightPrevOption: () => void;
            highlightNextOption: () => void;
            localSearch: LocalSearch;
            getControlDiv: () => HTMLElement;
            getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
            handleRemoteSearch: () => void;
            forest: Forest;
            handleMouseDown: (evt: Event) => void;
            beforeListRenderer: import("vue").Slot | undefined;
            afterListRenderer: import("vue").Slot | undefined;
            customValueLabelRenderer: import("vue").Slot | undefined;
            customLabelRenderer: import("vue").Slot | undefined;
            isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
            shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
            selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
            rootOptionsStates: import("./symbol").RemoteSearchValue;
            loadRootOptions: () => void;
        };
        directionMap: {
            top: string;
            bottom: string;
            above: string;
            below: string;
        };
        menuContainerStyle: import("vue").ComputedRef<"" | import("vue").CSSProperties>;
        beforeListRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
        afterListRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
        entry: import("vue").ComputedRef<import("./symbol").RemoteSearchValue>;
        shouldShowSearchPromptTip: import("vue").ComputedRef<boolean>;
        options: import("vue").ComputedRef<boolean | import("./symbol").TreeSelectNode[] | undefined>;
        shouldShowNoResultsTip: import("vue").ComputedRef<boolean>;
        menuSizeWatcher: import("vue").Ref<{
            remove: () => void;
        } | null>;
        menuResizeAndScrollEventListeners: import("vue").Ref<{
            remove: () => void;
        } | null>;
        onMenuOpen: () => void;
        onMenuClose: () => void;
        adjustMenuOpenDirection: () => void;
        setupMenuSizeWatcher: () => void;
        setupMenuResizeAndScrollEventListeners: () => void;
        removeMenuSizeWatcher: () => void;
        removeMenuResizeAndScrollEventListeners: () => void;
        Option: import("vue").DefineComponent<{
            node: {
                type: null;
                required: true;
            };
        }, {
            props: {
                node: import("./symbol").TreeSelectNode;
            };
            instance: {
                props: import("./symbol").TreeselectProps;
                hasValue: import("vue").ComputedRef<boolean>;
                internalValue: import("vue").ComputedRef<(string | number)[]>;
                menu: MenuData;
                trigger: Trigger;
                getNode: (nodeId: string | number | null) => import("./symbol").TreeSelectNode | null;
                clear: () => void;
                focusInput: () => void;
                toggleMenu: () => void;
                openMenu: () => void;
                getMenuDiv: () => HTMLElement | null;
                closeMenu: () => void;
                removeLastValue: () => void;
                select: (node: import("./symbol").TreeSelectNode) => void;
                highlightLastOption: () => void;
                highlightFirstOption: () => void;
                shouldExpand: (node: import("./symbol").TreeSelectNode) => any;
                setCurrentHighlightedOption: (node: import("./symbol").TreeSelectNode, scroll?: boolean | undefined) => void;
                loadChildrenOptions: (parentNode: import("./symbol").TreeSelectNode) => void;
                toggleExpanded: (node: import("./symbol").TreeSelectNode) => void;
                highlightPrevOption: () => void;
                highlightNextOption: () => void;
                localSearch: LocalSearch;
                getControlDiv: () => HTMLElement;
                getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
                handleRemoteSearch: () => void;
                forest: Forest;
                handleMouseDown: (evt: Event) => void;
                beforeListRenderer: import("vue").Slot | undefined;
                afterListRenderer: import("vue").Slot | undefined;
                customValueLabelRenderer: import("vue").Slot | undefined;
                customLabelRenderer: import("vue").Slot | undefined;
                isSelected: (node?: import("./symbol").TreeSelectNode | null | undefined) => boolean | null | undefined;
                shouldShowOptionInMenu: (node: import("./symbol").TreeSelectNode) => boolean;
                selectedNodes: import("vue").ComputedRef<import("./symbol").TreeSelectNode[]>;
                rootOptionsStates: import("./symbol").RemoteSearchValue;
                loadRootOptions: () => void;
            };
            shouldExpand: import("vue").ComputedRef<any>;
            shouldShow: import("vue").ComputedRef<boolean>;
            shouldFlattenOptions: import("vue").ComputedRef<boolean>;
            hasBranchNodes: import("vue").ComputedRef<boolean>;
            indentLevel: import("vue").ComputedRef<number | undefined>;
            showCountOnSearchComputed: import("vue").ComputedRef<boolean>;
            handleMouseEnterOption: () => void;
            handleMouseDownOnArrow: () => void;
            handleMouseDownOnLabelContainer: () => void;
            handleMouseDownOnRetry: () => void;
            listItemClass: import("vue").ComputedRef<{
                [x: string]: boolean;
                "vue-treeselect__list-item": boolean;
            }>;
            optionClass: import("vue").ComputedRef<{
                "vue-treeselect__option": boolean;
                "vue-treeselect__option--disabled": boolean | undefined;
                "vue-treeselect__option--selected": boolean | null | undefined;
                "vue-treeselect__option--highlight": any;
                "vue-treeselect__option--matched": any;
                "vue-treeselect__option--hide": boolean;
            }>;
            checkedState: import("vue").ComputedRef<0 | 1 | 2>;
            checkboxClass: import("vue").ComputedRef<{
                "vue-treeselect__checkbox": boolean;
                "vue-treeselect__checkbox--checked": boolean;
                "vue-treeselect__checkbox--indeterminate": boolean;
                "vue-treeselect__checkbox--unchecked": boolean;
                "vue-treeselect__checkbox--disabled": boolean | undefined;
            }>;
            shouldShowCount: import("vue").ComputedRef<boolean | import("vue").ComputedRef<boolean> | undefined>;
            count: import("vue").ComputedRef<any>;
            customLabelRenderer: import("vue").ComputedRef<import("vue").Slot | undefined>;
            Tip: import("vue").DefineComponent<{
                type: {
                    type: StringConstructor;
                    required: true;
                };
                icon: {
                    type: StringConstructor;
                    required: true;
                };
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                type: {
                    type: StringConstructor;
                    required: true;
                };
                icon: {
                    type: StringConstructor;
                    required: true;
                };
            }>>, {}>;
            ArrowIcon: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
            DynamicSlot: import("vue").DefineComponent<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                slotFunction: {
                    type: import("vue").PropType<import("vue").Slot>;
                    required: true;
                };
                slotObject: {
                    type: ObjectConstructor[];
                    default: undefined;
                };
            }>>, {
                slotObject: Record<string, any>;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            node: {
                type: null;
                required: true;
            };
        }>>, {}>;
        Tip: import("vue").DefineComponent<{
            type: {
                type: StringConstructor;
                required: true;
            };
            icon: {
                type: StringConstructor;
                required: true;
            };
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            type: {
                type: StringConstructor;
                required: true;
            };
            icon: {
                type: StringConstructor;
                required: true;
            };
        }>>, {}>;
        DynamicSlot: import("vue").DefineComponent<{
            slotFunction: {
                type: import("vue").PropType<import("vue").Slot>;
                required: true;
            };
            slotObject: {
                type: ObjectConstructor[];
                default: undefined;
            };
        }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            slotFunction: {
                type: import("vue").PropType<import("vue").Slot>;
                required: true;
            };
            slotObject: {
                type: ObjectConstructor[];
                default: undefined;
            };
        }>>, {
            slotObject: Record<string, any>;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "deselect" | "close" | "open" | "update:modelValue" | "search-change")[], "select" | "deselect" | "close" | "open" | "update:modelValue" | "search-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    allowClearingDisabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowSelectingDisabledDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    async: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoLoadRootOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoDeselectAncestors: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoDeselectDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSelectAncestors: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoSelectDescendants: {
        type: BooleanConstructor;
        default: boolean;
    };
    backspaceRemoves: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClearAll: {
        type: import("vue").PropType<() => boolean | Promise<boolean>>;
        default: () => boolean;
    };
    branchNodesFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    cacheOptions: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearAllText: {
        type: StringConstructor;
        default: string;
    };
    clearOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearValueText: {
        type: StringConstructor;
        default: string;
    };
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    defaultExpandLevel: {
        type: NumberConstructor;
        default: number;
    };
    defaultOptions: {
        type: import("vue").PropType<boolean | import("./symbol").TreeSelectNode[]>;
        default: Boolean;
    };
    deleteRemoves: {
        type: BooleanConstructor;
        default: boolean;
    };
    delimiter: {
        type: StringConstructor;
        default: string;
    };
    flattenSearchResults: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableBranchNodes: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    disableFuzzyMatching: {
        type: BooleanConstructor;
        default: boolean;
    };
    flat: {
        type: BooleanConstructor;
        default: boolean;
    };
    instanceId: {
        default: () => string;
        type: (StringConstructor | NumberConstructor)[];
    };
    joinValues: {
        type: BooleanConstructor;
        default: boolean;
    };
    limit: {
        type: NumberConstructor;
        default: number;
    };
    limitText: {
        type: import("vue").PropType<(count: number) => string>;
        default: (count: number) => string;
    };
    loadingText: {
        type: StringConstructor;
        default: string;
    };
    loadOptions: {
        type: import("vue").PropType<(option: {
            action: string;
            callback: (error: string | Error) => void;
            parentNode?: import("./symbol").TreeSelectNode | undefined;
            instanceId: string;
        }) => void | Promise<void>>;
    };
    matchKeys: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    maxHeight: {
        type: NumberConstructor;
        default: number;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
    };
    noChildrenText: {
        type: StringConstructor;
        default: string;
    };
    noOptionsText: {
        type: StringConstructor;
        default: string;
    };
    noResultsText: {
        type: StringConstructor;
        default: string;
    };
    normalizer: {
        type: import("vue").PropType<(node: any, instanceId: string) => import("./symbol").TreeSelectNode>;
        default: {
            <T>(value: T): T;
            (): undefined;
        };
    };
    openDirection: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    openOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    openOnFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: ArrayConstructor;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    retryText: {
        type: StringConstructor;
        default: string;
    };
    retryTitle: {
        type: StringConstructor;
        default: string;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchNested: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchPromptText: {
        type: StringConstructor;
        default: string;
    };
    showCount: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCountOf: {
        type: import("vue").PropType<"ALL_CHILDREN" | "ALL_DESCENDANTS" | "LEAF_CHILDREN" | "LEAF_DESCENDANTS">;
        default: string;
        validator: (value: string) => boolean;
    };
    showCountOnSearch: {
        type: BooleanConstructor;
        default: boolean;
    };
    sortValueBy: {
        type: StringConstructor;
        default: string;
        validator: (value: string) => boolean;
    };
    tabIndex: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: null;
    valueConsistsOf: {
        type: StringConstructor;
        default: string;
        validator(value: string): boolean;
    };
    valueFormat: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onDeselect?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onSearch-change"?: ((...args: any[]) => any) | undefined;
}, {
    flat: boolean;
    allowClearingDisabled: boolean;
    allowSelectingDisabledDescendants: boolean;
    alwaysOpen: boolean;
    appendToBody: boolean;
    async: boolean;
    autoFocus: boolean;
    autoLoadRootOptions: boolean;
    autoDeselectAncestors: boolean;
    autoDeselectDescendants: boolean;
    autoSelectAncestors: boolean;
    autoSelectDescendants: boolean;
    backspaceRemoves: boolean;
    beforeClearAll: () => boolean | Promise<boolean>;
    branchNodesFirst: boolean;
    cacheOptions: boolean;
    clearable: boolean;
    clearAllText: string;
    clearOnSelect: boolean;
    clearValueText: string;
    closeOnSelect: boolean;
    defaultExpandLevel: number;
    defaultOptions: boolean | import("./symbol").TreeSelectNode[];
    deleteRemoves: boolean;
    delimiter: string;
    flattenSearchResults: boolean;
    disableBranchNodes: boolean;
    disabled: boolean;
    disableFuzzyMatching: boolean;
    instanceId: string | number;
    joinValues: boolean;
    limit: number;
    limitText: (count: number) => string;
    loadingText: string;
    matchKeys: string[];
    maxHeight: number;
    multiple: boolean;
    noChildrenText: string;
    noOptionsText: string;
    noResultsText: string;
    normalizer: (node: any, instanceId: string) => import("./symbol").TreeSelectNode;
    openDirection: string;
    openOnClick: boolean;
    openOnFocus: boolean;
    placeholder: string;
    required: boolean;
    retryText: string;
    retryTitle: string;
    searchable: boolean;
    searchNested: boolean;
    searchPromptText: string;
    showCount: boolean;
    showCountOf: "ALL_CHILDREN" | "ALL_DESCENDANTS" | "LEAF_CHILDREN" | "LEAF_DESCENDANTS";
    showCountOnSearch: boolean;
    sortValueBy: string;
    tabIndex: number;
    valueConsistsOf: string;
    valueFormat: string;
    zIndex: string | number;
}>;
export default _sfc_main;
