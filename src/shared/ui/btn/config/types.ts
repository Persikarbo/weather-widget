import type { IconProps } from "shared/ui/icon";
import type { ComponentProps } from "shared/types";

export interface BtnProps extends ComponentProps {
    icon?: IconProps["id"];
    iconSize?: IconProps["size"];
    label?: string;
}