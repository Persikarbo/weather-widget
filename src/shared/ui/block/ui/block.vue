<script setup lang="ts">
import { classNames } from "shared/lib";
import type { ComponentProps } from "shared/types";

withDefaults(defineProps<ComponentProps>(), {
  extraClasses: () => []
});
</script>

<template>
  <div :class="classNames('block', mods, extraClasses)">
    <slot />
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>
