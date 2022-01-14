import { TreeselectProps } from "@/components/symbol";
import { warning } from "@/utils";
import { get } from "lodash";
/**
 * 验证并返回props
 * @returns props
 */
export const verifyProps = (props: TreeselectProps) => {
  warning(
    () => (props.async ? props.searchable : true),
    () => 'For async search mode, the value of "searchable" prop must be true.'
  );

  if (props.options == null && !props.loadOptions) {
    warning(
      () => false,
      () => 'Are you meant to dynamically load options? You need to use "loadOptions" prop.'
    );
  }

  if (props.flat) {
    warning(
      () => props.multiple,
      () => 'You are using flat mode. But you forgot to add "multiple=true"?'
    );
  }

  if (!props.flat) {
    const propNames = [
      "autoSelectAncestors",
      "autoSelectDescendants",
      "autoDeselectAncestors",
      "autoDeselectDescendants"
    ];
    propNames.forEach((propName) => {
      warning(
        () => !get(props, propName),
        () => `"${propName}" only applies to flat mode.`
      );
    });
  }
};
