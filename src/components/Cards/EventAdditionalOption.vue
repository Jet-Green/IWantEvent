<script setup>
// to use required image you need add to this component v-bind:image"'one'" or "'two'" or "'three'" (notice that you must send string)
import { reactive, ref } from "vue";
let props = defineProps({ image: String });
let image = props.image;
let AdditionalOptions = reactive({
  one: "https://new-variant.ru/wp-content/uploads/2020/02/1-56.jpg",
  two:
    "https://kkaravaev.com/wa-data/public/shop/products/69/26/12669/images/20932/20932.1200.jpg",
  three: "https://mediasole.ru/data/images/338/338417/2.jpg",
});
</script>
<template>
  <div class="for_img" v-if="image === 'one'">
    <img :src="AdditionalOptions.one" alt="" />
  </div>
  <div class="for_img" v-else-if="image === 'two'">
    <img :src="AdditionalOptions.two" alt="" />
  </div>
  <div class="for_img" v-else>
    <img :src="AdditionalOptions.three" alt="" />
  </div>
</template>
<style lang="scss" scoped>
.for_img {
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
   height: 20vh;
    width: 20vw;
  border-radius: 8px 8px 0 0;
  img {
    height: 20vh;
    width: 20vw;
  }
}
</style>
