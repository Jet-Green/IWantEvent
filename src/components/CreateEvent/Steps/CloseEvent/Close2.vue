<script setup>
import { ref } from "vue";
import EventsPlaceCard from "../../../Cards/EventsPlaceCard.vue";
import AddPlace from "../../Forms/AddPlace.vue";
import PlaceFilter from "../../Forms/PlaceFilter.vue";
import PartnerFilter from "../../Forms/PartnerFilter.vue";

let addPlace = ref(false);
let placeFilter = ref(false);
let compereFilter = ref(false);

let isOrganizer = ref(false);
let isPlace = ref(false);
let isCompere = ref(false);

const hidePlaceFilter = () => {
  placeFilter.value = false;
};
const hideCompereFilter = () => {
  compereFilter.value = false;
};

const showModal = () => {
  addPlace.value = true;
};
const closeAddPlaceDialog = () => {
  addPlace.value = false;
};
</script>

<template>
  <div class="pt-16">
    <a-typography-text class="mb-16">Выбери организатора или создай мероприятие сами.
    </a-typography-text>
  </div>

  <!-- ОРГАНИЗАТОР -->
  <div>
    <a-row type="flex" justify="space-between" class="section">
      <a-col>
        <a-typography-text class="mr-16">Организатор</a-typography-text>
        <a-switch v-model:checked="isOrganizer" class="ml-16"> </a-switch>
      </a-col>
      <a-col v-if="isOrganizer" :span="12">
        <a-input />
      </a-col>
      <a-col v-if="isOrganizer" class="container">
        <!-- кнопка фильтра организатора -->
        <a-button type="primary" shape="round" style="display: flex; align-items: center; margin: 0 0 0 8px">
          <span class="mdi mdi-24px mdi-tune-variant"></span>
        </a-button>
        <!-- кнопка фильтра организатора -->

        <span class="mdi mdi-24px mdi-information-outline" style="margin-left: 16px"></span>
      </a-col>
    </a-row>
  </div>
  <!-- ОРГАНИЗАТОР -->

  <a-typography-text>Выбери место проведения и найми ведущего</a-typography-text>

  <!-- МЕСТО ПРОВЕДЕНИЯ -->
  <div>
    <a-row type="flex" justify="space-between" class="section">
      <a-col>
        <a-typography-text class="mr-16"> Место проведения </a-typography-text>
        <a-switch v-model:checked="isPlace"></a-switch>
      </a-col>
      <a-col v-if="isPlace" :span="12">
        <a-input></a-input>
      </a-col>
      <a-col v-if="isPlace" class="container">
        <!-- кнопка фильтра места проведения -->
        <a-button :danger="placeFilter" type="primary" shape="round" @click="placeFilter = !placeFilter"
          style="display: flex; align-items: center; margin: 0 0 0 8px">
          <span class="mdi mdi-24px mdi-tune-variant"></span>
        </a-button>
        <!-- кнопка фильтра места проведения -->

        <span class="mdi mdi-24px mdi-information-outline" style="margin-left: 16px"></span>
      </a-col>
    </a-row>
    <div v-if="isPlace">
      <div v-if="placeFilter">
        <PlaceFilter @hide-filter="hidePlaceFilter" />
      </div>

      <a-row v-else class="cards-container">
        <div v-for="i in 10" :key="i">
          <EventsPlaceCard />
        </div>
        <div class="add_place" @click="showModal">
          Добавь место
          <span class="mdi mdi-48px mdi-plus" style="height: 48px; width: 48px"></span>
        </div>
      </a-row>
    </div>
    <a-checkbox v-if="isPlace">Выбрать все места проведения</a-checkbox>
  </div>
  <!-- МЕСТО ПРОВЕДЕНИЯ -->

  <!-- ВЕДУЩИЙ -->
  <div>
    <a-row type="flex" justify="space-between" class="section">
      <a-col class="mr-16">
        <a-typography-text class="mr-16"> Ведущий </a-typography-text>
        <a-switch v-model:checked="isCompere"></a-switch>
      </a-col>
      <a-col v-if="isCompere" :span="12">
        <a-input></a-input>
      </a-col>
      <a-col v-if="isCompere" class="container">
        <!-- кнопка фильтра ведущего -->
        <a-button :danger="compereFilter" type="primary" shape="round"
          style="display: flex; align-items: center; margin: 0 0 0 8px" @click="compereFilter = !compereFilter">
          <span class="mdi mdi-24px mdi-tune-variant"></span>
        </a-button>
        <!-- кнопка фильтра ведущего -->

        <span class="mdi mdi-24px mdi-information-outline" style="margin-left: 16px"></span>
      </a-col>
    </a-row>
    <!-- если выбрали ведущего -->
    <div v-if="isCompere">
      <div v-if="compereFilter">
        <CompereFilter @hide-filter="hideCompereFilter" />
      </div>
      <div v-else>
        <a-row class="cards-container">
          <a-col v-for="i in 4" :key="i">
            <div v-if="i != 4" class="card">
              <div class="card-background" :style="{
                'background-image':
                  'url(https://www.soyuz.ru/public/uploads/files/3/6977740/20170323104022e366171b00.jpg)',
              }"></div>
              <div class="content">
                <a-typography-title :level="5">Адександр Золототарёв</a-typography-title>
              </div>
            </div>
            <div v-else class="card last-card">
              <div class="card-background" style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  opacity: 1 !impotant;
                ">
                <span class="mdi mdi-48px mdi-plus" style="height: 48px; width: 48px"></span>
              </div>
              <div class="content" style="text-align: center">Добавьте ведущего</div>
            </div>
          </a-col>
        </a-row>
        <a-checkbox v-if="isCompere" style="margin: 8px 0 8px 0">Выбрать всех ведущих</a-checkbox>
      </div>
    </div>
  </div>
  <!-- ВЕДУЩИЙ -->

  <!-- Modal for addPlace -->
  <a-modal v-model:visible="addPlace" title="Добавление площадки" @ok="closeAddPlaceDialog">
    <AddPlace />
  </a-modal>
  <!--End Modal for addPlace  -->
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}

.cards-container {
  display: flex;
  flex-direction: row;
}

.add_place {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 8px;
  width: 120px;
  aspect-ratio: 1;
  box-sizing: border-box;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  &:active {
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.3);
    padding: 2px;
    font-size: 98%;
  }
}

.card {
  position: relative;

  width: 120px;
  aspect-ratio: 1;

  margin: 0 8px 8px 0;
}

.last-card {
  display: flex;
  background: rgb(240, 240, 240);
}

.card .content {
  position: relative;
  z-index: 1;
}

.content {
  margin: 8px;
}

.card-background {
  z-index: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  opacity: 0.75;
  border-radius: 8px;
}

.section {
  margin: 16px 0 16px 0;
}
</style>
