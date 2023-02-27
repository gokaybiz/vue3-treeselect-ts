import { Forest, LocalSearch, Menu, TreeSelectNode, TreeselectProps } from '../components/symbol';
export default function highlightOption(props: TreeselectProps, forest: Forest, localSearch: LocalSearch, menu: Menu, getNode: (nodeId: TreeSelectNode["id"] | null) => TreeSelectNode | null, getMenuDiv: () => HTMLElement | null): {
    resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void;
    highlightLastOption: () => void;
    highlightFirstOption: () => void;
    setCurrentHighlightedOption: (node: TreeSelectNode, scroll?: boolean) => void;
    highlightPrevOption: () => void;
    highlightNextOption: () => void;
    shouldShowOptionInMenu: (node: TreeSelectNode) => boolean;
};
