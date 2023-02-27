import { PropType } from "vue";
import { TreeSelectNode } from '../components/symbol';
declare const _sfc_main: import("vue").DefineComponent<{
    node: {
        type: PropType<TreeSelectNode>;
        required: true;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        node: {
            type: PropType<TreeSelectNode>;
            required: true;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    node: import("vue").Ref<TreeSelectNode>;
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
            type: PropType<import("vue").Slot>;
            required: true;
        };
        slotObject: {
            type: ObjectConstructor[];
            default: undefined;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        slotFunction: {
            type: PropType<import("vue").Slot>;
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
        type: PropType<TreeSelectNode>;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
