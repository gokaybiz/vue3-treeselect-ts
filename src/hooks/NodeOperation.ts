import {
  TreeSelectNode,
  TreeselectProps,
  Forest,
  TreeSelectNodeId,
  traverseAllNodesByIndex
} from "@/components/symbol";
import {
  ALL,
  ALL_WITH_INDETERMINATE,
  BRANCH_PRIORITY,
  CHECKED,
  INDETERMINATE,
  INDEX,
  LEAF_PRIORITY,
  LEVEL,
  NO_PARENT_NODE,
  UNCHECKED
} from "@/constants";
import {createMap, warning} from "@/utils";
import {computed} from "vue";

function sortValueByLevel(a: TreeSelectNode, b: TreeSelectNode) {
  if (typeof a.level != "undefined" && typeof b.level != "undefined") {
    return a.level === b.level ? sortValueByIndex(a, b) : a.level - b.level;
  }
  return -1;
}

function sortValueByIndex(a: TreeSelectNode, b: TreeSelectNode) {
  let i = 0;
  do {
    if (!a.level || !b.level) return -1;
    if (a?.level < i) {
      return -1;
    }
    if (b?.level < i) {
      return 1;
    }
    if (a.index != undefined && b.index != undefined && a.index[i] !== b.index[i]) {
      return a?.index?.[i] - b?.index?.[i];
    }
    i++;
    // eslint-disable-next-line no-constant-condition
  } while (true);
}

