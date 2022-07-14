<script setup>
// to use required image you need add to this component v-bind:image"'one'" or "'two'" or "'three'" (notice that you must send string)(but not now)
import { ref } from "vue";
let image = ref(
  "https://kkaravaev.com/wa-data/public/shop/products/69/26/12669/images/20932/20932.1200.jpg"
);
let text = ref("Мерч + 500 руб");
</script>
<template>
  <div class="place_card">
    <div class="for_img">
      <img :src="image" alt="no internet(" />
    </div>
    <div class="for_text">
      {{ text }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.place_card {
  margin: 8px;
  width: 160px;
  height: 160px;
  aspect-ratio: 1;
  box-sizing: border-box;
  font-size: 12px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  .for_img {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 8px 8px 0 0;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .for_text {
    height: 25%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
}
</style>
