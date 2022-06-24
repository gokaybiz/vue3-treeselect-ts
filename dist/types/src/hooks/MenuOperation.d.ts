import { Menu, TreeselectProps } from '../components/symbol';
import { Ref } from "vue";
export default function menuOperation(props: TreeselectProps, emit: (event: "select" | "deselect" | "close" | "open", ...args: any[]) => void, menu: Menu, wrapper: Ref<HTMLDivElement | undefined>, loadRootOptions: () => void, resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void, getMenuDiv: () => HTMLElement | null, getValue: () => unknown, resetSearchQuery: () => void, blurInput: () => void): {
    openMenu: () => void;
    toggleClickOutsideEvent: (enabled: boolean) => void;
    toggleMenu: () => void;
    closeMenu: () => void;
};
