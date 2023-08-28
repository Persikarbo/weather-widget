import type { Mods } from "shared/types";

export function classNames(baseClass: string, mods: Mods = {}, additional: string[] = []): string {
  return [
    baseClass,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([ , value ]) => !!value)
      .map(([ mod ]) => `${baseClass}--${mod}`)
  ].join(" ")
}
