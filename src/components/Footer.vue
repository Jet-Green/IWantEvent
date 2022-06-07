<script setup>
import { ref } from "vue";
</script>

<template>
  <v-footer class="footer bg-black">
    <v-container
      class="text-white d-flex justify-space-around align-start pa-5 flex-wrap"
    >
      <div class="col-12 d-flex flex-column ma-2">
        <v-text class="font-weight-black pb-2">Оплата и Документы</v-text>
        <v-text>Конфидециальность</v-text>
        <v-text>Публичная оферта</v-text>
        <v-text>Правила сервиса</v-text>
        <v-text>Правила оплаты</v-text>
      </div>
      <div class="d-flex flex-column ma-2">
        <v-text class="font-weight-black pb-2">О проекте</v-text>
        <v-text>Частые вопросы</v-text>
        <v-text>Тех. поддержка</v-text>
        <v-text>Контакты</v-text>
      </div>
      <div class="d-flex flex-column ma-2">
        <v-text class="font-weight-black pb-2">Обучение</v-text>
        <v-text>Cоздать концерт</v-text>
        <v-text>Регистрация</v-text>
      </div>
    </v-container>
  </v-footer>
</template>
<style lang="scss" scoped>
.footer {
  font-size: 14px;


  @media (max-width: 768px) {
    font-size: 12px;
  }
}
</style>


