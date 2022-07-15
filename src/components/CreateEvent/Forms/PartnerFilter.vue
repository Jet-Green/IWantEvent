<script setup>
import { reactive, ref } from "vue";

const state = reactive({
  data: [{ value: "свет" }, { value: "транспорт" }, { value: "туалет" }],
  value: ["транспорт"],
});
const value1 = ref([100, 1000000]);
const value2 = ref([100, 1000000]);
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
</script>
<template>
  <a-divider style="height: 2px; background-color: #c0004e" />
  <a-row>
    <a-typography-title :level="3">Выбрать партнера</a-typography-title>
  </a-row>

  <a-row :gutter="16" class="ma-16">
    <a-col :xs="24" :sm="8" style="display: flex; flex-direction: column"
      >Сортировать
      <a-select @focus="focus" @change="handleChange" value="down">
        <a-select-option value="up">По возрастанию цены</a-select-option>
        <a-select-option value="down">По убыванию цены</a-select-option>
      </a-select>
    </a-col>
    <a-col :xs="24" :sm="8" style="display: flex; flex-direction: column">
      Город
      <a-select @focus="focus" @change="handleChange" value="up">
        <a-select-option value="up">Выбрать город</a-select-option>
        <a-select-option value="down">Глазов</a-select-option>
      </a-select>
    </a-col>
    <a-col :xs="24" :sm="8" style="display: flex; flex-direction: column">
      Тип партнёра
      <a-select @focus="focus" @change="handleChange" value="up">
        <a-select-option value="up">Физическое лицо</a-select-option>
        <a-select-option value="down">Самозанятый</a-select-option>
        <a-select-option value="down">ИП</a-select-option>
        <a-select-option value="down">Юр. Лицо</a-select-option>
      </a-select>
    </a-col>
  </a-row>

  <a-row :gutter="16" class="ma-16">
    <a-col :xs="24" :sm="8" style="display: flex; flex-direction: column">
      Уточните сферу деятельности
      <a-select @focus="focus" @change="handleChange" value="down">
        <a-select-option value="up">Выбрать сферу</a-select-option>
        <a-select-option value="down">Аренда</a-select-option>
      </a-select>
    </a-col>
    <a-col :xs="24" :sm="8" style="display: flex; flex-direction: column">
      Тип аренды
      <a-select @focus="focus" @change="handleChange" value="up">
        <a-select-option value="up">Свет</a-select-option>
        <a-select-option value="down">Звук</a-select-option>
        <a-select-option value="down">Экраны/Проекторы</a-select-option>
        <a-select-option value="down">Сцены/Подиумы</a-select-option>
        <a-select-option value="down">Интерактивное оборудование</a-select-option>
        <a-select-option value="down">Мебель</a-select-option>
        <a-select-option value="down">Туалет</a-select-option>
        <a-select-option value="down">Шатры/Тенты</a-select-option>
        <a-select-option value="down">Генератор</a-select-option>
        <a-select-option value="down">Душ</a-select-option>
        <a-select-option value="down">Гримёрка</a-select-option>
        <a-select-option value="down">Гардероб</a-select-option>
        <a-select-option value="down">Контейнер</a-select-option>
        <a-select-option value="down">Склад</a-select-option>
        <a-select-option value="down">Рефрижератор</a-select-option>
        <a-select-option value="down">Климат</a-select-option>
        <a-select-option value="down">Рации</a-select-option>
        <a-select-option value="down">Спорт инвентарь</a-select-option>
        <a-select-option value="down">Атракционы</a-select-option>
        <a-select-option value="down">Костюмы</a-select-option>
      </a-select>
    </a-col>
    <a-col :xs="24" :sm="8" style="display: flex; flex-direction: column"
      >Дополнительно
      <a-select @focus="focus" @change="handleChange" value="up">
        <a-select-option value="up">С доставкой</a-select-option>
        <a-select-option value="down">Без залога</a-select-option>
      </a-select>
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
      </a-row>
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
