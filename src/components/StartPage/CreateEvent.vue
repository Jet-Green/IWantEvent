<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

const router = useRouter()

let offerCheckboxChecked = ref(false);
let eventType = ref(false);
let artistName = ref('')

function toggleEvent(val) {
  eventType.value = val;
}
</script>
<template>
  <a-col :xs="24" :sm="20">
    <a-page-header title="Главная" @back="router.push('/')" />
    <a-row type="flex" justify="center" align="top" style="margin: 20px 0 0 0">
      <a-col :span="15" :md="15" :xs="22" :sm="18">
        <a-typography-title>Создать мероприятие</a-typography-title>
        <a-row style="margin: 20px 0 0 0">
          <a-col>
            Открытое мероприятие
            <a-switch v-model:checked="eventType" />
            Закрытое мероприятие
            <span class="mdi mdi-24px mdi-information-outline"></span>
          </a-col>
        </a-row>
        <div v-if="!eventType">
          <a-row>
            <a-col :span="15" :xs="24" :md="12">
              <a-input v-model:value="artistName" size="large" placeholder="Начните вводить имя артиста"
                style="margin: 20px 0 20px 0" />
            </a-col>
          </a-row>
          <a-row>
            <a-col>
              <a-checkbox v-model:checked="offerCheckboxChecked" style="margin: 0 0 20px 0">
                Принять условия оферты
              </a-checkbox>
            </a-col>
          </a-row>
          <a-button shape="round" type="primary" style="margin: 0 0 20px 0">
            Создать сбор
          </a-button>
        </div>
        <div v-else>Закрытое</div>
      </a-col>
    </a-row>
  </a-col>
</template>
