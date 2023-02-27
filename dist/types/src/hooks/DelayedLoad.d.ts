import { Forest, LocalSearch, RemoteSearchValue, TreeSelectNode, TreeSelectNodeId, TreeselectProps, Trigger } from '../components/symbol';
import { ComputedRef } from "vue";
export default function delayedLoad(props: TreeselectProps, forest: Forest, trigger: Trigger, internalValue: ComputedRef<(string | number)[]>, localSearch: LocalSearch, getNode: (nodeId: TreeSelectNodeId | null) => TreeSelectNode | null, traverseDescendantsBFS: (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => void, resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void, enhancedNormalizer: (node: TreeSelectNode) => TreeSelectNode, buildForestState: () => void, traverseAllNodesDFS: (callback: (node: TreeSelectNode) => void) => void): {
    handleRemoteSearch: () => void;
    loadRootOptions: () => void;
    loadChildrenOptions: (parentNode: TreeSelectNode) => void;
    getRemoteSearchEntry: () => RemoteSearchValue;
    initialize: () => void;
    rootOptionsStates: {
        isLoaded: boolean;
        isLoading: boolean;
        loadingError: string;
    };
    fixSelectedNodeIds: (nodeIdListOfPrevValue: TreeSelectNodeId[]) => void;
    handleLocalSearch: () => void;
};
