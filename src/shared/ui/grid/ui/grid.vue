<script setup lang="ts">
import { classNames } from "shared/lib";
import type { GridProps } from "shared/ui/grid/config/types";

const props = withDefaults(defineProps<GridProps>(), {
  columns: null,
  rows: null,
  gapX: null,
  extraClasses: () => []
});

const mods = {
  ...props.mods,
  [`columns-${props.columns}`]: !!props.columns,
  [`rows-${props.rows}`]: !!props.rows,
  [`gapX-${props.gapX}`]: !!props.gapX
}

</script>

<template>
  <div :class="classNames('grid', mods, extraClasses)">
    <slot />
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>
