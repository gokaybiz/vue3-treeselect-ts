import { Menu, TreeselectProps } from "@/components/symbol";
import { nextTick, Ref } from "vue";

export default function menuOperation(
  props: TreeselectProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit: (event: "select" | "deselect" | "close" | "open", ...args: any[]) => void,
  menu: Menu,
  wrapper: Ref<HTMLDivElement | undefined>,
  loadRootOptions: () => void,
  resetHighlightedOptionWhenNecessary: (forceReset?: boolean) => void,
  getMenuDiv: () => HTMLElement | null,
  getValue: () => unknown,
  resetSearchQuery: () => void,
  blurInput: () => void
) {
  const openMenu = () => {
    if (props.disabled || menu.isOpen) {
      return;
    }
    menu.isOpen = true;
    nextTick(resetHighlightedOptionWhenNecessary);
    nextTick(restoreMenuScrollPosition);
    if (!props.options && !props.async) {
      loadRootOptions();
    }
    toggleClickOutsideEvent(true);
    emit("open", props.instanceId);
  };
  const closeMenu = () => {
    if (!menu.isOpen || (!props.disabled && props.alwaysOpen)) {
      return;
    }
    saveMenuScrollPosition();
    menu.isOpen = false;
    toggleClickOutsideEvent(false);
    resetSearchQuery();
    emit("close", getValue(), props.instanceId);
  };
  const toggleClickOutsideEvent = (enabled: boolean) => {
    if (enabled) {
      document.addEventListener("mousedown", handleClickOutside, false);
    } else {
      document.removeEventListener("mousedown", handleClickOutside, false);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickOutside = (evt: any) => {
    // istanbul ignore else
    if (wrapper.value && !wrapper.value?.contains(evt.target)) {
      blurInput();
      closeMenu();
    }
  };
  const restoreMenuScrollPosition = () => {
    const $menu = getMenuDiv();
    // istanbul ignore else
    if ($menu) {
      $menu.scrollTop = menu.lastScrollPosition;
    }
  };
  const saveMenuScrollPosition = () => {
    const $menu = getMenuDiv();
    // istanbul ignore else
    if ($menu) {
      menu.lastScrollPosition = $menu.scrollTop;
    }
  };
  const toggleMenu = () => {
    if (menu.isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  return { openMenu, toggleClickOutsideEvent, toggleMenu, closeMenu };
}
