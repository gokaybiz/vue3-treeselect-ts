import { TreeSelectNode, TreeselectProps, Forest } from '../components/symbol';
export default function NodeOperation(props: TreeselectProps, forest: Forest): {
    getNode: (nodeId: TreeSelectNode["id"] | null) => TreeSelectNode | null;
    enhancedNormalizer: (node: TreeSelectNode) => TreeSelectNode;
    traverseDescendantsBFS: (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => void;
    buildForestState: () => void;
    internalValue: import("vue").ComputedRef<(string | number)[]>;
    isSelected: (node?: TreeSelectNode | null | undefined) => boolean | null | undefined;
    getValue: () => any;
    selectedNodes: import("vue").ComputedRef<TreeSelectNode[]>;
    traverseAllNodesDFS: (callback: (node: TreeSelectNode) => void) => void;
    traverseDescendantsDFS: (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => void;
};
