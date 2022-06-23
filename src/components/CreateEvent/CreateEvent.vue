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
  <a-col :sm="20">
    <a-page-header title="Главная" @back="router.push('/')" />
    <a-row type="flex" justify="center" style="padding-bottom: 16px">
      <a-col :xs="24" :md="16">
        <a-typography-title>Создать мероприятие</a-typography-title>
        <a-row >
          <a-col>
            Открытое мероприятие
            <a-switch v-model:checked="isCloseEvent" />
            Закрытое мероприятие
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

</style>
