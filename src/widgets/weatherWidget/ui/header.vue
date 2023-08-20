<script setup lang="ts">
import { Icon } from "shared/ui";

const props = defineProps({
  city: String,
  country: String
})
</script>

<template>
  <div class="weatherWidget__header">
    <div class="weatherWidget__location">
      {{ city && country
        ? `${city}, ${country}`
        : "Location not found" }}
    </div>
    <div class="weatherWidget__settings">
      <Icon id="icon-settings" />
    </div>
  </div>
</template>