<script setup>
import { onMounted } from 'vue'

import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/WebGLTile.js';
import View from 'ol/View.js';
import XYZ from 'ol/source/XYZ.js';
import { fromLonLat } from 'ol/proj.js';

onMounted(() => {
  const key = '7eChfb2OSCzZFJG3JGNC'
  const attributions = ''
  // '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  // '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
  new Map({
    target: 'map-container',
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' + key,
          attributions: attributions,
          crossOrigin: 'anonymous',
          tileSize: 512,
        }),
      }),
    ],
    view: new View({
      center: fromLonLat([52.6464388, 58.1401196]),
      zoom: 15,
    }),
  });
})
</script>
<template>
  <div id="map-container" class="map"></div>
</template>
<style scoped lang="scss">
@import "../../../node_modules/ol/ol.css";

.map {
  height: 400px;
  width: 800px;
}
</style>