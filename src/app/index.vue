<script setup lang="ts">
import { PageLayout } from "shared/ui/pageLayout";
import { Block } from "shared/ui/block";
import { WeatherWidget } from "widgets";
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