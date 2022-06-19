<script setup>
import { ref } from "vue";
</script>

<template>
  <a-layout-footer class="footer">
    <a-row type="flex" justify="space-around" align="start" style="padding: 20px; color: white; flex-wrap: wrap;">
      <a-col type="flex" style="flex-direction: column; margin: 8px;">
        <div class="title">Оплата и Документы</div>
        <div>Конфидециальность</div>
        <div>Публичная оферта</div>
        <div>Правила сервиса</div>
        <div>Правила оплаты</div>
      </a-col>
      <a-col type="flex" style="flex-direction: column; margin: 8px;">
        <div class="title">О проекте</div>
        <div>Частые вопросы</div>
        <div>Тех. поддержка</div>
        <div>Контакты</div>
      </a-col>
      <a-col type="flex" style="flex-direction: column; margin: 8px;">
        <div class="title">Обучение</div>
        <div>Cоздать концерт</div>
        <div>Регистрация</div>
      </a-col>
    </a-row>
  </a-layout-footer>
</template>
<style lang="scss" scoped>
.footer {
  font-size: 14px;
  background: black;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.title {
  padding-bottom: 8px;
  font-weight: bold;
}
</style>


