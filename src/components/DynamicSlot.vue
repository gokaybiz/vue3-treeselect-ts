<script lang="tsx">
import { defineComponent, PropType, Slot } from "vue";
export default defineComponent({
  props: {
    slotFunction: { type: [Function] as PropType<Slot>, required: true },
    slotObject: {
      type: [Object],
      default: undefined
    }
  },
  render() {
    return this.slotObject ? this.slotFunction(this.slotObject) : this.slotFunction();
  }
});
</script>
