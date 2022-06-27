<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

import OpenEvent from './OpenEvent.vue'
import CloseEvent from './CloseEvent.vue'

const router = useRouter()

let isCloseEvent = ref(false);

function toggleEvent(val) {
  eventType.value = val;
}
</script>
<template>
  <a-col :xs="24" :sm="20" >
    <a-page-header title="Главная" @back="router.push('/')" />
    <a-row type="flex" justify="center" style="padding: 0 16px 16px 16px;">
      <a-col :xs="24" :md="16">
        <a-typography-title class="title">Создать мероприятие</a-typography-title>
        <a-row >
          <a-col style="margin-bottom: 16px">
            Открытое
            <a-switch v-model:checked="isCloseEvent" />
            Закрытое
            <span class="mdi mdi-24px mdi-information-outline"></span>
          </a-col>
        </a-row>
        <div v-if="!isCloseEvent">
          <OpenEvent />
        </div>
        <div v-else>
          <CloseEvent />
        </div>
      </a-col>
    </a-row>
  </a-col>
</template>
<style lang="scss" scoped>
.title {
    font-size: clamp(30px, 2.7vw, 38px);
  }
</style>
