<template>
  <div class="vue-treeselect__control" @mousedown.left.stop.prevent="instance.handleMouseDown">
    <SingleValue v-if="!instance.props.multiple" ref="value-container"></SingleValue>
    <MultiValue v-else ref="value-container"></MultiValue>
    <div
      v-if="shouldShowX"
      class="vue-treeselect__x-container"
      :title="instance.props.multiple ? instance.props.clearAllText : instance.props.clearValueText"
      @mousedown.left.stop.prevent="handleMouseDownOnX">
      <DeleteIcon class="vue-treeselect__x" />
    </div>
    <div
      v-if="shouldShowArrow"
      class="vue-treeselect__control-arrow-container"
      @mousedown.left.stop.prevent="handleMouseDownOnArrow">
      <ArrowIcon
        :class="{
          'vue-treeselect__control-arrow': true,
          'vue-treeselect__control-arrow--rotated': instance.menu.isOpen
        }" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
import isPromise from "is-promise";
import DeleteIcon from "@/components/icons/Delete.vue";
import ArrowIcon from "@/components/icons/Arrow.vue";
import MultiValue from "@/components/TreeselectMultiValue.vue";
import SingleValue from "@/components/TreeselectSingleValue.vue";

const instance = injectStrict(instanceKey);
const shouldShowX = computed(() => {
  return (
    instance.props.clearable &&
    !instance.props.disabled &&
    instance.hasValue.value &&
    ((instance.hasValue.value && instance.internalValue.value.some((id) => !instance.getNode(id)?.isDisabled)) ||
      instance.props.allowClearingDisabled)
  );
});
const shouldShowArrow = computed(() => {
  if (!instance.props.alwaysOpen) return true;
  // Even with `alwaysOpen: true`, sometimes the menu is still closed,
  // e.g. when the control is disabled.
  return !instance.menu.isOpen;
});
const handleMouseDownOnX = () => {
  const result = instance.props.beforeClearAll();
  const handler = (shouldClear?: boolean) => {
    if (shouldClear) instance.clear();
  };

  if (isPromise(result)) {
    // The handler will be called async.
    result.then(handler);
  } else {
    // Keep the same behavior here.
    setTimeout(() => handler(result), 0);
    // Also, note that IE9 requires:
    //   setTimeout(() => fn(...args), delay)
    // Instead of:
    //   setTimeout(fn, delay, ...args)
  }
};
const handleMouseDownOnArrow = () => {
  instance.focusInput();
  instance.toggleMenu();
};
</script>
