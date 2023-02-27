<script lang="ts" setup>
import { UNCHECKED, INDETERMINATE, CHECKED } from "../constants";
import Tip from "./TreeselectTip.vue";
import ArrowIcon from "./icons/Arrow.vue";
import { Transition, computed } from "vue";
import DynamicSlot from "./DynamicSlot.vue";

import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
import { TreeSelectNode } from "@/components/symbol";

const props = defineProps<{
  node: TreeSelectNode;
}>();

const instance = injectStrict(instanceKey);
const shouldExpand = computed(() => {
  return props.node.isBranch && instance.shouldExpand(props.node);
});
const shouldShow = computed(() => {
  return instance.shouldShowOptionInMenu(props.node);
});
const shouldFlattenOptions = computed(() => {
  return instance.localSearch.active && instance.props.flattenSearchResults;
});
const hasBranchNodes = computed(() => {
  return instance.forest.normalizedOptions.some((rootNode: TreeSelectNode) => rootNode.isBranch);
});
const indentLevel = computed(() => {
  return shouldFlattenOptions.value ? 0 : props.node.level;
});

const showCountOnSearchComputed = computed(() => {
  // Vue doesn't allow setting default prop value based on another prop value.
  // So use computed property as a workaround.
  // https://github.com/vuejs/vue/issues/6358
  return instance.props.showCountOnSearch ? instance.props.showCountOnSearch : instance.props.showCount;
});

const handleMouseEnterOption = () => {
  instance.setCurrentHighlightedOption(props.node, false);
};

const handleMouseDownOnArrow = () => {
  instance.toggleExpanded(props.node);
};

const handleMouseDownOnLabelContainer = () => {
  if (props.node.isBranch && instance.props.disableBranchNodes) {
    instance.toggleExpanded(props.node);
  } else {
    instance.select(props.node);
  }
};
const handleMouseDownOnRetry = () => {
  instance.loadChildrenOptions(props.node);
};
const listItemClass = computed(() => {
  return {
    "vue-treeselect__list-item": true,
    [`vue-treeselect__indent-level-${indentLevel.value}`]: true
  };
});
const optionClass = computed(() => {
  return {
    "vue-treeselect__option": true,
    "vue-treeselect__option--disabled": props.node.isDisabled,
    "vue-treeselect__option--selected": instance.isSelected(props.node),
    "vue-treeselect__option--highlight": props.node.isHighlighted,
    "vue-treeselect__option--matched": instance.localSearch.active && props.node.isMatched,
    "vue-treeselect__option--hide": !shouldShow.value
  };
});
const checkedState = computed(() => {
  return instance.forest.checkedStateMap[props.node.id];
});
const checkboxClass = computed(() => {
  return {
    "vue-treeselect__checkbox": true,
    "vue-treeselect__checkbox--checked": checkedState.value === CHECKED,
    "vue-treeselect__checkbox--indeterminate": checkedState.value === INDETERMINATE,
    "vue-treeselect__checkbox--unchecked": checkedState.value === UNCHECKED,
    "vue-treeselect__checkbox--disabled": props.node.isDisabled
  };
});
// label
const shouldShowCount = computed(() => {
  return props.node.isBranch && (instance.localSearch.active ? showCountOnSearchComputed : instance.props.showCount);
});
const count = computed(() => {
  return shouldShowCount.value
    ? instance.localSearch.active
      ? instance.localSearch.countMap[props.node.id][instance.props.showCountOf]
      : props.node.count[instance.props.showCountOf]
    : NaN;
});
const customLabelRenderer = computed(() => {
  return instance.customLabelRenderer;
});
</script>
<template>
  <div :class="listItemClass">
    <div :class="optionClass" :data-id="node.id" @mouseenter.self="handleMouseEnterOption">
      <div
        v-if="!(shouldFlattenOptions && shouldShow) && node.isBranch"
        class="vue-treeselect__option-arrow-container"
        @mousedown.left.stop.prevent="handleMouseDownOnArrow">
        <Transition name="vue-treeselect__option-arrow--prepare" :appear="true">
          <ArrowIcon
            :class="{
              'vue-treeselect__option-arrow': true,
              'vue-treeselect__option-arrow--rotated': shouldExpand
            }" />
        </Transition>
      </div>
      <div v-else-if="hasBranchNodes" class="vue-treeselect__option-arrow-placeholder"> &nbsp; </div>
      <div class="vue-treeselect__label-container" @mousedown.left.stop.prevent="handleMouseDownOnLabelContainer">
        <div
          v-if="instance.props.multiple && !(instance.props.disableBranchNodes && node.isBranch)"
          class="vue-treeselect__checkbox-container">
          <span :class="checkboxClass">
            <span class="vue-treeselect__check-mark" />
            <span class="vue-treeselect__minus-mark" />
          </span>
        </div>
        <DynamicSlot
          v-if="customLabelRenderer"
          :slot-function="customLabelRenderer"
          :slot-object="{
            node,
            shouldShowCount,
            count,
            labelClassName: 'vue-treeselect__label',
            countClassName: 'vue-treeselect__count'
          }" />
        <label v-else class="vue-treeselect__label">
          {{ node.label }}
          <span v-if="shouldShowCount" class="vue-treeselect__count">{{ count }}</span>
        </label>
      </div>
    </div>
    <Transition v-if="node.isBranch" name="vue-treeselect__list--transition">
      <div v-if="shouldExpand" class="vue-treeselect__list">
        <template v-if="node.childrenStates.isLoaded">
          <treeselect-option v-for="childNode in node.children" :key="childNode.id" :node="childNode" />
        </template>
        <Tip v-if="!(!node.childrenStates.isLoaded || node.children?.length)" type="no-children" icon="warning">
          {{ instance.props.noChildrenText }}
        </Tip>
        <Tip v-if="node.childrenStates.isLoading" type="loading" icon="loader">{{ instance.props.loadingText }}</Tip>
        <Tip v-if="node.childrenStates.loadingError" type="error" icon="error">
          {{ node.childrenStates.loadingError }}
          <a
            class="vue-treeselect__retry"
            title="{instance.retryTitle}"
            @mousedown.left.stop.prevent="handleMouseDownOnRetry">
            {{ instance.props.retryText }}
          </a>
        </Tip>
      </div>
    </Transition>
  </div>
</template>
