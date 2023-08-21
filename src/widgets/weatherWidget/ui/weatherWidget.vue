<script setup lang="ts">
import { getOpenWeatherData } from "widgets/weatherWidget/api";
import { computed, onMounted, ref } from "vue";
import { type OpenWeatherData, defaultState } from "../config";
import { getWeatherConcatenatedData } from "widgets/weatherWidget/lib";
import { Icon } from "shared/ui";
import Header from "./header.vue";
import { capitalizeFirstLetter } from "shared/lib";
import Details from "widgets/weatherWidget/ui/details.vue";

const weatherData = ref<OpenWeatherData>(defaultState);

// TODO: set units from props
onMounted(() => {
  getOpenWeatherData({ lon: 51.5073219, lat: -0.1276474 }).then(res => {
    weatherData.value = res;
  });
})

const descriptions = computed(() => getWeatherConcatenatedData(weatherData.value, "description"));
const mainIcon = computed(() => weatherData.value.weather[0]?.icon);
const detailsItems = computed(() => [
  {
    desc: {
      component: Icon,
      props: { id: "icon-direction" }
    },
    value: weatherData.value.wind.speed,
    unit: "m/s"
  },
  {
    desc: {
      component: Icon,
      props: { id: "icon-humidity" }
    },
    value: weatherData.value.main.humidity,
    unit: "%"
  },
  {
    desc: "Atmospheric pressure: ",
    value: weatherData.value.main.pressure,
    unit: "hPa"
  }
])

</script>

<template>
  <div class="weatherWidget">
    <Header :city="weatherData.name" :country="weatherData.sys?.country" />
    <div class="weatherWidget__main">
      <div class="weatherWidget__icon">
        <Icon :id="mainIcon"/>
      </div>
      <div class="weatherWidget__temp">
        {{ `${weatherData.main.temp} °C` }}
      </div>
    </div>
    <div class="weatherWidget__description">
      {{ weatherData.main.feels_like ? `Feels like ${weatherData.main.feels_like} °C.` : "" }}
      {{ descriptions && `${capitalizeFirstLetter(descriptions)}.` }}
    </div>
    <Details :items="detailsItems"/>
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>
