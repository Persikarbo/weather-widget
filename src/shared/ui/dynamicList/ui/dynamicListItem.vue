<script setup lang="ts">
import type { DynamicListItemProps } from "shared/ui/dynamicList/config/types";
import { IconSize } from "shared/ui/icon";
import { Btn } from "shared/ui/btn";

withDefaults(defineProps<DynamicListItemProps>(), {
  isCustomWrapper: false
})
</script>

<template>
  <component :is="isCustomWrapper ? 'div' : 'li'" class="dynamicList__item">
    {{ label }}
    <Btn icon="icon-remove" :icon-size="IconSize.XS" @click="(e) => onDeleteItem(e, id)" />
  </component>
</template>

<style scoped>
@import "./index.scss";
</style>