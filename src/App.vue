<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
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
