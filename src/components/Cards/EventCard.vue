<script setup>
let props = defineProps({
  image: String,
  eventName: String,
  fixedWidth: Boolean
})

</script>
<template>
  <div class="card" :style="props.fixedWidth ? { 'width': '170px' } : {}">
    <div class="for_img"> <img :src="props.image" alt="" /></div>

    <div class="for_text">
      {{ props.eventName }}
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
</style>