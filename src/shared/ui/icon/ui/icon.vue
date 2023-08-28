<script setup lang="ts">
import { classNames } from "shared/lib";
import { type IconProps } from "shared/ui/icon";

withDefaults(defineProps<IconProps>(), {
  size: "sizeS",
  extraClasses: []
});
</script>

<template>
  <svg :class="classNames('icon', mods, [ id, size, ...extraClasses ])">
    <use :href="`./sprite.svg#${id}`" />
  </svg>
</template>

<style>
@import "./index.scss";
</style>
