import {
  asyncOptionsStates,
  Forest,
  LocalSearch,
  RemoteSearchValue,
  TreeSelectNode,
  TreeSelectNodeId,
  TreeselectProps,
  Trigger
} from "@/components/Treeselect";
import { once } from "lodash";
import isPromise from "is-promise";
import {
  ALL,
  ALL_CHILDREN,
  ALL_DESCENDANTS,
  ALL_WITH_INDETERMINATE,
  ASYNC_SEARCH,
  BRANCH_PRIORITY,
  LEAF_CHILDREN,
  LEAF_DESCENDANTS,
  LEAF_PRIORITY,
  LOAD_CHILDREN_OPTIONS,
  LOAD_ROOT_OPTIONS,
  NO_PARENT_NODE
} from "@/constants";
import { ComputedRef, nextTick, reactive, watch } from "vue";
import { createMap, quickDiff, warning } from "@/utils";
import fuzzysearch from "fuzzysearch";
const getErrorMessage = (err: Error) => {
  return err.message || /* istanbul ignore next */ String(err);
};
function stringifyOptionPropValue(value: string | number | null) {
  if (typeof value === "string") {
    return value;
  }
  if (typeof value === "number") {
    return value.toString();
  }
  return "";
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function match(enableFuzzyMatch: boolean, needle: any, haystack: any) {
  return enableFuzzyMatch ? fuzzysearch(needle, haystack) : haystack.includes(needle);
}

export default function delayedLoad(
  props: TreeselectProps,
  forest: Forest,
  trigger: Trigger,
  internalValue: ComputedRef<(string | number)[]>,
  localSearch: LocalSearch,
  getNode: (nodeId: TreeSelectNodeId | null) => TreeSelectNode | null,
  traverseDescendantsBFS: (parentNode: TreeSelectNode, callback: (node: TreeSelectNode) => void) => void,
  resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void,
  enhancedNormalizer: (node: TreeSelectNode) => TreeSelectNode,
  buildForestState: () => void,
  traverseAllNodesDFS: (callback: (node: TreeSelectNode) => void) => void
) {
  const remoteSearch = createMap<{ [x: string]: RemoteSearchValue }>();
  const createAsyncOptionsStates = () => {
    return { ...asyncOptionsStates };
  };

  const rootOptionsStates = reactive(createAsyncOptionsStates());
  const callLoadOptionsProp = ({
    action,
    args,
    isPending,
    start,
    succeed,
    fail,
    end
  }: {
    action: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args?: any;
    isPending: () => boolean;
    start: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    succeed: (result?: any) => void;
    fail: (err: Error) => void;
    end: () => void;
  }) => {
    if (!props.loadOptions || isPending()) {
      return;
    }
    start();
    const callback = once((err?: Error, result?: unknown) => {
      if (err) {
        fail(err);
      } else {
        succeed(result);
      }
      end();
    });
    const result = props.loadOptions({
      instanceId: props.instanceId,
      action,
      ...args,
      callback
    });

    if (isPromise(result)) {
      result.then(
        () => {
          callback();
        },
        (err) => {
          callback(err);
        }
      );
    }
  };
  /*
   * 用于延时记载用
   * 加载根节点的设置
   */
  const loadRootOptions = () => {
    callLoadOptionsProp({
      action: LOAD_ROOT_OPTIONS,
      isPending: () => {
        return rootOptionsStates.isLoading;
      },
      start: () => {
        rootOptionsStates.isLoading = true;
        rootOptionsStates.loadingError = "";
      },
      succeed: () => {
        rootOptionsStates.isLoaded = true;
        // Wait for `options` being re-initialized.
        nextTick(() => {
          resetHighlightedOptionWhenNecessary(true);
        });
      },
      fail: (err: Error) => {
        rootOptionsStates.loadingError = getErrorMessage(err);
      },
      end: () => {
        rootOptionsStates.isLoading = false;
      }
    });
  };
  const getRemoteSearchEntry = () => {
    const { searchQuery } = trigger;
    const entry =
      remoteSearch[searchQuery] ||
      reactive({
        ...createAsyncOptionsStates(),
        options: []
      });

    // Vue doesn't support directly watching on objects.
    watch(
      () => entry.options,
      () => {
        // TODO: potential redundant re-initialization.
        if (trigger.searchQuery === searchQuery) initialize();
      },
      { deep: true }
    );

    if (searchQuery === "") {
      if (Array.isArray(props.defaultOptions)) {
        entry.options = props.defaultOptions;
        entry.isLoaded = true;
        return entry;
      } else if (props.defaultOptions !== true) {
        entry.isLoaded = true;
        return entry;
      }
    }

    if (!remoteSearch[searchQuery]) {
      // this.$ set(this.remoteSearch, searchQuery, entry)
      remoteSearch[searchQuery] = entry;
    }

    return entry;
  };
  const keepDataOfSelectedNodes = (prevNodeMap: { [x: TreeSelectNodeId]: TreeSelectNode }) => {
    // In case there is any selected node that is not present in the new `options` array.
    // It could be useful for async search mode.
    forest.selectedNodeIds.forEach((id) => {
      if (!prevNodeMap[id]) return;
      const node = {
        ...prevNodeMap[id],
        isFallbackNode: true
      };
      // this.$ set(this.forest.nodeMap, id, node)
      forest.nodeMap[id] = node;
    });
  };
  const checkDuplication = (node: TreeSelectNode) => {
    warning(
      () => !(node.id in forest.nodeMap && !forest.nodeMap[node.id].isFallbackNode),
      () =>
        `Detected duplicate presence of node id ${JSON.stringify(node.id)}. ` +
        `Their labels are "${forest.nodeMap[node.id].label}" and "${node.label}" respectively.`
    );
  };
  const verifyNodeShape = (node: TreeSelectNode) => {
    warning(
      () => !(node.children === undefined && node.isBranch === true),
      () =>
        "Are you meant to declare an unloaded branch node? " +
        "`isBranch: true` is no longer supported, please use `children: null` instead."
    );
  };
  const loadChildrenOptions = (parentNode: TreeSelectNode) => {
    // The options may be re-initialized anytime during the loading process.
    // So `parentNode` can be stale and we use `getNode()` to avoid that.

    const { id, raw } = parentNode;

    callLoadOptionsProp({
      action: LOAD_CHILDREN_OPTIONS,
      args: {
        // We always pass the raw node instead of the normalized node to any
        // callback provided by the user of this component.
        // Because the shape of the raw node is more likely to be closing to
        // what the back-end API service of the application needs.
        parentNode: raw
      },
      isPending: () => {
        return getNode(id)?.childrenStates.isLoading;
      },
      start: () => {
        const node = getNode(id);
        if (node) {
          node.childrenStates.isLoading = true;
          node.childrenStates.loadingError = "";
        }
      },
      succeed: () => {
        const node = getNode(id);
        if (node) {
          node.childrenStates.isLoaded = true;
        }
      },
      fail: (err: Error) => {
        const node = getNode(id);
        if (node) {
          node.childrenStates.loadingError = getErrorMessage(err);
        }
      },
      end: () => {
        const node = getNode(id);
        if (node) {
          node.childrenStates.isLoading = false;
        }
      }
    });
  };
  const fixSelectedNodeIds = (nodeIdListOfPrevValue: TreeSelectNodeId[]) => {
    let nextSelectedNodeIds: TreeSelectNodeId[] = [];

    // istanbul ignore else
    if (!props.multiple || props.flat || props.disableBranchNodes || props.valueConsistsOf === ALL) {
      nextSelectedNodeIds = nodeIdListOfPrevValue;
    } else if (props.valueConsistsOf === BRANCH_PRIORITY) {
      nodeIdListOfPrevValue.forEach((nodeId) => {
        nextSelectedNodeIds.push(nodeId);
        const node = getNode(nodeId);
        if (node?.isBranch)
          traverseDescendantsBFS(node, (descendant: TreeSelectNode) => {
            nextSelectedNodeIds.push(descendant.id);
          });
      });
    } else if (props.valueConsistsOf === LEAF_PRIORITY) {
      const map = createMap<{ [x: TreeSelectNodeId]: number | undefined }>();
      const queue = nodeIdListOfPrevValue.slice();
      while (queue.length) {
        const nodeId = queue.shift();
        const node = nodeId && getNode(nodeId);
        if (nodeId && node) {
          nextSelectedNodeIds.push(nodeId);
          if (node.isRootNode) continue;
          if (node.parentNode) {
            if (!(node.parentNode.id in map)) {
              map[node.parentNode.id] = node.parentNode.children?.length;
            }
            let parentNodeLength = map[node.parentNode.id];
            if (parentNodeLength && --parentNodeLength === 0) {
              queue.push(node.parentNode.id);
            }
          }
        }
      }
    } else if (props.valueConsistsOf === ALL_WITH_INDETERMINATE) {
      const map = createMap<{ [x: TreeSelectNodeId]: number | undefined }>();
      const queue = nodeIdListOfPrevValue.filter((nodeId) => {
        const node = getNode(nodeId);
        return node?.isLeaf || node?.children?.length === 0;
      });
      while (queue.length) {
        const nodeId = queue.shift();
        const node = nodeId && getNode(nodeId);
        if (nodeId && node) {
          nextSelectedNodeIds.push(nodeId);
          if (node.isRootNode) continue;
          if (node.parentNode) {
            if (!(node.parentNode.id in map)) {
              map[node.parentNode.id] = node.parentNode.children?.length;
            }
            let parentNodeLength = map[node.parentNode.id];
            if (parentNodeLength && --parentNodeLength === 0) {
              queue.push(node.parentNode.id);
            }
          }
        }
      }
    }

    const hasChanged = quickDiff(forest.selectedNodeIds, nextSelectedNodeIds);
    // If `nextSelectedNodeIds` doesn't actually differ from old `selectedNodeIds`,
    // we don't make the assignment to avoid triggering its watchers which may cause
    // unnecessary calculations.
    if (hasChanged) {
      forest.selectedNodeIds = nextSelectedNodeIds;
    }

    buildForestState();
  };
  const normalize = (
    parentNode: TreeSelectNode | null,
    nodes: TreeSelectNode[],
    prevNodeMap: { [x: TreeSelectNodeId]: TreeSelectNode }
  ) => {
    let normalizedOptions = nodes
      .map((node) => [enhancedNormalizer(node), node])
      .map(([node, raw], index) => {
        checkDuplication(node);
        verifyNodeShape(node);

        const { id, label, children, isDefaultExpanded } = node;
        const isRootNode = parentNode === NO_PARENT_NODE;
        const level = isRootNode ? 0 : parentNode.level + 1;
        const isBranch = Array.isArray(children) || children === null;
        const isLeaf = !isBranch;
        const isDisabled = !!node.isDisabled || (!props.flat && !isRootNode && parentNode.isDisabled);
        const isNew = !!node.isNew;
        const lowerCased = props.matchKeys.reduce(
          (prev, key) => ({
            ...prev,
            [key]: stringifyOptionPropValue(node[key]).toLocaleLowerCase()
          }),
          {} as { label: string }
        );
        const nestedSearchLabel = isRootNode ? lowerCased.label : parentNode.nestedSearchLabel + " " + lowerCased.label;

        // this.$ set(this.forest.nodeMap, id, createMap())
        forest.nodeMap[id] = createMap();

        const normalized = forest.nodeMap[id];

        normalized.id = id;
        normalized.label = label;
        normalized.level = level;
        normalized.ancestors = isRootNode ? [] : parentNode?.ancestors && [parentNode].concat(parentNode?.ancestors);
        normalized.index = (isRootNode ? [] : parentNode.index).concat(index);
        normalized.parentNode = parentNode;
        normalized.lowerCased = lowerCased;
        normalized.nestedSearchLabel = nestedSearchLabel;
        normalized.isDisabled = isDisabled;
        normalized.isNew = isNew;
        normalized.isMatched = false;
        normalized.isHighlighted = false;
        normalized.isBranch = isBranch;
        normalized.isLeaf = isLeaf;
        normalized.isRootNode = isRootNode;
        normalized.raw = raw;
        if (isBranch) {
          const isLoaded = Array.isArray(children);
          normalized.childrenStates = { ...createAsyncOptionsStates(), isLoaded };
          normalized.isExpanded =
            typeof isDefaultExpanded === "boolean" ? isDefaultExpanded : level < props.defaultExpandLevel;
          normalized.hasMatchedDescendants = false;
          normalized.hasDisabledDescendants = false;
          normalized.isExpandedOnSearch = false;
          normalized.showAllChildrenOnSearch = false;
          normalized.count = {
            [ALL_CHILDREN]: 0,
            [ALL_DESCENDANTS]: 0,
            [LEAF_CHILDREN]: 0,
            [LEAF_DESCENDANTS]: 0
          };
          normalized.children = isLoaded ? normalize(normalized, children, prevNodeMap) : [];
          if (isDefaultExpanded === true)
            normalized.ancestors?.forEach((ancestor) => {
              ancestor.isExpanded = true;
            });

          if (!isLoaded && typeof props.loadOptions !== "function") {
            warning(
              () => false,
              () => 'Unloaded branch node detected. "loadOptions" prop is required to load its children.'
            );
          } else if (!isLoaded && normalized.isExpanded) {
            loadChildrenOptions(normalized);
          }
        }

        normalized.ancestors?.forEach((ancestor) => ancestor.count[ALL_DESCENDANTS]++);
        if (isLeaf) normalized.ancestors?.forEach((ancestor) => ancestor.count[LEAF_DESCENDANTS]++);
        if (!isRootNode) {
          parentNode.count[ALL_CHILDREN] += 1;
          if (isLeaf) parentNode.count[LEAF_CHILDREN] += 1;
          if (isDisabled) parentNode.hasDisabledDescendants = true;
        }

        // Preserve previous states.
        if (prevNodeMap && prevNodeMap[id]) {
          const prev = prevNodeMap[id];

          normalized.isMatched = prev.isMatched;
          normalized.showAllChildrenOnSearch = prev.showAllChildrenOnSearch;
          normalized.isHighlighted = prev.isHighlighted;

          if (prev.isBranch && normalized.isBranch) {
            normalized.isExpanded = prev.isExpanded;
            normalized.isExpandedOnSearch = prev.isExpandedOnSearch;
            // #97
            // If `isLoaded` was true, but IS NOT now, we consider this branch node
            // to be reset to unloaded state by the user of this component.
            if (prev.childrenStates.isLoaded && !normalized.childrenStates.isLoaded) {
              // Make sure the node is collapsed, then the user can load its
              // children again (by expanding).
              normalized.isExpanded = false;
              // We have reset `childrenStates` and don't want to preserve states here.
            } else {
              normalized.childrenStates = { ...prev.childrenStates };
            }
          }
        }
        return normalized;
      });

    if (props.branchNodesFirst) {
      const branchNodes = normalizedOptions.filter((option) => option.isBranch);
      const leafNodes = normalizedOptions.filter((option) => option.isLeaf);
      normalizedOptions = branchNodes.concat(leafNodes);
    }
    return normalizedOptions;
  };
  const initialize = () => {
    const options = props.async ? getRemoteSearchEntry().options : (props.options as TreeSelectNode[]);

    if (Array.isArray(options)) {
      // In case we are re-initializing options, keep the old state tree temporarily.
      const prevNodeMap = forest.nodeMap;
      forest.nodeMap = createMap();
      keepDataOfSelectedNodes(prevNodeMap);
      forest.normalizedOptions = normalize(NO_PARENT_NODE, options, prevNodeMap);
      // Cases that need fixing `selectedNodeIds`:
      //   1) Children options of a checked node have been delayed loaded,
      //      we should also mark these children as checked. (multi-select mode)
      //   2) Root options have been delayed loaded, we need to initialize states
      //      of these nodes. (multi-select mode)
      //   3) Async search mode.
      fixSelectedNodeIds(internalValue.value);
    } else {
      forest.normalizedOptions = [];
    }
  };
  /**
   * 手动进行远程加载数据
   */
  const handleRemoteSearch = () => {
    const { searchQuery } = trigger;
    const entry = getRemoteSearchEntry();
    const done = () => {
      initialize();
      resetHighlightedOptionWhenNecessary(true);
    };

    if ((searchQuery === "" || props.cacheOptions) && entry.isLoaded) {
      return done();
    }

    callLoadOptionsProp({
      action: ASYNC_SEARCH,
      args: { searchQuery },
      isPending() {
        return entry.isLoading;
      },
      start: () => {
        entry.isLoading = true;
        entry.isLoaded = false;
        entry.loadingError = "";
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      succeed: (options: any) => {
        entry.isLoaded = true;
        entry.options = options;
        // When the request completes, the search query may have changed.
        // We only show these options if they are for the current search query.
        if (trigger.searchQuery === searchQuery) done();
      },
      fail: (err: Error) => {
        entry.loadingError = getErrorMessage(err);
      },
      end: () => {
        entry.isLoading = false;
      }
    });
  };
  const handleLocalSearch = () => {
    const { searchQuery } = trigger;
    const done = () => resetHighlightedOptionWhenNecessary(true);

    if (!searchQuery) {
      // Exit sync search mode.
      localSearch.active = false;
      return done();
    }

    // Enter sync search mode.
    localSearch.active = true;

    // Reset states.
    localSearch.noResults = true;
    traverseAllNodesDFS((node) => {
      if (node.isBranch) {
        node.isExpandedOnSearch = false;
        node.showAllChildrenOnSearch = false;
        node.isMatched = false;
        node.hasMatchedDescendants = false;

        localSearch.countMap[node.id] = {
          [ALL_CHILDREN]: 0,
          [ALL_DESCENDANTS]: 0,
          [LEAF_CHILDREN]: 0,
          [LEAF_DESCENDANTS]: 0
        };

        // this.$ set(this.localSearch.countMap, node.id, {
        //   [ALL_CHILDREN]: 0,
        //   [ALL_DESCENDANTS]: 0,
        //   [LEAF_CHILDREN]: 0,
        //   [LEAF_DESCENDANTS]: 0,
        // })
      }
    });

    const lowerCasedSearchQuery = searchQuery.trim().toLocaleLowerCase();
    const splitSearchQuery = lowerCasedSearchQuery.replace(/\s+/g, " ").split(" ");
    traverseAllNodesDFS((node) => {
      if (props.searchNested && splitSearchQuery.length > 1) {
        node.isMatched = splitSearchQuery.every((filterValue) => match(false, filterValue, node.nestedSearchLabel));
      } else {
        node.isMatched = props.matchKeys.some((matchKey) =>
          match(!props.disableFuzzyMatching, lowerCasedSearchQuery, node.lowerCased[matchKey])
        );
      }

      if (node.isMatched) {
        localSearch.noResults = false;
        node.ancestors?.forEach((ancestor) => localSearch.countMap[ancestor.id][ALL_DESCENDANTS]++);
        if (node.isLeaf) {
          node.ancestors?.forEach((ancestor) => localSearch.countMap[ancestor.id][LEAF_DESCENDANTS]++);
        }
        if (node.parentNode !== NO_PARENT_NODE) {
          localSearch.countMap[node.parentNode.id][ALL_CHILDREN] += 1;
          // istanbul ignore else
          if (node.isLeaf) {
            localSearch.countMap[node.parentNode.id][LEAF_CHILDREN] += 1;
          }
        }
      }

      if ((node.isMatched || (node.isBranch && node.isExpandedOnSearch)) && node.parentNode !== NO_PARENT_NODE) {
        node.parentNode.isExpandedOnSearch = true;
        node.parentNode.hasMatchedDescendants = true;
      }
    });

    done();
  };
  return {
    handleRemoteSearch,
    loadRootOptions,
    loadChildrenOptions,
    getRemoteSearchEntry,
    initialize,
    rootOptionsStates,
    fixSelectedNodeIds,
    handleLocalSearch
  };
}
