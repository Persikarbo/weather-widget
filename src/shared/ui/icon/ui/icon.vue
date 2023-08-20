<script setup lang="ts">
import { classNames, type Mods } from "shared/lib";
import type { FunctionalComponent, SVGAttributes } from "vue";

enum IconSize {
  default = "",
  M = "sizeM",
  L = "sizeL"
}

interface IconProps extends FunctionalComponent<SVGAttributes> {
  id: string,
  size: IconSize,
  extraClasses?: Mods
}

const props = withDefaults(defineProps<IconProps>(), {
  size: IconSize.default
});
</script>

<template>
  <svg :class="classNames('block', extraClasses, [ size ])">
    <use :href="`sprite.svg#${id}`" />
  </svg>
</template>

<style scoped>
@import "./index.scss";
</style>