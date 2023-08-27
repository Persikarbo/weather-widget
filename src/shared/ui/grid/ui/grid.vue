<script setup lang="ts">
import { classNames } from "shared/lib";
import type { GridProps } from "shared/ui/grid/config/types";

const props = withDefaults(defineProps<GridProps>(), {
  columns: 0,
  rows: 0,
  extraClasses: []
});

const mods = {
  ...props.mods,
  [`columns-${props.columns}`]: !!props.columns,
  [`rows-${props.rows}`]: !!props.rows
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