export default function NodeOperation(props: TreeselectProps, forest: Forest) {
  const selectedNodes = computed(() => {
    const nodes = forest.selectedNodeIds.map(getNode);
    const notNullNodes = nodes.filter((el) => el !== null) as TreeSelectNode[];
    return notNullNodes;
  });
  const internalValue = computed(() => {
    let internalValue: TreeSelectNode["id"][] = [];

    // istanbul ignore else
    if (!props.multiple || props.flat || props.disableBranchNodes || props.valueConsistsOf === ALL) {
      internalValue = forest.selectedNodeIds.slice();
    } else if (props.valueConsistsOf === BRANCH_PRIORITY) {
      internalValue = forest.selectedNodeIds.filter((id) => {
        const node = getNode(id);
        if (node?.isRootNode) return true;
        return !isSelected(node?.parentNode);
      });
    } else if (props.valueConsistsOf === LEAF_PRIORITY) {
      internalValue = forest.selectedNodeIds.filter((id) => {
        const node = getNode(id);
        if (node?.isLeaf) return true;
        return node?.children?.length === 0;
      });
    } else if (props.valueConsistsOf === ALL_WITH_INDETERMINATE) {
      const indeterminateNodeIds = new Array<TreeSelectNode["id"]>();
      internalValue = forest.selectedNodeIds.slice();
      selectedNodes.value.forEach((selectedNode) => {
        selectedNode.ancestors?.forEach((ancestor) => {
          if (indeterminateNodeIds.includes(ancestor.id)) return;
          if (internalValue.includes(ancestor.id)) return;
          indeterminateNodeIds.push(ancestor.id);
        });
      });
      internalValue.push(...indeterminateNodeIds);
    }

    if (props.sortValueBy === LEVEL) {
      internalValue.sort((a, b) => {
        const nodeA = getNode(a);
        const nodeB = getNode(b);
        if (nodeA && nodeB) {
          return sortValueByLevel(nodeA, nodeB);
        } else {
          return 0;
        }
      });
    } else if (props.sortValueBy === INDEX) {
      internalValue.sort((a, b) => {
        const nodeA = getNode(a);
        const nodeB = getNode(b);
        if (nodeA && nodeB) {
          return sortValueByIndex(nodeA, nodeB);
        } else {
          return 0;
        }
      });
    }

    return internalValue;
  });
  const getValue = () => {
    if (props.valueFormat === "id") {
      return props.multiple ? internalValue.value.slice() : internalValue.value[0];
    }
    const rawNodes = internalValue.value.map((id: TreeSelectNode["id"]) => getNode(id)?.raw);
    return props.multiple ? rawNodes : rawNodes[0];
  };
  /**
   * 根据节点主键获取节点数据,如果主键为null则返回null,如果节点不存在就创建一个失败节点返回
   * @param nodeId 节点主键
   * @returns 节点数据
   */
  const getNode = (nodeId: TreeSelectNode["id"] | null) => {
    warning(
      () => nodeId != null,
      () => `Invalid node id: ${nodeId}`
    );

    if (nodeId == null) return null;

    return nodeId in forest.nodeMap ? forest.nodeMap[nodeId] : createFallbackNode(nodeId);
  };
  const createFallbackNode = (id: TreeSelectNode["id"]) => {
    // In case there is a default selected node that is not loaded into the tree yet,
    // we create a fallback node to keep the component working.
    // When the real data is loaded, we'll override this fake node.

    const raw = extractNodeFromValue(id);
    const label = enhancedNormalizer(raw).label || `${id} (unknown)`;
    const fallbackNode: TreeSelectNode = {
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

    return (forest.nodeMap[id] = fallbackNode);
  };
  const extractNodeFromValue = (id: TreeSelectNode["id"]) => {
    const defaultNode = {id};

    if (props.valueFormat === "id") {
      return defaultNode;
    }

    const valueArray = props.multiple
      ? Array.isArray(props.modelValue)
        ? props.modelValue
        : []
      : props.modelValue
        ? [props.modelValue]
        : [];
    const matched = valueArray.find((value) => {
      return enhancedNormalizer(value).id === id;
    });
    return matched || defaultNode;
  };

  const enhancedNormalizer = (node: TreeSelectNode) => {
    const normalizer = props.normalizer?.(node, props.instanceId.toString());
    return normalizer
      ? {
        ...node,
        ...normalizer
      }
      : node;
  };

  const traverseDescendantsBFS = (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => {
    // istanbul ignore if
    if (!parentNode.isBranch) return;
    const queue = parentNode?.children?.slice();
    while (queue?.length) {
      const currNode = queue[0];
      if (currNode.isBranch && currNode.children) queue.push(...currNode.children);
      callback(currNode);
      queue.shift();
    }
  };

  const isSelected = (node?: TreeSelectNode | null) => {
    // whether a node is selected (single-select mode) or fully-checked (multi-select mode)
    return node && forest.selectedNodeMap[node.id] === true;
  };
  const buildForestState = () => {
    const selectedNodeMap = createMap<{ [x: TreeSelectNodeId]: boolean }>();
    forest.selectedNodeIds.forEach((selectedNodeId) => {
      selectedNodeMap[selectedNodeId] = true;
    });
    forest.selectedNodeMap = selectedNodeMap;

    const checkedStateMap = createMap<{ [x: TreeSelectNodeId]: 0 | 1 | 2 }>();
    if (props.multiple) {
      traverseAllNodesByIndex((node: TreeSelectNode) => {
        checkedStateMap[node.id] = UNCHECKED;
      }, forest.normalizedOptions);

      selectedNodes.value.forEach((selectedNode: TreeSelectNode) => {
        checkedStateMap[selectedNode.id] = CHECKED;

        if (!props.flat && !props.disableBranchNodes) {
          selectedNode.ancestors?.forEach((ancestorNode) => {
            if (!isSelected(ancestorNode)) {
              checkedStateMap[ancestorNode.id] = INDETERMINATE;
            }
          });
        }
      });
    }
    forest.checkedStateMap = checkedStateMap;
  };

  const traverseAllNodesDFS = (callback: (node: TreeSelectNode) => void) => {
    forest.normalizedOptions.forEach((rootNode) => {
      // deep-level node first
      traverseDescendantsDFS(rootNode, callback);
      callback(rootNode);
    });
  };
  const traverseDescendantsDFS = (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => {
    if (!parentNode.isBranch) return;

      if (Array.isArray(parentNode?.children)) {
        const stack = [...parentNode.children];
        while (stack.length > 0) {
          const node = stack.pop();
          if (node?.isBranch && Array.isArray(node?.children)) {
            stack.push(...node.children);
          }
          if (node) {
            callback(node);
          }
        }
      }
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
