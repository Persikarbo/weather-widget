<script setup lang="ts">
import { getOpenWeatherData } from "widgets/weatherWidget/api";
import { computed, onMounted, ref } from "vue";
import { type OpenWeatherData, defaultState } from "../config";
import { getWeatherConcatenatedData } from "widgets/weatherWidget/lib";
import { Icon } from "shared/ui";

const weatherData = ref<OpenWeatherData>(defaultState);

// TODO: set units from props
onMounted(() => {
  getOpenWeatherData({ lon: 51.5073219, lat: -0.1276474 }).then(res => {
    weatherData.value = res;
  });
})

const descriptions = computed(() => getWeatherConcatenatedData(weatherData.value, "description"));
const mainIcon = computed(() => weatherData.value.weather[0]?.icon);

</script>

<template>
  <div class="weatherWidget">
    <div class="weatherWidget__header">
      <div class="weatherWidget__location">
        {{ weatherData.name && weatherData.sys.country
            ? `${weatherData.name}, ${weatherData.sys.country}`
            : "Location not found" }}
      </div>
      <div class="weatherWidget__settings">settings icon</div>
    </div>
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
      {{ descriptions }}
    </div>
    <div class="weatherWidget__details">
      <dl>
        <template v-if="weatherData.wind.speed">
          <dt>wind direction icon</dt>
          <dd>{{ `${weatherData.wind.speed}m/s` }}</dd>
        </template>
        <template v-if="weatherData.main.pressure">
          <dt>pressure icon</dt>
          <dd>{{ `${weatherData.main.pressure}hPa` }}</dd>
        </template>
      </dl>
    </div>
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>