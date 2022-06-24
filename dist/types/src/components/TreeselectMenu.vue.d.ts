import { CSSProperties } from "vue";
declare const _sfc_main: import("vue").DefineComponent<{}, {
    instance: {
        props: import("./symbol").TreeselectProps;
        hasValue: import("vue").ComputedRef<boolean>;
        internalValue: import("vue").ComputedRef<(string | number)[]>;
        menu: import("./symbol").Menu;
        trigger: import("./symbol").Trigger;
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
        localSearch: import("./symbol").LocalSearch;
        getControlDiv: () => HTMLElement;
        getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
        handleRemoteSearch: () => void;
        forest: import("./symbol").Forest;
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
    menuContainerStyle: import("vue").ComputedRef<"" | CSSProperties>;
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
            menu: import("./symbol").Menu;
            trigger: import("./symbol").Trigger;
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
            localSearch: import("./symbol").LocalSearch;
            getControlDiv: () => HTMLElement;
            getRemoteSearchEntry: () => import("./symbol").RemoteSearchValue;
            handleRemoteSearch: () => void;
            forest: import("./symbol").Forest;
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
export default _sfc_main;
