<script setup lang="ts">
import { computed, toRefs } from "vue";
import Header from "./header.vue";
import { capitalizeFirstLetter } from "shared/lib";
import { DataList, Icon } from "shared/ui";
import { IconSize } from "shared/ui/icon";
import { getDetailsItem, getIconTerm, getVisibilityInKm, getWeatherConcatenatedData } from "../lib";
import type { OpenWeatherData } from "widgets/weatherWidget/config";

const props = defineProps<OpenWeatherData>();

const { weather, main, wind, clouds, visibility } = toRefs<OpenWeatherData>(props);

const descriptions = computed(() => weather.value?.map(({ description }) => description).join(", "));
const mainIcon = computed(() => weather.value[0]?.icon);
const detailsItems = computed(() => [
  getDetailsItem(getIconTerm({ id: "icon-direction", size: IconSize.XS }), wind.value.speed, "m/s"),
  getDetailsItem(getIconTerm({ id: "icon-humidity", size: IconSize.XS }), main.value.humidity, "%"),
  getDetailsItem("Atmospheric pressure: ", main.value.pressure, "hPa"),
  getDetailsItem("Visibility: ", getVisibilityInKm(visibility?.value), "km"),
  getDetailsItem("Cloudiness: ", clouds.value.all, "%")
].filter(item => !!item.value))
</script>

<template>
  <div class="weatherWidget__main">
    <div v-if="mainIcon" class="weatherWidget__icon">
      <Icon :id="mainIcon" :size="IconSize.XXL" />
    </div>
    <div class="weatherWidget__temp">
      {{ main.temp ? `${Math.round(main.temp)} °C` : "— °C" }}
    </div>
  </div>
  <div class="weatherWidget__description">
    {{ main.feels_like ? `Feels like ${Math.round(main.feels_like)} °C.` : "" }}
    {{ descriptions && `${capitalizeFirstLetter(descriptions)}.` }}
  </div>
  <div v-if="detailsItems.length" class="weatherWidget__details">
    <DataList :items="detailsItems"/>
  </div>
</template>