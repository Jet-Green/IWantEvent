<script setup>
import information1 from "../../assets/images/information-1.jpeg";
import information2 from "../../assets/images/information-2.jpg";
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card
          min-height="150"
          max-height="245"
          class="mx-auto rounded-xl h-100 w-100"
        >
          <v-img
            :src="information1"
            class="white--text align-end rounded-xl h-100 pa-3"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            cover
          >
            <p class="text-white">
              Путеводитель "Хо-ко" для музыканта организатора или партнера
            </p>
            <!-- <p class="text-white">
              Коротко о том как пройти регистрацию, добавить своих партнеров,
              настроить работы в CRM
            </p> -->
          </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column justify-stretch h-100">
          <v-card
            max-height="110"
            class="mx-auto rounded-xl mb-6 bg-yellow w-100 h-100"
          >
            <v-img
              :src="information2"
              class="white--text align-end rounded-xl h-100 pa-3"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              cover
            >
              <p class="text-white">Топ 10 успешных проектов Хочу концерт!</p>
            </v-img>
          </v-card>
          <v-card
            max-height="110"
            class="mx-auto rounded-xl bg-grey w-100 h-100"
          >
            <v-img
              src="https://scorpions-bilety.ru/photos/scorpions_12.jpg"
              class="white--text align-end rounded-xl h-100 pa-3"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              cover
            >
              <p class="text-white">Новости индустрии Октября 2022</p>
            </v-img>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>