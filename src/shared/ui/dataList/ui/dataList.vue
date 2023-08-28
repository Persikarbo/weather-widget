<script setup lang="ts">
import { type DataListProps } from "shared/ui/dataList";
import { classNames } from "shared/lib";
import { Icon } from "shared/ui";

withDefaults(defineProps<DataListProps>(), {});
</script>

<template>
  <dl :class="classNames('dataList', mods, extraClasses)">
    <div
      v-for="({ term, value, unit }, index) in items"
      :key="index"
      class="dataList__item"
    >
      <dt>
        <Icon
          v-if="term.icon"
          :id="term.icon"
          :size="term.iconSize"
        />
        <span v-if="term.label">
          {{ term.label }}
        </span>
      </dt>
      <dd>{{ `${value} ${unit}` }}</dd>
    </div>
  </dl>
</template>

<style scoped>
@import "./index.scss";
</style>
