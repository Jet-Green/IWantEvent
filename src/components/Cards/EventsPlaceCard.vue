<script setup>
import { ref, reactive } from "vue";

let placeCardInfo = reactive({
  image:
    "http://udmsro.ru/UserFiles/ContentFiles/ProfActivity/thumb_2018-9-19_12-39-35_%D0%9B%D0%B5%D0%B4%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%9F%D0%9E%D0%A1%D0%9B%D0%95_9.jpg",
  placeName: "Глазов Арена",
  capacity: 2500,
});
</script>
<template>
  <div class="place_card">
    <a-badge-ribbon :text="placeCardInfo.capacity + ' мест'" color="primary" style="font-size:10px">
      <div></div>
    </a-badge-ribbon>
    <div class="for_img"> <img :src="placeCardInfo.image" alt="" /></div>

    <div class="for_text">
      {{ placeCardInfo.placeName }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.place_card {
  margin: 8px;
  width: 120px;
  aspect-ratio: 1;
  box-sizing: border-box;
  font-size: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  .for_img {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    border-radius: 8px 8px 0 0;
    img {
      height: 100%;
    }
  }
  .for_text {
    height: 10%;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
}
</style>