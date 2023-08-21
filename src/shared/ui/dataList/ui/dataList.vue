<script setup lang="ts">
import { isValidComponent, type Mods } from "shared/lib";
import { type Component, type ComponentPropsOptions } from "vue";

interface DescComponent {
  component: Component,
  props?: any
}

interface DataListItem {
  desc: string | DescComponent,
  value: string | number | undefined,
  unit: string
}

interface DataListProps {
  items: DataListItem[],
  extraClasses?: Mods
}

const props = withDefaults(defineProps<DataListProps>(), {});
</script>

<template>
  <dl class="dataList">
    <template v-for="{ desc, value, unit } in items">
      <dt>
        <component v-if="isValidComponent(desc.component)" :is="desc.component" v-bind="{ ...desc.props }"/>
        <template v-else>{{ desc }}</template>
      </dt>
      <dd>{{ `${value} ${unit}` }}</dd>
    </template>
  </dl>
</template>

<style scoped>

</style>
