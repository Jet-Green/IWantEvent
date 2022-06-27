<script setup>
import { reactive, ref } from "vue";

const state = reactive({
  data: [
    { value: "Пражская" },
    { value: "Рижская" },
    { value: "Комсомольская" },
  ],
  value: ["Пражская"],
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
    <a-typography-title :level="3">Выбрать место</a-typography-title>
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
      >Станция метро
      <a-select
        v-model:value="state.value"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
        :options="state.data"
        @change="handleChange"
      ></a-select>
    </a-col>
    <a-col :xs="24" :sm="8"
      >Вид кухни
      <a-select
        v-model:value="value"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
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
    <a-col :xs="24" :sm="8"
      >Формат места
      <a-select
        v-model:value="value"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
        :options="
          [...Array(25)].map((_, i) => ({
            value: (i + 10).toString(36) + (i + 1),
          }))
        "
        @change="handleChange"
      ></a-select>
    </a-col>
    <a-col :xs="24" :sm="8"
      >Район
      <a-select
        v-model:value="state.value"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
        :options="state.data"
        @change="handleChange"
      ></a-select>
    </a-col>
    <a-col :xs="24" :sm="8"
      >Еда
      <a-select
        v-model:value="value"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
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
      >Вместимость
      <a-row>
        <a-col :xs="12">
          <a-input v-model:value="value2[0]" prefix="от" suffix="чел"></a-input>
        </a-col>
        <a-col :xs="12">
          <a-input v-model:value="value2[1]" prefix="до" suffix="чел"></a-input>
        </a-col>
        <a-col :xs="24">
          <a-slider v-model:value="value2" range />
        </a-col>
      </a-row>
    </a-col>
    <a-col :xs="24" :sm="8"
      >Оснащение
      <a-select
        v-model:value="value"
        mode="multiple"
        style="width: 100%"
        placeholder="Please select"
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