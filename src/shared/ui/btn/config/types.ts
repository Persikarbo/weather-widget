import type { Mods } from "shared/lib";
import type { IconProps } from "shared/ui/icon";

export interface BtnProps {
    mods?: Mods,
    extraClasses?: string[],
    icon?: IconProps["id"],
    iconSize?: IconProps["size"],
    label?: string
}