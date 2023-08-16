<script setup lang="ts">
import { getOpenWeatherData } from "widgets/weatherWidget/api";
import { onMounted } from "vue";

onMounted(() => {
  getOpenWeatherData().then(res => console.debug(res));
})
</script>

<template>
  <div class="weatherWidget">
    Weather Widget
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>