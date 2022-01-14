import { TreeselectProps, Forest, LocalSearch, TreeSelectNode } from "@/components/Treeselect";
import { NO_PARENT_NODE, UNCHECKED } from "@/constants";
import { removeFromArray } from "@/utils";
import { computed, ComputedRef, ref } from "vue";
import { last as getLast } from "lodash";

export default function nodeValueOperation(
  props: TreeselectProps,
  emit: (event: "select" | "deselect" | "close" | "open", ...args: unknown[]) => void,
  forest: Forest,
  localSearch: LocalSearch,
  internalValue: ComputedRef<(string | number)[]>,
  closeMenu: () => void,
  resetSearchQuery: () => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getNode: (nodeId: TreeSelectNode["id"] | null) => TreeSelectNode | null,
  buildForestState: () => void,
  isSelected: (node?: TreeSelectNode | null | undefined) => boolean | null | undefined,
  traverseDescendantsBFS: (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => void,
  loadChildrenOptions: (parentNode: TreeSelectNode) => void,
  enhancedNormalizer: (node: TreeSelectNode) => TreeSelectNode,
  traverseDescendantsDFS: (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => void
) {
  const blurOnSelect = ref(false);
  const hasValue = computed(() => {
    return internalValue.value.length > 0;
  });
  const addValue = (node: TreeSelectNode) => {
    forest.selectedNodeIds.push(node.id);
    forest.selectedNodeMap[node.id] = true;
  };

  const removeValue = (node: TreeSelectNode) => {
    removeFromArray(forest.selectedNodeIds, node.id);
    delete forest.selectedNodeMap[node.id];
  };
  const removeLastValue = () => {
    if (!hasValue.value) return;
    if (!props.multiple) {
      return clear();
    }
    const lastValue = getLast(internalValue.value);
    if (lastValue != undefined) {
      const lastSelectedNode = getNode(lastValue);
      lastSelectedNode && select(lastSelectedNode); // deselect
    }
  };

  const clear = () => {
    if (hasValue.value) {
      if (!props.multiple || props.allowClearingDisabled) {
        forest.selectedNodeIds = [];
      } /* if (this.multiple && !this.allowClearingDisabled) */ else {
        forest.selectedNodeIds = forest.selectedNodeIds.filter((nodeId) => getNode(nodeId)?.isDisabled);
      }
      buildForestState();
    }
  };
  const _selectNode = (node: TreeSelectNode) => {
    if (!props.multiple || props.disableBranchNodes) {
      return addValue(node);
    }

    if (props.flat) {
      addValue(node);

      if (props.autoSelectAncestors) {
        node.ancestors?.forEach((ancestor) => {
          if (!isSelected(ancestor) && !ancestor.isDisabled) {
            addValue(ancestor);
          }
        });
      } else if (props.autoSelectDescendants) {
        traverseDescendantsBFS(node, (descendant) => {
          if (!isSelected(descendant) && !descendant.isDisabled) {
            addValue(descendant);
          }
        });
      }
      return;
    }
    const isFullyChecked =
      node.isLeaf ||
      /* node.isBranch && */ !node.hasDisabledDescendants ||
      /* node.isBranch && */ props.allowSelectingDisabledDescendants;
    if (isFullyChecked) {
      addValue(node);
    }

    if (node.isBranch) {
      traverseDescendantsBFS(node, (descendant) => {
        if (!descendant.isDisabled || props.allowSelectingDisabledDescendants) {
          addValue(descendant);
        }
      });
    }

    if (isFullyChecked) {
      let curr: TreeSelectNode | null = node;
      while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
        if (curr.children?.every(isSelected)) {
          addValue(curr);
        } else break;
      }
    }
  };
  const _deselectNode = (node: TreeSelectNode) => {
    if (props.disableBranchNodes) {
      return removeValue(node);
    }

    if (props.flat) {
      removeValue(node);

      if (props.autoDeselectAncestors) {
        node.ancestors?.forEach((ancestor) => {
          if (isSelected(ancestor) && !ancestor.isDisabled) {
            removeValue(ancestor);
          }
        });
      } else if (props.autoDeselectDescendants) {
        traverseDescendantsBFS(node, (descendant) => {
          if (isSelected(descendant) && !descendant.isDisabled) {
            removeValue(descendant);
          }
        });
      }
      return;
    }

    let hasUncheckedSomeDescendants = false;
    if (node.isBranch) {
      traverseDescendantsDFS(node, (descendant) => {
        if (!descendant.isDisabled || props.allowSelectingDisabledDescendants) {
          removeValue(descendant);
          hasUncheckedSomeDescendants = true;
        }
      });
    }

    if (
      node.isLeaf ||
      /* node.isBranch && */ hasUncheckedSomeDescendants ||
      /* node.isBranch && */ node.children?.length === 0
    ) {
      removeValue(node);

      let curr: TreeSelectNode | null = node;
      while ((curr = curr.parentNode) !== NO_PARENT_NODE) {
        if (isSelected(curr)) {
          removeValue(curr);
        } else break;
      }
    }
  };
  const select = (node: TreeSelectNode) => {
    if (props.disabled || node.isDisabled) {
      return;
    }

    if (!props.multiple) {
      clear();
    }

    const nextState = props.multiple && !props.flat ? forest.checkedStateMap[node.id] === UNCHECKED : !isSelected(node);

    if (nextState) {
      _selectNode(node);
    } else {
      _deselectNode(node);
    }

    buildForestState();

    if (nextState) {
      emit("select", node.raw, props.instanceId);
    } else {
      emit("deselect", node.raw, props.instanceId);
    }

    if (localSearch.active && nextState && (!props.multiple || props.clearOnSelect)) {
      resetSearchQuery();
    }

    if (!props.multiple && props.closeOnSelect) {
      closeMenu();

      // istanbul ignore else
      if (props.searchable) {
        blurOnSelect.value = true;
      }
    }
  };
  const shouldExpand = (node: TreeSelectNode) => {
    return localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
  };
  const toggleExpanded = (node: TreeSelectNode) => {
    let nextState;

    if (localSearch.active) {
      nextState = node.isExpandedOnSearch = !node.isExpandedOnSearch;
      if (nextState) node.showAllChildrenOnSearch = true;
    } else {
      nextState = node.isExpanded = !node.isExpanded;
    }
    if (nextState && !node.childrenStates.isLoaded) {
      loadChildrenOptions(node);
    }
  };
  const extractCheckedNodeIdsFromValue = () => {
    if (props.modelValue == null) return [];

    if (props.valueFormat === "id") {
      return props.multiple ? props.modelValue.slice() : [props.modelValue];
    }

    return (
      (props.multiple ? props.modelValue : [props.modelValue])
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((node: any) => enhancedNormalizer(node))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((node: any) => node.id)
    );
  };
  return {
    clear,
    hasValue,
    removeLastValue,
    select,
    shouldExpand,
    toggleExpanded,
    blurOnSelect,
    extractCheckedNodeIdsFromValue
  };
}
