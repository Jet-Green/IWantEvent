<script setup>
import { ref } from "vue";
import logo from "../assets/logo.png";
let query = ref("");
</script>

<template>
  <a-layout-header style="background: 'black'; padding: 0; display: flex; justify-content: space-between ">
    <!-- <div style="display: flex; justify-content: space-between"> -->
    <img :src="logo" style="height: 100%; object-fit: cover; padding: 8px;" />
    <div style="display: flex; align-items: center">
      <span class="mdi mdi-map-marker-outline" style="font-size: 40px;"></span>
      <span>Глазов</span>
      <a-divider type="vertical" style=" background-color: gray; height: 70%;" />
      <span class="mdi mdi-account-details" style="margin: 0 16px 0 16px; font-size: 40px; cursor: pointer"></span>
    </div>
    <!-- </div> -->
  </a-layout-header>
</template>
<style scoped>
span {
  color: white;
}
</style>