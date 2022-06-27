<script setup>
import { reactive } from 'vue'

import PartnerCard from '../../../../components/Cards/PartnerCard.vue'

// все партнёры, приходят из базы данных
let partners = reactive([{
  partnerName: 'Руки Вверх',
  image: 'https://i.scdn.co/image/ab67616d0000b2738d8519ff4ee9a3d773bcecd9',
  services: ['аренда звука']
}, {
  partnerName: 'Руки Вниз(текст переполняет)',
  image: 'https://i.scdn.co/image/ab67616d0000b2738d8519ff4ee9a3d773bcecd9',
  services: ['аренда света']
}])

// выбранные партнёры, по ним идёт итерация 
let selectedPartners = reactive([{
  number: 1,
  partnerName: 'Руки Вверх',
  image: 'https://i.scdn.co/image/ab67616d0000b2738d8519ff4ee9a3d773bcecd9',
  services: ''
}])

function addPartner() {
  let number = selectedPartners[selectedPartners.length - 1].number
  selectedPartners.push({
    number: number + 1,
    partnerName: '',
    image: ''
  })
}
</script>

<template>
  <a-row class="section">
    <a-typography-text>Также важно определиться с Партнёрами. Это, к примеру, свет, звук, охрана и прочие сопутствующие
      сферы деятельности</a-typography-text>
  </a-row>
  <div v-for="(card, index) in selectedPartners" :key="index" class="section">
    <!-- пока без отступов, потому что идею могут переработать -->
    <a-row type="flex" justify="space-between">
      <a-col :span="24" :sm="5">
        <a-typography-text>Партнёр №{{ card.number }}</a-typography-text>
      </a-col>
      <!-- фильтры для поиска -->
      <a-col :span="12" :sm="8">
        <a-input placeholder="Начните вводить имя" v-model:value="card.partnerName">
        </a-input>
      </a-col>
      <a-col :span="12" :sm="8">
        <a-select style="min-width: 100px;">
          <a-select-option value="аренда звука">Аренда звука</a-select-option>
          <a-select-option value="аренда света">Аренда света</a-select-option>
        </a-select>
      </a-col>
      <!-- фильтры для поиска -->
      <a-col style="display: flex; flex-direction: row;">
        <a-button type="primary" shape="round" style="display: flex; align-items: center; margin: 0 0 0 8px">
          <span class="mdi mdi-24px mdi-tune-variant"></span>
        </a-button>
        <span class="mdi mdi-24px mdi-information-outline" style="margin-left: 16px"></span>
      </a-col>
    </a-row>
    <!-- тут будут всё партнеры, и мы будем в них искать -->
    <a-row>
      <a-col v-for="(partner, index) in partners" :key="index">
        <PartnerCard v-if="partner.partnerName.toLowerCase().includes(card.partnerName.toLowerCase())"
          :partnerCardInfoProps="partner" />
      </a-col>
      <!-- добавить своего -->
      <a-col>
        <div class="card last-card">
          <div class="card-background">
            <span class="mdi mdi-48px mdi-plus" style="height: 48px; width: 48px"></span>
          </div>
          <div class="content" style="text-align: center">Добавьте своего партнёра</div>
        </div>
      </a-col>
      <!-- добавить своего -->
    </a-row>
  </div>
  <div class="section">
    <a-button type="link" @click="addPartner">
      Добавьте ещё +
    </a-button>
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