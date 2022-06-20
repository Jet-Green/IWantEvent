<script setup>
import { onMounted, onUnmounted } from "vue";

import { useAppStateStore } from "./stores/appState";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const appState = useAppStateStore();

function onResize() {
  if (window.innerWidth < 600) {
    appState.setMobileType();
  }
  if (window.innerWidth >= 600) {
    appState.unsetMobileType();
  }
}

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("resize", this.onResize, { passive: true });
});
</script>

<template>
  <a-layout>
    <Header />
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <Footer />
  </a-layout>
</template>
