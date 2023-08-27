<script setup lang="ts">
import { DraggableList } from "shared/ui";
import { DynamicListItem, DynamicListInput } from "shared/ui/dynamicList";
import { toRef, watch } from "vue";
import { nanoid } from "nanoid";
import type { SettingsProps } from "widgets/weatherWidget/config";
import { getCityData } from "../api";

const props = withDefaults(defineProps<SettingsProps>(), {
  cities: []
})

const cities = toRef(props.cities);
const emit = defineEmits([ "updateCities" ]);

watch(cities.value, () => {
  emit("updateCities", cities.value);
})

const onDeleteCity = (e, id) => {
  const index = cities.value.findIndex(item => item.id === id);
  if (index !== -1) {
    cities.value.splice(index, 1);
  }
}

const onAddCity = async (e, cityName) => {
  getCityData({ cityName }).then(({ lat, lon, country, name }) => {
    cities.value.push({ id: nanoid(5), name, lat, lon, country });
  }).catch((err) => {
    console.error(err);
  });
}

</script>

<template>
  <DraggableList :items="cities" @update-order="cities = $event">
    <template v-slot:item="{ item }" >
      <DynamicListItem :on-delete-item="onDeleteCity" :id="item.id" :label="item.name" />
    </template>
  </DraggableList>
  <DynamicListInput :on-add-item="onAddCity" :extra-classes="[ 'mtAuto' ]"/>
</template>