<script setup>
import { useRoute } from "vue-router";

let route = useRoute();
let type = route.params.type;

</script>
<template>
  <!-- wrapper -->
  <a-row class="mt-8" type="flex" justify="center">
    <a-col :span="23">


      <!-- header -->
      <a-row>
        <a-col :span="12">
          <a-typography-title v-if="type == 'event'" :level="5">Собираемые / БИ-2 30.05.2023</a-typography-title>
          <a-typography-title v-else :level="5">Афиша / Руки Вверх 30.05.2023</a-typography-title>
        </a-col>
        <a-col :span="12" style="display: flex; justify-content: end; align-items: center;">
          Роль
          <a-button class="ml-8">Зритель</a-button>
        </a-col>
      </a-row>
      <!-- header -->


      <!-- image and description -->
      <a-row class="mt-16" type="flex" justify="space-between">
        <a-col :xs="24" :md="12">
          <a-image src="https://www.soyuz.ru/public/uploads/files/3/6977740/20170323104022e366171b00.jpg"
            :preview="false" style="aspect-ratio: 1 !important; border-radius: 30px;" class="mb-16">
          </a-image>
        </a-col>
        <a-col :xs="24" :md="11">
          <a-typography-title :level="2">Заголовок</a-typography-title>
          <a-typography-title :level="4">Подзаголовок</a-typography-title>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, doloremque doloribus molestiae eligendi
            repudiandae sint. Blanditiis nisi, consequuntur perferendis mollitia est nesciunt delectus nulla laboriosam
            itaque, assumenda repudiandae, repellendus fuga! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Minima ea error fuga, explicabo enim nobis dolor! Saepe, quas a. Dolores laudantium adipisci dignissimos
            voluptates ut praesentium esse consectetur, numquam sint! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Adipisci sint unde voluptatibus sapiente recusandae! Ipsa delectus vitae repellendus
            voluptas incidunt quas, at earum perspiciatis id obcaecati voluptates. Obcaecati, eligendi sequi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quos est sint, voluptatibus repellat culpa fuga eos cum
            enim dolores ad et temporibus, cumque repudiandae vel doloribus tempora nihil iusto veniam?
          </div>
          <a-row type="flex" justify="space-between" class="mt-8">
            <a-col :span="12">
              <b>Дата: </b>dd-mm-yyyy
            </a-col>
            <a-col :span="12" type="flex" justify="start">
              <b>Время: </b>hh-mm
            </a-col>
          </a-row>
          <b>Адрес: </b>город, улица, дома, квартира
          <a-row style="font-size: 30px">
            <a-col>
              <span class="mdi mdi-heart-outline"></span>
            </a-col>
            <a-col>
              <span class="mdi mdi-star-outline"></span>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <!-- image and description -->


    </a-col>
  </a-row>
</template>
<style>
</style>