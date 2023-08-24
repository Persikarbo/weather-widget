<script setup lang="ts">
import { classNames, type Mods } from "shared/lib";

interface BlockProps {
  mods?: Mods,
  extraClasses: string[]
}

const props = withDefaults(defineProps<BlockProps>(), {
  extraClasses: []
});
</script>

<template>
  <div :class="classNames('block', mods, [ ...extraClasses ])">
    <slot />
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>