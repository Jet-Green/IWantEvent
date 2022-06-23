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
  <a-layout class="main">
    <Header />
    <a-layout-content>
      <router-view />
    </a-layout-content>
  <a-affix :offset-bottom="bottom">
    <Footer />
  </a-affix>
  </a-layout>
</template>
<style lang="scss" scoped>
.main{
  min-height: 100vh;
}
</style>
