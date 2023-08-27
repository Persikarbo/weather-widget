import type { ComponentProps } from "shared/types";

export interface GridProps extends ComponentProps {
    columns?: number;
    rows?: number;
}