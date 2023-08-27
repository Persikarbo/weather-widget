<script setup lang="ts">
import { PageLayout, Block } from "shared/ui";
import { WeatherWidget } from "widgets/weatherWidget";
</script>

<template>
  <div class="app">
  <PageLayout>
    <Block :mods="{ isFullHeight: true, isContentCentered: true }">
      <WeatherWidget />
    </Block>
  </PageLayout>
  </div>
</template>

<style>
@import "./styles/index.scss";
</style>