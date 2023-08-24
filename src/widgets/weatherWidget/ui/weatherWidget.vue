<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { getOpenWeatherData } from "../api";
import { defaultState, type OpenWeatherData } from "widgets/weatherWidget/config";
import { Info, Header, Settings } from "./";

const weatherData = ref<OpenWeatherData>(defaultState);
const isSettingsOpen = ref<boolean>(false);

onMounted(() => {
  getOpenWeatherData({ lon: 51.5073219, lat: -0.1276474 }).then(res => {
    weatherData.value = res;
  });
})

const headerProps = computed(() => ({
  toggleBtnProps: {
    icon: isSettingsOpen.value ? "icon-close" : "icon-settings"
},
  title: isSettingsOpen.value ? "Settings" : ""
}))

const onToggleSettings = () => isSettingsOpen.value = !isSettingsOpen.value;

const location = computed(() => weatherData.value.name && weatherData.value.sys?.country
    ? `${weatherData.value.name}, ${weatherData.value.sys?.country}`
    : "Location not found")

const onUpdateCities = () => {}

</script>

<template>
  <div class="weatherWidget">
    <Header v-bind="headerProps" @toggle-settings="onToggleSettings"/>
    <div class="weatherWidget__content">
      <template v-if="isSettingsOpen">
        <Settings />
      </template>
      <template v-else>
        <Info v-bind="weatherData"/>
      </template>
    </div>
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>
