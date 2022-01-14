<script lang="ts" setup>
import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
import { computed } from "vue";

const instance = injectStrict(instanceKey);
const placeholderClass = computed(() => {
  return {
    "vue-treeselect__placeholder": true,
    "vue-treeselect-helper-zoom-effect-off": true,
    "vue-treeselect-helper-hide": instance.hasValue.value || instance.trigger.searchQuery
  };
});
</script>
<template>
  <div :class="placeholderClass">{{ instance.props.placeholder }}</div>
</template>
