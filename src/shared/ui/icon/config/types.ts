import { IconSize } from "./constants";
import type { ComponentProps } from "shared/types";

export interface IconProps extends ComponentProps {
    id: string,
    size?: IconSize
}
