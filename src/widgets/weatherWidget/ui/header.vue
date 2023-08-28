<script setup lang="ts">
import type { BtnProps } from "shared/ui/btn";
import { Btn } from "shared/ui";

type weatherWidgetHeaderProps = {
  toggleBtnProps: BtnProps;
  title: string;
}

withDefaults(defineProps<weatherWidgetHeaderProps>(), {
  title: ""
})

const emit = defineEmits([ "toggleSettings" ])
</script>

<template>
  <div class="weatherWidget__header">
    <div class="weatherWidget__title">
      {{ title }}
    </div>
    <div class="weatherWidget__toggle">
      <Btn
        v-bind="toggleBtnProps"
        @click="emit('toggleSettings')"
      />
    </div>
  </div>
</template>
