<script setup lang="ts">
import { type Component } from "vue";
import { isTermComponent } from "../lib";
import { type DataListProps } from "shared/ui/dataList";

withDefaults(defineProps<DataListProps>(), {});
</script>

<template>
  <dl class="dataList">
    <div class="dataList__item" v-for="{ term, value, unit } in items">
      <dt>
        <component v-if="isTermComponent(term)" :is="term.component" v-bind="{ ...term.props }"/>
        <template v-else>{{ term }}</template>
      </dt>
      <dd>{{ `${value} ${unit}` }}</dd>
    </div>
  </dl>
</template>

<style scoped>
@import "./index.scss";
</style>
