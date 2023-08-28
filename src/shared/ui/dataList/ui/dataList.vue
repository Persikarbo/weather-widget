<script setup lang="ts">
import { isTermComponent } from "../lib";
import { type DataListProps } from "shared/ui/dataList";
import { classNames } from "shared/lib";

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
        <component
          :is="term.component"
          v-if="isTermComponent(term)"
          v-bind="term.props"
        />
        <template v-else>
          {{ term }}
        </template>
      </dt>
      <dd>{{ `${value} ${unit}` }}</dd>
    </div>
  </dl>
</template>

<style scoped>
@import "./index.scss";
</style>
