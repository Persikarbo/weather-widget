<script setup lang="ts">
import { classNames } from "shared/lib";
import type { IconProps } from "shared/ui/icon/config";
import { IconSize } from "../config";

const props = withDefaults(defineProps<IconProps>(), {
  size: IconSize.S
});

const getIconUrl = (id: string | undefined): string | undefined => {
  try {
    const { default: { url = "" } = {} } = require(`@assets/icons/${id}.svg`);
    return url;
  } catch {
    console.error(`Icon with identifier ${id} not found.`)
  }
}

</script>

<template>
  <svg :class="classNames('icon', extraClasses, [ size ])">
    <use :href="getIconUrl(id)" />
  </svg>
</template>

<style>
@import "./index.scss";
</style>
