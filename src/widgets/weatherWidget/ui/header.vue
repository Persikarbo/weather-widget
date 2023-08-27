<script setup lang="ts">
import { Btn } from "shared/ui";

defineProps({
  toggleBtnProps: Btn,
  title: String
})

const emit = defineEmits([ "toggleSettings" ])
</script>

<template>
  <div class="weatherWidget__header">
    <div class="weatherWidget__title">
      {{ title }}
    </div>
    <div class="weatherWidget__toggle">
      <Btn @click="emit('toggleSettings')" v-bind="toggleBtnProps"/>
    </div>
  </div>
</template>