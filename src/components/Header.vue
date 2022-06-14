<script setup>
import { ref } from "vue";
import logo from "../assets/logo.png";
let query = ref("");
</script>

<template>
  <a-layout>
    <a-layout-header :style="{ background: 'black', padding: 0 }">
      <div style="display: flex; justify-content: right">
        <span class="mdi mdi-24px mdi-map-marker-outline">Глазов</span>
        <span
          class="mdi mdi-24px mdi-account-details"
          style="margin: 0 16px 0 32px"
        ></span>
      </div>
    </a-layout-header>
  </a-layout>
</template>
<style scoped>
span {
  color: white;
}
</style>