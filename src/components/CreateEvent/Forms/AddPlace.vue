<script setup>
import { ref } from "vue";
let isOpenPlace = ref(false);
</script>

<template>
  <a-row class="ma-16">
    <a-col :xs="8"> <span style="line-height: 24px">Тип площадки:</span></a-col>
    <a-col :xs="16">
      Открытая
      <a-switch v-model:checked="isOpenPlace" />
      Личная
    </a-col>
  </a-row>
  <a-row class="ma-16">
    <a-col :xs="8"> <span style="line-height: 32px">Название:</span></a-col>
    <a-col :xs="16">
      <a-input></a-input>
    </a-col>
  </a-row>
  <a-row class="ma-16">
    <a-col :xs="8"> <span style="line-height: 32px">Адрес:</span></a-col>
    <a-col :xs="16">
      <a-input></a-input>
    </a-col>
  </a-row>
  <a-row class="ma-16">
    <a-col :xs="8"> <span style="line-height: 32px">Фотография:</span></a-col>
    <a-col :xs="16">
      <a-upload :multiple="true" :file-list="fileList" @change="handleChange">
        <a-button type="primary" shape="round">
          <span class="mdi px mdi-tray-arrow-up" style="margin-right: 2px"></span>
          Upload
        </a-button>
      </a-upload>
    </a-col>
  </a-row>
</template>