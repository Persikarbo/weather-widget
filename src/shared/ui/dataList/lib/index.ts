import { isValidComponent } from "shared/lib";
import { type TermComponent } from "shared/ui/dataList/config";

export const isTermComponent = (desc: any): desc is TermComponent => { return isValidComponent(desc.component) };