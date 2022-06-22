<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

import OpenEvent from './OpenEvent.vue'
import CloseEvent from './CloseEvent.vue'

const router = useRouter()

let eventType = ref(false);

function toggleEvent(val) {
  eventType.value = val;
}
</script>
<template>
  <a-col  :sm="20">
    <a-page-header title="Главная" @back="router.push('/')" />
    <a-row type="flex" justify="center" style="margin: 20px 0 0 0; padding: 16px" >
      <a-col :xs="24" :md="16">
        <a-typography-title>Создать мероприятие</a-typography-title>
        <a-row style="margin: 20px 0 20px 0">
          <a-col>
            Открытое мероприятие
            <a-switch v-model:checked="eventType" />
            Закрытое мероприятие
            <span class="mdi mdi-24px mdi-information-outline"></span>
          </a-col>
        </a-row>
        <!-- Отделить в другую компоненту -->
        <div v-if="!eventType">
          <OpenEvent/>
        </div>
        <div v-else>
          <CloseEvent/>
        </div>
      </a-col>
    </a-row>
  </a-col>
</template>
