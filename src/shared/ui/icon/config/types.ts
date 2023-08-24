import type { Mods } from "shared/lib";
import { IconSize } from "./constants";

export interface IconProps {
    id: string | undefined,
    size?: IconSize,
    mods?: Mods,
    extraClasses?: string[]
}