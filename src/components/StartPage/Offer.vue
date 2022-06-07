<script setup>
import { ref } from "vue";
import image from "@/assets/images/forOffers.jpeg";
import router from "../../router";

ref(image);

function createEvent() {
  router.push("/create-event");
}
</script>

<template>
  <div>
    <v-parallax height="250" :src="image">
      <v-container class="h-100">
        <v-row class="h-100 pa-0">
          <v-col> </v-col>
          <v-col cols="12" md="10" class="col-8 d-flex flex-column align-center pa-0">
            <div class="offers_text">
              <span class="text-body-1 text-sm-h6 text-md-h4 font-weight-black"
                >Организуй свой концерт в твоем городе!</span
              >
              <p class="pa-4 text-body-2 text-md-body-1">
                Добро пожаловать в систему организации концертов. <br />
                Купи билет на будущий концерт в своём городе! <br />
                Пригласи друзей! <br />
                Наслаждайся моментом!
              </p>
            </div>
            <div>
              <v-btn
                @click="createEvent"
                rounded="pill"
                color="accent"
                class="text-body-1"
              >
                Создай концерт
              </v-btn>
            </div>
          </v-col>
        </v-row>

        <!-- <v-btn
      class="down_button "
       size="x-small"
        color="accent"
        variant="outlined"
        icon="mdi-chevron-double-down"
      ></v-btn> -->
      </v-container>
    </v-parallax>
  </div>
</template>

<style lang="scss" scoped></style>
