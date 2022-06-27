<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import { ref, reactive, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAppStateStore } from "../../stores/appState";

const appState = useAppStateStore();
const router = useRouter();

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

function createEvent() {
  router.push("/create-event");
}

const postsCount = computed(() => {
  return carouselWidth.value / 210;
});

onMounted(() => {
  onResize();
  window.addEventListener("resize", onResize);
});
</script>

<template>
  <a-col :span="20">
    <a-typography-title :level="2">Собираемые концерты</a-typography-title>
    <a-row type="flex" justify="center">
      <a-col>
        <div ref="carousel_container"></div>
        <Carousel
          :itemsToShow="postsCount"
          :autoplay="15000"
          snapAlign="start"
          :wrapAround="true"
        >
          <Slide
            v-for="(cardsGroup, index) in cards"
            :key="index"
            class="unselectable"
          >
            <div class="carousel__item" style="display: flex; flex-wrap: wrap">
              <div
                class="card"
                :class="cardsGroup.length == 1 ? 'first_card' : ''"
                v-for="(card, i) in cardsGroup"
                :key="i"
              >
                <a-image
                  src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OP3VXEFN5ZGXPJQTY3PW63XLI4.png"
                  :preview="false"
                  style="aspect-ratio: 1; object-fit: cover"
                ></a-image>
              </div>
            </div>
          </Slide>
          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between" style="margin-top: 8px">
      <a-col>
        <a-button @click="createEvent" type="primary" shape="round">
          Создать концерт
        </a-button>
      </a-col>
      <a-col style="display: flex; flex-direction: row">
        <div v-if="!appState.isMobile">
          <a-button type="primary" shape="round"> Показать все </a-button>
        </div>
        <div v-else>
          <a-button
            type="primary"
            shape="round"
            style="display: flex; align-items: center"
          >
            <span class="mdi mdi-24px mdi-arrow-up-drop-circle-outline"></span>
          </a-button>
        </div>
        <a-button
          type="primary"
          shape="round"
          style="display: flex; align-items: center; margin: 0 0 0 8px"
        >
          <span class="mdi mdi-24px mdi-tune-variant"></span>
        </a-button>
      </a-col>
    </a-row>
  </a-col>
</template>
<style scoped>
.unselectable {
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>
