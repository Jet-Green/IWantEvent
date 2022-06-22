<script setup>
import Information from "../components/StartPage/Information.vue";
</script>

<template>
  <a-row type="flex" justify="center" :xs="24" :sm="20" >
    <router-view />
    <Information />
   </a-row>
</template>
<style lang="scss" scoped>
Information{
  margin: 8px;
}
</style>
