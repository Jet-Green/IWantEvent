<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, reactive, computed, onMounted } from "vue";
import { useAppStateStore } from "@/stores/appState";
import { useRouter } from "vue-router";

let router = useRouter()
const appState = useAppStateStore();

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

function toEventPage() {
  router.push({ name: 'EventPage', params: { type: 'poster' } })
}

const postsCount = computed(() => {
  return carouselWidth.value / 270;
});

onMounted(() => {
  window.addEventListener("resize", onResize);
  onResize();
});
</script>

<template>
  <a-col :span="20">
    <a-typography-title :level="2"> Афиша </a-typography-title>
    <a-row>
      <a-col>
        <div ref="carousel_container"></div>
        <Carousel :itemsToShow="postsCount" :autoplay="25000" snapAlign="start" :wrapAround="true">
          <Slide v-for="(cardsGroup, index) in cards" :key="index" class="unselectable">
            <div class="carousel__item" style="display: flex; flex-wrap: wrap">
              <div class="card" :class="cardsGroup.length == 1 ? 'first_card' : ''" v-for="(card, i) in cardsGroup"
                :key="i" @click="toEventPage">
                <div class="for_img">
                  <img src="https://www.soyuz.ru/public/uploads/files/3/6977740/20170323104022e366171b00.jpg"
                    alt="event" />
                </div>
                <div class="for_text">
                  БИ-2
                </div>
              </div>
              <!-- <div class="card" :class="cardsGroup.length == 1 ? 'first_card' : ''" v-for="(card, i) in cardsGroup"
                :key="i" @click="toEventPage">
                <a-image src="https://www.soyuz.ru/public/uploads/files/3/6977740/20170323104022e366171b00.jpg"
                  :preview="false" style="aspect-ratio: 1; object-fit: cover"></a-image>
              </div> -->
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </a-col>
    </a-row>
    <a-row type="flex" justify="end" style="margin-top: 8px">
      <a-col style="display: flex; flex-direction: row">
        <div v-if="!appState.isMobile">
          <a-button type="primary" shape="round"> Показать все </a-button>
        </div>
        <div v-else>
          <a-button type="primary" shape="round" style="display: flex; align-items: center">
            <span class="mdi mdi-24px mdi-arrow-up-drop-circle-outline"></span>
          </a-button>
        </div>

        <a-button type="primary" shape="round" style="display: flex; align-items: center; margin: 0 0 0 8px">
          <span class="mdi mdi-24px mdi-tune-variant"></span>
        </a-button>
      </a-col>
    </a-row>
  </a-col>
</template>
<style lang="scss">
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

.first_card {
  .for_text {
    font-size: 17px !important;
  }
}

.card {
  margin: 8px;
  aspect-ratio: 1;
  box-sizing: border-box;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  border-radius: 8px;

  .for_img {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85%;
    border-radius: 8px 8px 0 0;

    img {
      height: 100%;
    }
  }

  .for_text {
    height: 15%;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
}

.carousel__prev,
.carousel__next {
  background-color: white;
  box-sizing: content-box;
  box-shadow: 1px 2px 2px #c0004e;
  color: black;

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
