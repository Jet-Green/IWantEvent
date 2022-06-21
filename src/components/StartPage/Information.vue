<script setup>
</script>
<template>
  <a-row
    type="flex"
    justify="center"
    :gutter="[16, 16]"
    style="margin: 16px"
    :xs="24"
    :sm="20"
  >
    <a-col :xs="24" :sm="12">
      <a-card :bordered="false" class="first_info">
        <p>Путеводитель "Хо-ко" для музыканта организатора или партнера</p>
      </a-card>
    </a-col>

    <a-col :xs="24" :sm="12">
      <a-row type="flex" :gutter="[0, 16]">
        <a-card :bordered="false" class="second_info">
          <p>Топ 10 успешных проектов Хочу концерт!</p>
        </a-card>
        <a-card :bordered="false" class="second_info">
          <p>Новости индустрии Октября 2022</p>
        </a-card>
      </a-row>
    </a-col>
  </a-row>
</template>
<style lang="scss" scoped>
.first_info,
.second_info {
  background-image: url(@/assets/images/background.jpeg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: black;
  font-weight: bold;
  height: 100%;
  width: 100%;
}
.second_info {
  display: flex;
  justify-content: flex-end;
}
.ma-4 {
  margin: 4px;
}
</style>