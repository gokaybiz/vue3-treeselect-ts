<script lang="ts" setup>
import { computed, PropType, toRefs } from "vue";
import DeleteIcon from "./icons/Delete.vue";
import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
import { TreeSelectNode } from "@/components/TreeSelect";
import DynamicSlot from "./DynamicSlot.vue";

const props = defineProps({
  node: {
    type: Object as PropType<TreeSelectNode>,
    required: true
  }
});

const { node } = toRefs(props);
const instance = injectStrict(instanceKey);
const itemClass = computed(() => {
  return {
    "vue-treeselect__multi-value-item": true,
    "vue-treeselect__multi-value-item-disabled": node.value.isDisabled,
    "vue-treeselect__multi-value-item-new": node.value.isNew
  };
});
const handleLeftMouseDown = () => {
  instance.select(node.value);
};
const customValueLabelRenderer = computed(() => {
  return instance.customValueLabelRenderer;
});
</script>

<template>
  <div class="vue-treeselect__multi-value-item-container">
    <div :class="itemClass" @mousedown.left="handleLeftMouseDown">
      <span class="vue-treeselect__multi-value-label">
        <DynamicSlot
          v-if="customValueLabelRenderer"
          :slot-function="customValueLabelRenderer"
          :slot-object="{ node }" />
        <template v-else>
          {{ node.label }}
        </template>
      </span>
      <span class="vue-treeselect__icon vue-treeselect__value-remove">
        <DeleteIcon />
      </span>
    </div>
  </div>
</template>
