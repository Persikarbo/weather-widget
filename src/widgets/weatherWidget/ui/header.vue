<script setup lang="ts">
import { Icon } from "shared/ui";

const props = defineProps({
  title: String,
  idIcon: String
})

const emit = defineEmits([ "toggleSettings" ])
</script>

<template>
  <div class="weatherWidget__header">
    <div class="weatherWidget__title">
      {{ title }}
    </div>
    <div class="weatherWidget__toggle">
      <Icon :id="idIcon" @click="emit('toggleSettings')"/>
    </div>
  </div>
</template>