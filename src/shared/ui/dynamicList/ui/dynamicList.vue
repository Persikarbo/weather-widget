<script setup lang="ts">
import { toRef } from "vue";
import { classNames } from "shared/lib";
import type { DynamicListProps } from "shared/ui/dynamicList/config/types";
import DynamicListItem from "./dynamicListItem.vue";
import DynamicListInput from "shared/ui/dynamicList/ui/dynamicListInput.vue";
import { nanoid } from "nanoid";

const props = withDefaults(defineProps<DynamicListProps>(), {
  items: []
})

const items = toRef(props.items);

const onDeleteItem = (e: Event, id: string): void => {
  items.value = items.value.filter(item => item.id !== id);
}

const onAddItem = (e: Event, newItem: string): void => {
  items.value.push({ id: nanoid(5), label: newItem })
}
</script>

<template>
  <ul :class="classNames('dynamicList', mods, extraClasses)">
    <template
      v-for="item in items"
      :key="item.id"
    >
      <DynamicListItem
        :on-delete-item="onDeleteItem"
        v-bind="item"
      />
    </template>
  </ul>
  <DynamicListInput :on-add-item="onAddItem" />
</template>

<style scoped>
@import "./index.scss";
</style>
