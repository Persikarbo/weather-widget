import type { RendererElement } from "vue";

export const isValidComponent = (comp: RendererElement): boolean => comp && typeof comp.render === "function";
