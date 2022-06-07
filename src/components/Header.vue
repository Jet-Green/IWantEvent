<script setup>
import { ref } from "vue";
import logo from "../assets/logo.png";
let query = ref("");
</script>

<template>
  <v-app-bar app class="bg-black text-white pt-0 pb-0">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
   <v-img :src="logo"></v-img>

    <template v-slot:append>
      <v-icon
        style="font-size: 30px"
        color="white"
        icon="mdi-map-marker"
      ></v-icon>
      <span class="mr-4">Глазов</span>
      <v-icon
        style="font-size: 30px"
        color="white"
        icon="mdi-account-details-outline"
      ></v-icon>
    </template>
  </v-app-bar>
</template>
