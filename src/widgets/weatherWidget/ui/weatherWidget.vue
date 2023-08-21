<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { getOpenWeatherData } from "../api";
import { defaultState, type OpenWeatherData } from "widgets/weatherWidget/config";
import Info from "widgets/weatherWidget/ui/info.vue";
import Header from "widgets/weatherWidget/ui/header.vue";

const weatherData = ref<OpenWeatherData>(defaultState);
const isSettingsOpen = ref<boolean>(false);

onMounted(() => {
  getOpenWeatherData({ lon: 51.5073219, lat: -0.1276474 }).then(res => {
    weatherData.value = res;
  });
})

const onToggleSettings = () => isSettingsOpen.value = !isSettingsOpen.value;

const location = computed(() => weatherData.value.name && weatherData.value.sys?.country
    ? `${weatherData.value.name}, ${weatherData.value.sys?.country}`
    : "Location not found")
</script>

<template>
  <div class="weatherWidget">
    <template v-if="isSettingsOpen" >
      <Header title="Settings" id-icon="icon-close" @toggle-settings="onToggleSettings"/>
      <div>Here must be settings</div>
    </template>
    <template v-else>
      <Header :title="location" id-icon="icon-settings" @toggle-settings="onToggleSettings"/>
      <Info v-bind="weatherData"/>
    </template>
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>
