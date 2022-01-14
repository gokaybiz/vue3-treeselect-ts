import { computed, nextTick } from "vue";
import {
  Forest,
  LocalSearch,
  Menu,
  traverseAllNodesByIndex,
  TreeSelectNode,
  TreeselectProps
} from "@/components/symbol";
import { scrollIntoView } from "@/utils";
import { last as getLast } from "lodash";

export default function highlightOption(
  props: TreeselectProps,
  forest: Forest,
  localSearch: LocalSearch,
  menu: Menu,
  getNode: (nodeId: TreeSelectNode["id"] | null) => TreeSelectNode | null,
  getMenuDiv: () => HTMLElement | null
) {
  const hasVisibleOptions = computed(() => {
    return visibleOptionIds.value.length !== 0;
  });
  /**
   * 搜索结果中是否应包含选项
   */
  const shouldOptionBeIncludedInSearchResult = (node: TreeSelectNode) => {
    // 1) This option is matched.
    if (node.isMatched) return true;
    // 2) This option is not matched, but has matched descendant(s).
    if (node.isBranch && node.hasMatchedDescendants && !props.flattenSearchResults) return true;
    // 3) This option's parent has no matched descendants,
    //    but after being expanded, all its children should be shown.
    if (!node.isRootNode && node.parentNode?.showAllChildrenOnSearch) return true;
    // 4) The default case.
    return false;
  };
  const visibleOptionIds = computed(() => {
    const visibleOptionIds: TreeSelectNode["id"][] = [];

    const shouldExpand = (node: TreeSelectNode) => {
      return localSearch.active ? node.isExpandedOnSearch : node.isExpanded;
    };

    // TODO: 分支返回值问题
    traverseAllNodesByIndex((node: TreeSelectNode) => {
      if (!localSearch.active || shouldOptionBeIncludedInSearchResult(node)) {
        visibleOptionIds.push(node.id);
      }
      // Skip the traversal of descendants of a branch node if it's not expanded.
      if (node.isBranch && !shouldExpand(node)) {
        return false;
      }
      return true;
    }, forest.normalizedOptions);

    return visibleOptionIds;
  });
  const highlightFirstOption = () => {
    if (!hasVisibleOptions.value) return;
    const first = visibleOptionIds.value[0];
    const node = getNode(first);
    if (node) {
      setCurrentHighlightedOption(node);
    }
  };
  const highlightPrevOption = () => {
    if (!hasVisibleOptions.value) return;
    if (menu.current) {
      const prev = visibleOptionIds.value.indexOf(menu.current) - 1;
      if (prev === -1) return highlightLastOption();
      const prevNode = getNode(visibleOptionIds.value[prev]);
      prevNode && setCurrentHighlightedOption(prevNode);
    }
  };
  const highlightNextOption = () => {
    if (!hasVisibleOptions.value) return;
    if (menu.current) {
      const next = visibleOptionIds.value.indexOf(menu.current) + 1;
      if (next === visibleOptionIds.value.length) return highlightFirstOption();
      const nextNode = getNode(visibleOptionIds.value[next]);
      nextNode && setCurrentHighlightedOption(nextNode);
    }
  };
  const highlightLastOption = () => {
    if (!hasVisibleOptions.value) return;

    const last = getLast(visibleOptionIds.value);
    if (last != undefined) {
      const lastNode = getNode(last);
      lastNode && setCurrentHighlightedOption(lastNode);
    }
  };
  const shouldShowOptionInMenu = (node: TreeSelectNode) => {
    if (localSearch.active && !shouldOptionBeIncludedInSearchResult(node)) {
      return false;
    }
    return true;
  };
  /**
   * 重置高亮节点
   * @param forceReset
   */
  const resetHighlightedOptionWhenNecessary = (forceReset = false) => {
    const { current } = menu;
    const node = current && getNode(current);
    if (forceReset || current == null || !(current in forest.nodeMap) || (node && !shouldShowOptionInMenu(node))) {
      highlightFirstOption();
    }
  };

  const setCurrentHighlightedOption = (node: TreeSelectNode, scroll = true) => {
    const prev = menu.current;
    if (prev != null && prev in forest.nodeMap) {
      forest.nodeMap[prev].isHighlighted = false;
    }

    menu.current = node.id;
    node.isHighlighted = true;

    if (menu.isOpen && scroll) {
      const scrollToOption = () => {
        const $menu = getMenuDiv();
        const $option = $menu?.querySelector<HTMLElement>(`.vue-treeselect__option[data-id="${node.id}"]`);
        if ($option && $menu) {
          scrollIntoView($menu, $option);
        }
      };

      // In case `openMenu()` is just called and the menu is not rendered yet.
      if (getMenuDiv()) {
        scrollToOption();
      } else {
        // istanbul ignore next
        nextTick(scrollToOption);
      }
    }
  };
  return {
    resetHighlightedOptionWhenNecessary,
    highlightLastOption,
    highlightFirstOption,
    setCurrentHighlightedOption,
    highlightPrevOption,
    highlightNextOption,
    shouldShowOptionInMenu
  };
}
