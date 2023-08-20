<script setup lang="ts">
import { classNames, type Mods } from "shared/lib";

interface BlockProps {
  extraClasses?: Mods
}

const props = withDefaults(defineProps<BlockProps>(), {});
</script>

<template>
  <div :class="classNames('block', extraClasses)">
    <slot />
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>