<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import EventAdditionalOption from '../components/EventPage/EventAdditionalOption.vue'
import AcceptedBy from '../components/EventPage/AcceptedBy.vue'
import PlacesScheme from '../components/EventPage/PlacesScheme.vue'
import Map from '../components/EventPage/Map.vue'
import EventCard from '../components/Cards/EventCard.vue'

let route = useRoute();
let type = route.params.type;

let current = ref(100000);
let total = ref(200000);
</script>
<template>
  <!-- wrapper -->
  <a-row class="mt-8" type="flex" justify="center">
    <a-col :xs="23" :md="16">
      <!-- header -->
      <a-row>
        <a-col :span="12">
          <a-typography-title v-if="type == 'event'" :level="5">Собираемые / БИ-2 30.05.2023</a-typography-title>
          <a-typography-title v-else :level="5">Афиша / Руки Вверх 30.05.2023</a-typography-title>
        </a-col>
        <a-col :span="12" style="display: flex; justify-content: end; align-items: center">
          Роль
          <a-button class="ml-8">Зритель</a-button>
        </a-col>
      </a-row>
      <!-- header -->

      <!-- image and description -->
      <a-row class="mt-16" type="flex" justify="space-between">
        <a-col :xs="24" :md="12">
          <a-image src="https://www.soyuz.ru/public/uploads/files/3/6977740/20170323104022e366171b00.jpg"
            :preview="false" style="aspect-ratio: 1 !important; border-radius: 30px" class="mb-16">
          </a-image>
        </a-col>
        <a-col :xs="24" :md="11">
          <a-typography-title :level="2">Заголовок</a-typography-title>
          <a-typography-title :level="4">Подзаголовок</a-typography-title>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore,
            doloremque doloribus molestiae eligendi repudiandae sint. Blanditiis nisi,
            consequuntur perferendis mollitia est nesciunt delectus nulla laboriosam
            itaque, assumenda repudiandae, repellendus fuga! Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Minima ea error fuga, explicabo enim nobis
            dolor! Saepe, quas a. Dolores laudantium adipisci dignissimos voluptates ut
            praesentium esse consectetur, numquam sint! Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Adipisci sint unde voluptatibus sapiente
            recusandae! Ipsa delectus vitae repellendus voluptas incidunt quas, at earum
            perspiciatis id obcaecati voluptates. Obcaecati, eligendi sequi. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quos est sint, voluptatibus
            repellat culpa fuga eos cum enim dolores ad et temporibus, cumque repudiandae
            vel doloribus tempora nihil iusto veniam?
          </div>
          <a-row type="flex" justify="space-between" class="mt-8">
            <a-col :span="12"> <b>Дата: </b>dd-mm-yyyy </a-col>
            <a-col :span="12" type="flex" justify="start"> <b>Время: </b>hh-mm </a-col>
          </a-row>
          <b>Адрес: </b>город, улица, дома, квартира
          <div style="display: flex; justify-content: end; font-size: 30px">
            <span class="mdi mdi-heart-outline"></span>
            <a-divider type="vertical" style="height: 30px" />
            <span class="mdi mdi-bookmark-outline"></span>
          </div>
          <a-row>
            <a-col>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
      <!-- image and description -->

      <div v-if="type == 'event'">
        <a-typography-title :level="5">Собрано {{ current }} из {{ total }} руб.</a-typography-title>
        <a-progress trailColor="#b4b5b8" style="height: 40px" :percent="(current / total) * 100"
          :format="(percent) => ``" />
        <a-typography-paragraph>
          Минимальная сумма 1500 руб. <br />
          Осталось дней: 20
        </a-typography-paragraph>
        <a-typography-title :level="5">Дополнительные опции</a-typography-title>
        <a-row>
          <!-- опции -->
          <a-col v-for="i in 5">
            <EventAdditionalOption />
          </a-col>
          <!-- опции -->
        </a-row>
        <a-row type="flex" justify="space-between" class="mt-4">
          <a-col>
            <a-button type="primary" shape="round">Поддержать сбор</a-button>
          </a-col>
          <a-col>
            <a-button type="link">Показать все опции</a-button>
          </a-col>
        </a-row>
        <a-typography-title :level="5" class="mt-16">Подтвердились</a-typography-title>
        <a-row>
          <!-- подтверждённые -->
          <a-col v-for="i in 4" class="ma-8">
            <AcceptedBy />
          </a-col>
          <!-- подтверждённые -->
        </a-row>
        <a-typography-title :level="5">Собираемые рядом</a-typography-title>
        <a-row>
          <!-- собираемые рядом -->
          <a-col v-for="i in 5">
            <EventCard @click="toEventPage"
              image="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OP3VXEFN5ZGXPJQTY3PW63XLI4.png"
              eventName="БИ-2" :fixedWidth="true" />
          </a-col>
          <!-- собираемые рядом -->
        </a-row>
      </div>


      <div v-else>
        <a-button type="primary" shape="round">Купить билет</a-button>
        <a-typography-title :level="5" class="mt-16">Схема зала</a-typography-title>
        <!-- <a-row> -->
        <!-- СХЕМА ЗАЛА -->
        <PlacesScheme />
        <!-- СХЕМА ЗАЛА -->
        <!-- </a-row> -->
        <a-typography-title :level="5" class="mt-16">Как добраться</a-typography-title>
        <a-row>
          <!-- КАК ДОБРАТЬСЯ -->
          <Map />
          <!-- КАК ДОБРАТЬСЯ -->
        </a-row>
        <a-typography-title :level="5" class="mt-16">Рекомендуем</a-typography-title>
        <a-row>
          <!-- рекомендуемые -->
          <a-col v-for="i in 5">
            <EventCard @click="toEventPage"
              image="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OP3VXEFN5ZGXPJQTY3PW63XLI4.png"
              eventName="БИ-2" :fixedWidth="true" />
          </a-col>
          <!-- рекомендуемые -->
        </a-row>
      </div>
    </a-col>
  </a-row>
</template>
<style>
</style>
