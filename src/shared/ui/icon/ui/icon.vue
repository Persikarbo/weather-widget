<script setup lang="ts">
import { classNames, type Mods } from "shared/lib";
import type { FunctionalComponent, SVGAttributes } from "vue";
import { IconSize } from "../config";

interface IconProps extends FunctionalComponent<SVGAttributes> {
  id: string | undefined,
  size: IconSize,
  extraClasses?: Mods
}

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
    <use :href="getIconUrl(props.id)" />
  </svg>
</template>

<style scoped>
@import "./index.scss";
</style>
