import { isValidComponent } from "shared/lib";
import type { TermComponent } from "../config/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isTermComponent = (desc: any): desc is TermComponent => { return isValidComponent(desc.component) };
