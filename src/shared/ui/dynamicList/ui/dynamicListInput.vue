<script setup lang="ts">
import { ref } from "vue";
import { Btn } from "shared/ui/btn";
import type { DynamicListInputProps } from "shared/ui/dynamicList/config/types";
import { IconSize } from "shared/ui/icon";
import { classNames } from "shared/lib";

const props = withDefaults(defineProps<DynamicListInputProps>(), {
  extraClasses: []
});

const newItem = ref("");

const onAddItem = (e) => {
  if (typeof props.onAddItem === "function" && newItem.value) {
    props.onAddItem(e, newItem.value);
  }
  newItem.value = "";
}
</script>

<template>
  <div :class="classNames('dynamicList__input', mods, extraClasses)">
    <input v-model="newItem" type="text" @keydown.enter="onAddItem"/>
    <Btn icon="icon-add" :icon-size="IconSize.XS" @click="onAddItem"/>
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>