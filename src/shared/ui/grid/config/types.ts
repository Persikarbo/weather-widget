import type { ComponentProps } from "shared/types";

export interface GridProps extends ComponentProps {
    columns?: string | null;
    rows?: string | null;
    gapX?: string | null;
}
