<script setup>
import { reactive, ref } from "vue";
import ArtistCard from "../../../../components/Cards/ArtistCard.vue";
import ArtistFilter from "../../Forms/ArtistFilter.vue";

let selectedArtists = reactive([
  {
    number: 1,
    artistName: "Руки Вверх",
    image: "https://i.scdn.co/image/ab67616d0000b2738d8519ff4ee9a3d773bcecd9",
  },
  {
    number: 2,
    artistName: "Руки Вниз(текст переполняет)",
    image: "https://i.scdn.co/image/ab67616d0000b2738d8519ff4ee9a3d773bcecd9",
  },
]);

const artistFilter = ref(false);

const hideArtistFilter = () => {
  artistFilter.value = false;
};

function addArtist() {
  let number = selectedArtists[selectedArtists.length - 1].number;
  selectedArtists.push({
    number: number + 1,
    artistName: "",
    image: "",
  });
}
</script>

<template>
  <a-row class="section" style="display: flex; justify-content: space-between">
    <a-col><a-typography-text>Выбери артиста</a-typography-text></a-col>
    <a-col :span="12"> <a-input placeholder="Начните водить имя"></a-input></a-col>
    <a-col style="display:flex">
      <a-button
        :danger="artistFilter"
        type="primary"
        shape="round"
        @click="artistFilter = !artistFilter"
        style="display: flex; align-items: center; margin: 0 0 0 8px"
      >
        <span class="mdi mdi-24px mdi-tune-variant"></span>
      </a-button>
      <span
        class="mdi mdi-24px mdi-information-outline"
        style="margin-left: 16px"
      ></span
    ></a-col>
  </a-row>
  <div v-if="!artistFilter">
    <a-row style="display: flex; flex-wrap: wrap">
      <ArtistCard
        v-for="(card, index) in selectedArtists"
        :key="index"
        :artistCardInfoProps="card"
      />
      <div class="card last-card">
        <div class="card-background">
          <span
            class="mdi mdi-48px mdi-plus"
            style="height: 48px; width: 48px"
          ></span>
        </div>
        <div class="content" style="text-align: center">
          Добавьте своего артиста
        </div>
      </div>
    </a-row>

    <div class="section">
      <a-button type="link" @click="addArtist"> Добавьте ещё + </a-button>
    </div>
  </div>
  <div v-else><ArtistFilter @hide-filter="hideArtistFilter" /></div>
</template>
<style lang="scss" scoped>
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