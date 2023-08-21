import type { SVGAttributes } from "vue/dist/vue";
import type { Mods } from "shared/lib";

export enum IconSize {
    XS = "sizeXS",
    S = "sizeS",
    M = "sizeM",
    L = "sizeL",
    XL = "sizeXL",
    XXL = "sizeXXL",
}

export interface IconProps extends SVGAttributes {
    id: string | undefined,
    size: IconSize,
    extraClasses?: Mods
}