<script setup lang="ts">
import type { Component, ComponentPropsOptions, PropType } from "vue";
import { isValidComponent } from "shared/lib";

interface DescComponent {
  component: Component,
  props?: ComponentPropsOptions
}

interface DetailItem {
  desc: DescComponent,
  value: string | number,
  unit: string
}

const props = defineProps({
  items: Array as PropType<DetailItem[]>
})
</script>

<template>
  <div class="weatherWidget__details">
    <dl>
      <template v-for="{ desc, value, unit } in items">
        <dt>
          <component v-if="isValidComponent(desc.component)" :is="desc.component" v-bind="{ ...desc.props }"/>
          <template v-else>{{ desc }}</template>
        </dt>
        <dd>{{ `${value} ${unit}` }}</dd>
      </template>
    </dl>
  </div>
</template>
