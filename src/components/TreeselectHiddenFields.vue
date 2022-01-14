<template>
  <template v-if="!flag">
    <input
      v-for="(stringifiedValue, i) in stringifiedValues"
      :key="`hidden-field-${i}`"
      type="hidden"
      :name="instance.props.name"
      :value="stringifiedValue" />
  </template>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { instance as instanceKey, injectStrict } from "@/components/ProductKey";
const instance = injectStrict(instanceKey);
const flag = computed(() => {
  return !instance.props.name || instance.props.disabled || !instance.hasValue.value;
});
const stringifiedValues = computed(() => {
  let fiedValues = instance.internalValue.value.map((value) => {
    if (typeof value === "string") return value;
    // istanbul ignore else
    if (value != null && !isNaN(value)) return JSON.stringify(value);
    // istanbul ignore next
    return "";
  });
  if (instance.props.multiple && instance.props.joinValues) {
    fiedValues = [fiedValues.join(instance.props.delimiter)];
  }
  return fiedValues;
});
</script>
