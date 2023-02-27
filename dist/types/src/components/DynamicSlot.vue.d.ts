import { PropType, Slot } from "vue";
declare const _default: import("vue").DefineComponent<{
    slotFunction: {
        type: PropType<Slot>;
        required: true;
    };
    slotObject: {
        type: ObjectConstructor[];
        default: undefined;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    slotFunction: {
        type: PropType<Slot>;
        required: true;
    };
    slotObject: {
        type: ObjectConstructor[];
        default: undefined;
    };
}>>, {
    slotObject: Record<string, any>;
}>;
export default _default;
