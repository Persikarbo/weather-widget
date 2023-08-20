<script setup lang="ts">
import type { PropType, Slot } from "vue";
import { Icon } from "shared/ui";

interface DetailItem {
  icon?: string,
  desc?: string,
  value: string | number | Slot,
  unit: string
}

const props = defineProps({
  items: Array as PropType<DetailItem[]>
})
</script>

<template>
  <div class="weatherWidget__details">
    <dl>
      <template v-for="{ icon, desc, value, unit } in items">
        <template v-if="value">
          <dt v-if="icon"><Icon :id="icon" /></dt>
          <dt v-else>{{ desc }}</dt>
          <dd>{{ `${value} ${unit}` }}</dd>
        </template>
      </template>
    </dl>
  </div>
</template>