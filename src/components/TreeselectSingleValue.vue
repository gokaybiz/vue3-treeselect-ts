<script lang="ts" setup>
import Input from "./TreeselectInput.vue";
import ValueContainer from "./TreeselectControlValueContainer.vue";
import Placeholder from "./TreeselectPlaceholder.vue";
import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
import DynamicSlot from "./DynamicSlot.vue";
import { computed } from "vue";

const instance = injectStrict(instanceKey);
const shouldShowValue = computed(() => {
  return instance.hasValue.value && !instance.trigger.searchQuery;
});
const customValueLabelRenderer = computed(() => {
  return instance.customValueLabelRenderer;
});
const node = computed(() => {
  return instance.selectedNodes.value[0];
});
</script>
<template>
  <ValueContainer>
    <div v-if="shouldShowValue" class="vue-treeselect__single-value">
      <DynamicSlot v-if="customValueLabelRenderer" :slot-function="customValueLabelRenderer" :slot-object="{ node }" />
      <template v-else>{{ node.label }}</template>
    </div>
    <Placeholder />
    <Input ref="input" />
  </ValueContainer>
</template>
