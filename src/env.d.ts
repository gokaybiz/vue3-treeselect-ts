/// <reference types="vite/client" />

/* declare module "/Treeselect.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{ props: { a: string } }>;
  export default component;
} */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
