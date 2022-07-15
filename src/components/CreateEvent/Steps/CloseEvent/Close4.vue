<script setup>
import { reactive, ref } from "vue";

import PartnerCard from "../../../../components/Cards/PartnerCard.vue";
import PartnerFilter from "../../Forms/PartnerFilter.vue";

// все партнёры, приходят из базы данных
let partners = reactive([
  {
    partnerName: "Руки Вверх",
    image: "https://i.scdn.co/image/ab67616d0000b2738d8519ff4ee9a3d773bcecd9",
    services: ["аренда звука"],
  },
  {
    partnerName: "Руки Вниз(текст переполняет)",
    image: "https://i.scdn.co/image/ab67616d0000b2738d8519ff4ee9a3d773bcecd9",
    services: ["аренда света"],
  },
]);
const partnerFilter = ref(false);
const isPartner = ref(false);
// выбранные партнёры, по ним идёт итерация
let selectedPartners = reactive([
  {
    number: 1,
    partnerName: "Руки Вверх",
    image: "https://i.scdn.co/image/ab67616d0000b2738d8519ff4ee9a3d773bcecd9",
    services: "",
  },
]);

function addPartner() {
  let number = selectedPartners[selectedPartners.length - 1].number;
  selectedPartners.push({
    number: number + 1,
    partnerName: "",
    image: "",
  });
}
</script>

<template>
  <a-row class="section">
    <a-typography-text
      >Выбери Партнёра (свет, звук, транспорт, охрана ...)
    </a-typography-text>
  </a-row>


  <a-row class="section" style="display: flex; justify-content: space-between">
    <a-col>
      <a-typography-text>Партнер</a-typography-text>
      <a-switch v-model:checked="isPartner" style="margin-left: 16px"> </a-switch>
    </a-col>
    <a-col v-if="isPartner" :span="12"> <a-input placeholder="Поиск"></a-input></a-col>
    <a-col v-if="isPartner" style="display: flex">
      <a-button
        :danger="partnerFilter"
        type="primary"
        shape="round"
        @click="partnerFilter = !partnerFilter"
        style="display: flex; align-items: center; margin: 0 0 0 8px"
      >
        <span class="mdi mdi-24px mdi-tune-variant"></span>
      </a-button>
      <span class="mdi mdi-24px mdi-information-outline" style="margin-left: 16px"></span
    ></a-col>
  </a-row>


  <div v-if="isPartner">
    <div v-if="!partnerFilter">
      <div>
        <a-row style="display: flex; flex-wrap: wrap">
          <PartnerCard
            v-for="(card, index) in selectedPartners"
            :key="index"
            :partnerCardInfoProps="card"
          />
          <div class="card last-card">
            <div class="card-background">
              <span
                class="mdi mdi-48px mdi-plus"
                style="height: 48px; width: 48px"
              ></span>
            </div>
            <div class="content" style="text-align: center">Добавьте партнера</div>
          </div>
        </a-row>

        <div class="section">
          <a-button type="link" @click="addPartner"> Добавьте ещё + </a-button>
        </div>
      </div>
    </div>
    <div v-else><PartnerFilter @hide-filter="hideArtistFilter" /></div>
  </div>
</template>
<style lang="scss" scoped>
// для отделения от другого контента
.section {
  margin-top: 16px;
  margin-bottom: 16px;
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
  margin-top: 8px;
}

.card .content {
  position: relative;
  z-index: 1;

  .content {
    margin: 8px;
  }
}

.card-background {
  display: flex;
  justify-content: center;
  align-items: center;

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
</style>
