<script setup>
import { reactive, ref } from "vue";

const state = reactive({
  data: [
    { value: "Музыкант" },
    { value: "Танцор" },
    { value: "Аниматор" },
  ],
 
});
const value1 = ref([20, 50]);
const value2 = ref([20, 50]);
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
</script>
<template>
  <a-divider style="height: 2px; background-color: #c0004e" />
  <a-row>
    <a-typography-title :level="3">Выбрать артиста</a-typography-title>
  </a-row>
  <a-row :gutter="16" class="ma-16">
    <a-col :xs="24" :sm="8" style="display: flex; flex-direction: column"
      >Сортировать
      <a-select @focus="focus" @change="handleChange" value="down">
        <a-select-option value="up">По возрастанию цены</a-select-option>
        <a-select-option value="down">По убыванию цены</a-select-option>
      </a-select>
    </a-col>
      <a-col :xs="24" :sm="8"
      >Стоимость
      <a-row>
        <a-col :xs="12">
          <a-input v-model:value="value1[0]" prefix="от" suffix="руб"></a-input>
        </a-col>
        <a-col :xs="12">
          <a-input v-model:value="value1[1]" prefix="до" suffix="руб"></a-input>
        </a-col>
        <a-col :xs="24">
          <a-slider v-model:value="value1" range />
        </a-col>
      </a-row>
    </a-col>
    <a-col :xs="24" :sm="8"
      >Жанры
      <a-select
        v-model:value="value"
        mode="multiple"
        style="width: 100%"
        placeholder="Шансон"
        :options="
          [...Array(25)].map((_, i) => ({
            value: (i + 10).toString(36) + (i + 1),
          }))
        "
        @change="handleChange"
      ></a-select>
    </a-col>
  </a-row>
  <a-row :gutter="16" class="ma-16">
      <a-col :xs="24" :sm="8" style="display: flex; flex-direction: column"
      >Город
      <a-select @focus="focus" @change="handleChange" value="city">
       <a-select-option value="city">Выбрать город</a-select-option>
        <a-select-option value="up">Москва</a-select-option>
        <a-select-option value="down">Глазов</a-select-option>
      </a-select>
    </a-col>
    <a-col :xs="24" :sm="8"
      >Тип артиста
      <a-select
        v-model:value="state.value"
        mode="multiple"
        style="width: 100%"
        placeholder="Музыкант"
        :options="state.data"
        @change="handleChange"
      ></a-select>
    </a-col>
    <a-col :xs="24" :sm="8"
      >Оснащение
      <a-select
        v-model:value="value"
        mode="multiple"
        style="width: 100%"
        placeholder="Микрофон"
        :options="
          [...Array(25)].map((_, i) => ({
            value: (i + 10).toString(36) + (i + 1),
          }))
        "
        @change="handleChange"
      ></a-select>
    </a-col>
  </a-row>

  <a-row type="flex" justify="center">
    <a-button
      @click="$emit('hideFilter')"
      type="primary"
      shape="round"
      style="display: flex; align-items: center; margin: 0 0 0 8px"
    >
      Показать
    </a-button>
  </a-row>
  <a-divider style="height: 2px; background-color: #c0004e" />
</template>

<style lang="scss" scoped>
.ant-slider {
  margin-bottom: 16px;
}
</style>