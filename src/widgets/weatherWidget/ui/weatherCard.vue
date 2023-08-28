<script setup lang="ts">
import { computed, toRefs } from "vue";
import { capitalizeFirstLetter } from "shared/lib";
import { DataList, Icon } from "shared/ui";
import { IconSize } from "shared/ui/icon";
import { defaultState } from "../config";
import { getDetailsItem, getVisibilityInKm } from "../lib";
import type { WeatherData } from "widgets/weatherWidget/config/types";

const props = withDefaults(defineProps<WeatherData>(), defaultState);

const { weather, main, wind, clouds, visibility, name, sys } = toRefs<WeatherData>(props);

const descriptions = computed(() => weather.value?.map(({ description }) => description).join(", "));
const mainIcon = computed(() => weather.value[0]?.icon);
const detailsItems = computed(() => [
  getDetailsItem({ icon: "icon-direction", iconSize: IconSize.XS }, wind.value.speed, "m/s"),
  getDetailsItem({ icon: "icon-humidity", iconSize: IconSize.XS }, main.value.humidity, "%"),
  getDetailsItem({ label: "Atmospheric pressure: " }, main.value.pressure, "hPa"),
  getDetailsItem({ label: "Visibility: " }, getVisibilityInKm(visibility?.value), "km"),
  getDetailsItem({ label: "Cloudiness: " }, clouds.value.all, "%")
].filter(item => !!item.value))
</script>

<template>
  <div class="weatherWidget__card">
    <div class="weatherWidget__location">
      {{ `${name}, ${sys.country}` }}
    </div>
    <div class="weatherWidget__main">
      <div
        v-if="mainIcon"
        class="weatherWidget__icon"
      >
        <Icon
          :id="mainIcon"
          :size="IconSize.XXL"
        />
      </div>
      <div class="weatherWidget__temp">
        {{ main.temp ? `${Math.round(main.temp)} °C` : "— °C" }}
      </div>
    </div>
    <div class="weatherWidget__description">
      {{ main.feels_like ? `Feels like ${Math.round(main.feels_like)} °C.` : "" }}
      {{ descriptions && `${capitalizeFirstLetter(descriptions)}.` }}
    </div>
    <div
      v-if="detailsItems.length"
      class="weatherWidget__details"
    >
      <DataList :items="detailsItems" />
    </div>
  </div>
</template>
