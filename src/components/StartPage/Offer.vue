<script setup>
import router from "../../router";

function createEvent() {
  router.push("/create-event");
}
</script>
<template>
  <a-col :xs="24">
    <div class="background">
      <a-row type="flex" justify="center" style="padding: 16px">
        <a-col :span="10" :xs="24" :md="12">
          <div>
            <a-typography-title>
              Организуй свой концерт в твоем городе!
            </a-typography-title>
            <a-typography-title :level="5">
              Добро пожаловать в систему организации концертов. <br />
              Купи билет на будущий концерт в своём городе! <br />
              Пригласи друзей! <br />
              Наслаждайся моментом!
            </a-typography-title>
          </div>
          <div>
            <a-button @click="createEvent" type="primary" shape="round">
              Создать концерт
            </a-button>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-col>
</template>

<style lang="scss" scoped>
.background {
  background: url("../../assets/images/forOffers.jpeg") no-repeat;
  background-size: cover;
}
</style>
