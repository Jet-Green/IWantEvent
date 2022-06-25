<script setup>
</script>
<template>
  <a-divider style="height: 2px; background-color: #c0004e" />
  <a-row>
    <a-typography-title :level="3">Выбрать место</a-typography-title>
  </a-row>
  <a-row>
    <a-col :xs="8">Сортировать</a-col>
    <a-col :xs="8">Станция метро</a-col>
    <a-col :xs="8">Вид кухни</a-col>
  </a-row>
  <a-row>
    <a-col :xs="8">Формат места</a-col>
    <a-col :xs="8">Район</a-col>
    <a-col :xs="8">Еда</a-col>
  </a-row>
  <a-row>
    <a-col :xs="8">Стоимость</a-col>
    <a-col :xs="8">Вместимость</a-col>
    <a-col :xs="8">Оснащение</a-col>
  </a-row>

  <a-row type="flex" justify="center" >
    <a-button
      type="primary"
      shape="round"
      style="display: flex; align-items: center; margin: 0 0 0 8px"
    >
      Показать
    </a-button>
  </a-row>
  <a-divider style="height: 2px; background-color: #c0004e" />
</template>

<style lang="scss" scoped>
</style>