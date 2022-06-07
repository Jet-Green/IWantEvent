<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, reactive, computed, onMounted } from "vue";

const poster = reactive({
  cards: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22,
    23, 24, 25,
  ],
});
let carouselWidth = ref(0);
const carousel_container = ref(null);

const cards = computed(() => {
  let postersGroup = [];
  postersGroup.push([poster.cards[0]]);
  for (let i = 1; i < poster.cards.length - 1; i += 4) {
    postersGroup.push(poster.cards.slice(i, i + 4));
  }
  return postersGroup;
});
// тут будет сортировка и первым элементом будет тот который нужен

let onResize = () => {
  carouselWidth.value = carousel_container.value.clientWidth;
};

const postsCount = computed(() => {
  return carouselWidth.value / 210;
});

onMounted(() => {
  onResize();
});
</script>

<template>
  <a-row type="flex" justify="center">
    <a-col :span="20">
      <a-row>
        <a-col type="flex" justify="start">
          <span class="text-h6 text-md-h4">Афиша</span>
        </a-col>
        <v-col class="justify-end d-flex">
          <v-icon color="accent" icon="mdi-tune-variant"></v-icon>
        </v-col>
      </a-row>
      <a-row class="ma-0 pa-0">
        <a-col class="ma-0 pa-0">
          <div ref="carousel_container" v-resize="onResize"></div>
          <Carousel
            :itemsToShow="postsCount"
            :autoplay="15000"
            snapAlign="start"
            :wrap-around="true"
          >
            <Slide
              v-for="(cardsGroup, index) in cards"
              :key="index"
              class="unselectable"
            >
              <div class="carousel__item d-flex flex-wrap" flat tile>
                <v-card
                  class="card"
                  :class="cardsGroup.length == 1 ? 'first_card' : ''"
                  v-for="(card, i) in cardsGroup"
                  :key="i"
                >
                  <v-img
                    class="bg-white"
                    width="w-100"
                    :aspect-ratio="1"
                    src="https://www.soyuz.ru/public/uploads/files/3/6977740/20170323104022e366171b00.jpg"
                    cover
                  ></v-img>
                </v-card>
              </div>
            </Slide>

            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </a-col>
      </a-row>
      <a-row>
        <a-col> </a-col>
        <a-col class="justify-end d-flex">
          <a-button> Показать все </a-button>
        </a-col>
      </a-row>
    </a-col>
  </a-row>
</template>
<style lang="scss" >
.carousel__item {
  min-width: 200px;
  aspect-ratio: 1/1;
  cursor: pointer;

  .card {
    margin: 3px;
    aspect-ratio: 1/1;
    width: 47%;
    height: 47%;
  }
  .first_card {
    width: 98%;
    height: 98%;
  }
}

.carousel__prev,
.carousel__next {
  background-color: white;
  box-sizing: content-box;
  box-shadow: 1px 2px 2px #c0004e;
  &:active {
    box-shadow: 1px 1px 1px #c0004e;
    font-size: 18px;
  }
}

.unselectable {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
