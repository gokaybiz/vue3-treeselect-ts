import { TreeSelectNode } from '../components/symbol';
declare const _sfc_main: import("vue").DefineComponent<{
    node: {
        type: null;
        required: true;
    };
}, {
    props: {
        node: TreeSelectNode;
    };
    instance: {
        props: import('../components/symbol').TreeselectProps;
        hasValue: import("vue").ComputedRef<boolean>;
        internalValue: import("vue").ComputedRef<(string | number)[]>;
        menu: import('../components/symbol').Menu;
        trigger: import('../components/symbol').Trigger;
        getNode: (nodeId: string | number | null) => TreeSelectNode | null;
        clear: () => void;
        focusInput: () => void;
        toggleMenu: () => void;
        openMenu: () => void;
        getMenuDiv: () => HTMLElement | null;
        closeMenu: () => void;
        removeLastValue: () => void;
        select: (node: TreeSelectNode) => void;
        highlightLastOption: () => void;
        highlightFirstOption: () => void;
        shouldExpand: (node: TreeSelectNode) => any;
        setCurrentHighlightedOption: (node: TreeSelectNode, scroll?: boolean | undefined) => void;
        loadChildrenOptions: (parentNode: TreeSelectNode) => void;
        toggleExpanded: (node: TreeSelectNode) => void;
        highlightPrevOption: () => void;
        highlightNextOption: () => void;
        localSearch: import('../components/symbol').LocalSearch;
        getControlDiv: () => HTMLElement;
        getRemoteSearchEntry: () => import('../components/symbol').RemoteSearchValue;
        handleRemoteSearch: () => void;
        forest: import('../components/symbol').Forest;
        handleMouseDown: (evt: Event) => void;
        beforeListRenderer: import("vue").Slot | undefined;
        afterListRenderer: import("vue").Slot | undefined;
        customValueLabelRenderer: import("vue").Slot | undefined;
        customLabelRenderer: import("vue").Slot | undefined;
        isSelected: (node?: TreeSelectNode | null | undefined) => boolean | null | undefined;
        shouldShowOptionInMenu: (node: TreeSelectNode) => boolean;
        selectedNodes: import("vue").ComputedRef<TreeSelectNode[]>;
        rootOptionsStates: import('../components/symbol').RemoteSearchValue;
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
export default _sfc_main;
