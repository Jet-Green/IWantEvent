<script setup>
import { ref } from 'vue'
let ticketCost = ref(1000)
</script>
<template>
  <a-row style="margin-top: 20px;">
    <a-col :span="14">Тип мероприятия</a-col>
    <a-col :span="7">Открытое</a-col>
  </a-row>
  <a-row>
    <a-col :span="14">Введите артиста:</a-col>
    <a-col :span="7">БИ-2</a-col>
  </a-row>
  <a-row>
    <a-col :span="14">Место мероприятия:</a-col>
    <a-col :span="7">Глазов</a-col>
  </a-row>
  <a-row>
    <a-col :span="24" :sm="14">Стоимость вашего будущего билета:</a-col>
    <a-col :span="7">
      <a-input v-model:value="ticketCost" size="small" />
    </a-col>
  </a-row>
  <a-row style="margin: 16px 0 16px 0">
    <a-col>
      <a-typography-text type="secondary">
        Введите сумму, которую вы готовы потратить на мероприятие, но не менее, чем указанная рекомендованная цена. В
        случае, если концерт не будет собран или не состоится по каким либо причинам, вы получите стоимость билета
        обратно, за минусом коммиссии сбора (5%)
      </a-typography-text>
    </a-col>
  </a-row>
  <a-button shape="round" type="primary" style="margin: 0 0 20px 0">
    Оплатить
  </a-button>
</template>