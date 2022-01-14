import { noop } from "lodash";

export const warning =
  process.env.NODE_ENV === "production"
    ? /* istanbul ignore next */ noop
    : function warning(checker: () => unknown, complainer: () => ConcatArray<string>) {
        if (!checker()) {
          const message = ["[Vue-Treeselect Warning]"].concat(complainer());
          // eslint-disable-next-line no-console
          console.error(...message);
        }
      };
