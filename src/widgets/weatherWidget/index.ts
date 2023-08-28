import { defineCustomElement } from "vue";
import WeatherWidget from "./ui/weatherWidget.vue";

customElements.define("weather-widget", defineCustomElement(WeatherWidget));

export { WeatherWidget }
