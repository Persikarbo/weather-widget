<script setup lang="ts">
import { classNames } from "shared/lib";
import type { ComponentProps } from "shared/types";

const props = withDefaults(defineProps<ComponentProps>(), {
  extraClasses: []
});

</script>

<template>
  <div :class="classNames('loader', mods, extraClasses)" />
</template>

<style scoped>
@import "./index.scss";
</style>