<script setup lang="ts">
import { classNames } from "shared/lib";
import type { BtnProps } from "shared/ui/btn/config/types";
import { Icon } from "shared/ui/icon";

const props = withDefaults(defineProps<BtnProps>(), {
  extraClasses: [],
  label: ""
});
</script>

<template>
  <button :class="classNames('btn', mods, [ ...extraClasses ])">
    <span v-if="icon" class="btn__icon"><Icon :id="icon" :size="iconSize"/></span>
    <span v-if="label" class="btn__label">{{ label }}</span>
  </button>
</template>

<style scoped>
@import "./index.scss";
</style>