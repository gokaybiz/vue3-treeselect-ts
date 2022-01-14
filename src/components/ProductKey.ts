import { ComputedRef, inject, InjectionKey, Slot } from "vue";
import { Forest, LocalSearch, Menu, RemoteSearchValue, TreeSelectNode, TreeselectProps, Trigger } from "./Treeselect";
type InjectionType = {
  props: TreeselectProps;
  hasValue: ComputedRef<boolean>;
  internalValue: ComputedRef<(string | number)[]>;
  menu: Menu;
  trigger: Trigger;
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
  setCurrentHighlightedOption: (node: TreeSelectNode, scroll?: boolean) => void;
  loadChildrenOptions: (parentNode: TreeSelectNode) => void;
  toggleExpanded: (node: TreeSelectNode) => void;
  highlightPrevOption: () => void;
  highlightNextOption: () => void;
  localSearch: LocalSearch;
  getControlDiv: () => HTMLElement;
  getRemoteSearchEntry: () => {
    isLoaded: boolean;
    isLoading: boolean;
    loadingError: string;
    options: boolean | TreeSelectNode[];
  };
  handleRemoteSearch: () => void;
  forest: Forest;
  handleMouseDown: (evt: Event) => void;
  beforeListRenderer: Slot | undefined;
  afterListRenderer: Slot | undefined;
  customValueLabelRenderer: Slot | undefined;
  customLabelRenderer: Slot | undefined;
  isSelected: (node?: TreeSelectNode | null | undefined) => boolean | null | undefined;
  shouldShowOptionInMenu: (node: TreeSelectNode) => boolean;
  selectedNodes: ComputedRef<TreeSelectNode[]>;
  rootOptionsStates: RemoteSearchValue;
  loadRootOptions: () => void;
};
export const instance: InjectionKey<InjectionType> = Symbol("instance");
export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback);
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`);
  }
  return resolved;
}
