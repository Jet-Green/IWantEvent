<script setup>
const props = defineProps(["artistCardInfoProps"]);
let artistCardInfo = props.artistCardInfoProps;
</script>
<template>
  <div class="artist_card">
    <div class="for_img"> <img :src="artistCardInfo.image" alt="" /></div>

    <div class="for_text">
      {{ artistCardInfo.artistName }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
.artist_card {
  margin: 8px;
  width: 120px;
  height: 120px;
  aspect-ratio: 1;
  box-sizing: border-box;
  font-size: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  .for_img {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px 8px 0 0;

    img {
      width:100%;
    }
  }

  .for_text {
    font-weight: bold;
    text-align: center;
    padding: 2px;
    text-transform: uppercase;
  }
}
</style>