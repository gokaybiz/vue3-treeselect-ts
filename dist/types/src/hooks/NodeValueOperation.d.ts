import { TreeselectProps, Forest, LocalSearch, TreeSelectNode } from '../components/symbol';
import { ComputedRef } from "vue";
export default function nodeValueOperation(props: TreeselectProps, emit: (event: "select" | "deselect" | "close" | "open", ...args: unknown[]) => void, forest: Forest, localSearch: LocalSearch, internalValue: ComputedRef<(string | number)[]>, closeMenu: () => void, resetSearchQuery: () => void, getNode: (nodeId: TreeSelectNode["id"] | null) => TreeSelectNode | null, buildForestState: () => void, isSelected: (node?: TreeSelectNode | null | undefined) => boolean | null | undefined, traverseDescendantsBFS: (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => void, loadChildrenOptions: (parentNode: TreeSelectNode) => void, enhancedNormalizer: (node: TreeSelectNode) => TreeSelectNode, traverseDescendantsDFS: (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => void): {
    clear: () => void;
    hasValue: ComputedRef<boolean>;
    removeLastValue: () => void;
    select: (node: TreeSelectNode) => void;
    shouldExpand: (node: TreeSelectNode) => any;
    toggleExpanded: (node: TreeSelectNode) => void;
    blurOnSelect: import("vue").Ref<boolean>;
    extractCheckedNodeIdsFromValue: () => any;
};
