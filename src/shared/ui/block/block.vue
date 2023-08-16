<script setup lang="ts">
import { classNames } from "shared/lib";

interface BlockProps {
  extraClasses?: object
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