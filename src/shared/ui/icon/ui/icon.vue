<script setup lang="ts">
import { classNames } from "shared/lib";
import { type IconProps } from "shared/ui/icon/config/types";
import { IconSize } from "shared/ui/icon/config/constants";

const props = withDefaults(defineProps<IconProps>(), {
  size: IconSize.S,
  extraClasses: () => []
});

const getIconUrl = (): string | undefined => {
  try {
    const { default: { url = "" } = {} } = require(`@assets/icons/${props.id}.svg`);
    return url;
  } catch {
    console.error(`Icon with identifier ${props.id} not found.`)
  }
}

</script>

<template>
  <svg :class="classNames('icon', mods, [ id, size, ...extraClasses ])">
    <use :href="getIconUrl" />
  </svg>
</template>

<style>
@import "./index.scss";
</style>
