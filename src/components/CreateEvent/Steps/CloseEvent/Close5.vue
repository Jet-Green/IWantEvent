<script setup>
  import { ref } from 'vue'
  import Request from './Request.vue'
  let name=ref('Фестиваль "Имя мероприятия"')
  let date=ref('10 сентября 2022')
  let time=ref('22:00-00:00')
  let count=ref('1000 человек')
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
    <a-col style="margin:20px 0 20px 0">
      Шаг 1
    </a-col>
    <a-col class="forButton">
      <a href=""></a>
      <a-button shape="circle" @click="$emit('change-step', 0)">
        <span class="mdi mdi-24px mdi-pencil-outline"></span>
      </a-button>
    </a-col>
    <a-col style="margin:20px 0 20px 0">
      Основные параметры
    </a-col>
  </a-row>
  <a-row style="display:flex; flex-direction:column">
    <a-typography-paragraph id="main"  v-model:content="name" style="margin:0"/>
    <a-typography-paragraph v-model:content="date" style="margin:0"/>
    <a-typography-paragraph v-model:content="time" style="margin:0"/>
    <a-typography-paragraph v-model:content="count" style="margin:0"/>
  </a-row>
  <a-row>
    <a-col style="margin:20px 0 20px 0">
      Шаг 2
    </a-col>
    <a-col class="forButton">
      <a-button shape="circle" @click="$emit('change-step', 1)">
        <span class="mdi mdi-24px mdi-pencil-outline"></span>
      </a-button>
    </a-col>
    <a-col style="margin:20px 0 20px 0">
      Организатор, место проведения и ведущий
    </a-col>
  </a-row>
  <a-row>
    <a-col v-for="item in 2">
      <div class="inf"></div>
    </a-col>
  </a-row>
  <a-row>
    <a-col v-for="item in 3">
      <div class="inf"></div>
    </a-col>
  </a-row>
  <a-row>
    <a-col v-for="item in 2">
      <div class="inf"></div>
    </a-col>
  </a-row>
  <a-row>
    <a-col style="margin:20px 0 20px 0">
      Шаг 3
    </a-col>
    <a-col class="forButton">
      <a-button shape="circle" @click="$emit('change-step', 2)">
        <span class="mdi mdi-24px mdi-pencil-outline"></span>
      </a-button>
    </a-col>
    <a-col style="margin:20px 0 20px 0">
      Артисты
    </a-col>
  </a-row>
  <a-row>
    <a-col v-for="item in 5">
      <div class="inf"></div>
    </a-col>
  </a-row>
  <a-row>
    <a-col style="margin:20px 0 20px 0">
      Шаг 4
    </a-col>
    <a-col class="forButton">
      <a-button shape="circle" @click="$emit('change-step', 3)">
        <span class="mdi mdi-24px mdi-pencil-outline"></span>
      </a-button>
    </a-col>
    <a-col style="margin:20px 0 20px 0">
      Партнёры
    </a-col>
  </a-row>
  <a-row>
    <a-col v-for="item in 5">
      <div class="inf"></div>
    </a-col>
  </a-row>
  <a-row>Если у вас сложный заказ или вы что-то не нашли, сделайте запрос... А вдруг...</a-row>
  <Request></Request>
  <a-row style="margin:10px 0 20px 0">При создании заявки все выбранные участники получат уведомление</a-row>
  <a-row style="margin-bottom: 20px;">Среднее время ответа составляет 12 часов</a-row>
</template>
<style scoped>
  .forButton{
    margin: 0 10px 0 10px;
    display:flex;
    align-items:center
  }
  .mdi-pencil-outline::before {
    height: 24px;
    display: flex;
    align-items: center;
  }
  .inf{
    height: 100px;
    width: 100px;
    background-color: gray;
    margin: 10px;
  }
</style>