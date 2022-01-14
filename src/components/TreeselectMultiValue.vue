<script lang="ts" setup>
import MultiValueItem from "./TreeselectMultiValueItem.vue";
import ValueContainer from "./TreeselectControlValueContainer.vue";
import Input from "./TreeselectInput.vue";
import Placeholder from "./TreeselectPlaceholder.vue";
import { computed } from "vue";
import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
import { TreeSelectNode } from "@/components/symbol";

const instance = injectStrict(instanceKey);
const count = computed(() => {
  return instance.internalValue.value.length - instance.props.limit;
  //return instance.getInternalValue().length;
});
const nodes = computed(() => {
  return instance.internalValue.value
    .slice(0, instance.props.limit)
    .map(instance.getNode)
    .filter((node) => node != null) as TreeSelectNode[];
});
</script>

<template>
  <ValueContainer>
    <transition-group
      class="vue-treeselect__multi-value"
      tag="div"
      name="vue-treeselect__multi-value-item--transition"
      :appear="true">
      <MultiValueItem v-for="node in nodes" :key="`multi-value-item-${node.id}`" :node="node" />
    </transition-group>
    <div
      v-if="count > 0"
      key="exceed-limit-tip"
      class="vue-treeselect__limit-tip vue-treeselect-helper-zoom-effect-off">
      <span class="vue-treeselect__limit-tip-text">{{ instance.props.limitText(count) }}</span>
    </div>
    <Placeholder key="placeholder" />
    <Input ref="input" key="input" />
  </ValueContainer>
</template>
