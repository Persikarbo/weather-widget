<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { getOpenWeatherData } from "../api";
import { type City, type WeatherData } from "widgets/weatherWidget/config";
import { Header, Settings, WeatherCard } from "./";
import { getInitialCity } from "../lib";
import { Grid, Loader } from "shared/ui";
import { localStorageCitiesKey } from "../config";

const weatherData = ref<WeatherData[]>([]);
const isSettingsOpen = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const cities = ref<City[]>([]);

const setWeatherData = () => {
  isLoading.value = true;
  getOpenWeatherData(cities.value).then(({ data, unavailableCities }) => {
    weatherData.value = data;

    if (unavailableCities.length) {
      console.error("Failed to load data for the following cities: ", unavailableCities.join(", "))
    }
  }).finally(() => isLoading.value = false)
}

onMounted(() => {
  const initialCities = JSON.parse(localStorage.getItem(localStorageCitiesKey));
  if (initialCities?.length) {
    cities.value = initialCities;
    setWeatherData();
  } else {
    isLoading.value = true;
    getInitialCity().then((res) => {
      cities.value.push(res);
      setWeatherData();
    }, (err) => {
      console.error(err)
    })
  }
})

const headerProps = computed(() => ({
  toggleBtnProps: {
    icon: isSettingsOpen.value ? "icon-close" : "icon-settings"
  },
  title: isSettingsOpen.value ? "Settings" : ""
}))

const onToggleSettings = async () => {
  isSettingsOpen.value = !isSettingsOpen.value;

  if (!isSettingsOpen.value) {
    setWeatherData();
  }
}

const onUpdateCities = (e) => {
  cities.value = e;
  localStorage.setItem("cities", JSON.stringify(cities.value))
}
</script>

<template>
  <div class="weatherWidget">
    <Header
      v-bind="headerProps"
      @toggle-settings="onToggleSettings"
    />
    <div class="weatherWidget__content">
      <template v-if="isSettingsOpen">
        <Settings
          :cities="cities"
          @update-cities="onUpdateCities"
        />
      </template>
      <Loader v-else-if="isLoading" />
      <template v-else>
        <Grid
          v-if="weatherData.length"
          columns="3"
          :gap-x="weatherData.length < 2 ? '0' : null"
        >
          <WeatherCard
            v-for="(item, index) in weatherData"
            :key="index"
            v-bind="item"
          />
        </Grid>
        <p v-else>
          No cities selected
        </p>
      </template>
    </div>
  </div>
</template>

<style scoped>
@import "./index.scss";
</style>
