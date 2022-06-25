<script setup>
const props = defineProps(["partnerCardInfoProps"]);
let partnerCardInfo = props.partnerCardInfoProps;
</script>
<template>
    <div class="place_card">
        <div class="for_img"> <img :src="partnerCardInfo.image" alt="" /></div>

        <div class="for_text">
            {{ partnerCardInfo.partnerName }}
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