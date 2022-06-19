<script setup>
import Information from "../components/StartPage/Information.vue";
</script>

<template>
  <a-row type="flex" justify="center" >
    <router-view />
    <Information />
   </a-row>
</template>
