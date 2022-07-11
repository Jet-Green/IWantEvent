<script setup>
  import { ref } from 'vue'
  import request from './Request.vue'
  let name=ref('Фестиваль "Имя мероприятия"')
  let date=ref('10 сентября 2022')
  let time=ref('22:00-00:00')
  let count=ref('1000 человек')
  let txt=ref('Текст запроса')
</script>

<template>
  <a-typography-paragraph
    content="Поздравляем, вы почти создали своё закрытое мероприятие!"
    style="margin: 20px 0 20px 0"
  />
  <a-typography-paragraph content="Теперь проверяем, что получилось."
    style="margin: 20px 0 0 0"
  />
  <a-row>
    <a-col style="margin:20px 20px 20px 0">
      Шаг 1
    </a-col>
    <a-col style="margin:20px 0 20px 0">
      Основные параметры
    </a-col>
  </a-row>
  <a-row style="display:flex; flex-direction:column">
    <a-typography-paragraph id="main"  v-model:content="name" style="margin:0" editable/>
    <a-typography-paragraph v-model:content="date" style="margin:0" editable/>
    <a-typography-paragraph v-model:content="time" style="margin:0" editable/>
    <a-typography-paragraph v-model:content="count" style="margin:0" editable/>
  </a-row>
  <a-row>
    <a-col style="margin:20px 20px 20px 0">
      Шаг 2
    </a-col>
    <a-col style="margin:20px 0 20px 0">
      Организатор, место проведения и ведущий
    </a-col>
  </a-row>
  <a-row></a-row>
  <a-row></a-row>
  <a-row></a-row>
  <a-row>
    <a-col style="margin:20px 20px 20px 0">
      Шаг 3
    </a-col>
    <a-col style="margin:20px 0 20px 0">
      Артисты
    </a-col>
  </a-row>
  <a-row></a-row>
  <a-row>
    <a-col style="margin:20px 20px 20px 0">
      Шаг 4
    </a-col>
    <a-col style="margin:20px 0 20px 0">
      Партнёры
    </a-col>
  </a-row>
  <request></request>
  <a-button type="link" style="padding:0; margin:10px 0px 20px 0px">+ Добавить ещё запрос</a-button>
  <a-row>При создании заявки все выбранные участники получат уведомление</a-row>
  <a-row>Среднее время ответа составляет 12 часов</a-row>
</template>