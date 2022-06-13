<script setup>
import { ref } from "vue";
import logo from "../assets/logo.png";
let query = ref("");
</script>

<template>
  <a-layout>
    <a-layout-header :style="{ background: 'black', padding: 0 }">
      <div>
        <span class="material-symbols-outlined"> menu </span>
        <span class="material-symbols-outlined"> person </span>
        <span class="material-symbols-outlined"> pin_drop </span>
      </div>
    </a-layout-header>
  </a-layout>
</template>
