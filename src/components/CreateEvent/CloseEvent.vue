<script setup></script>

<template>
  <a-row>
    <a-col>
      <a-steps :current="0">
        <a-step />
        <a-step />
        <a-step />
        <a-step />
        <a-step />
      </a-steps>

      <a-typography-paragraph
        :ellipsis="ellipsis"
        content=" На первом этапе важно выбрать тип мероприятия, дату и время, а так же обозначить ожидаемое количество гостей."
        style="margin: 20px 0 20px 0"
      />
    </a-col>
  </a-row>
  <a-row>
    <a-col>
      Выберите форму мероприятия:
      <a-select
        ref="select"
        v-model:value="value1"
        style="width: 120px"
        @focus="focus"
        @change="handleChange"
      >
        <a-select-option value="fest">Фестиваль</a-select-option>
      </a-select>
    </a-col>
  </a-row>
  <a-row>
    <a-col>
      Дата планируемого мероприятия:
      <a-space direction="vertical" :size="12">
        <a-date-picker v-model:value="value1" :format="dateFormat" />
      </a-space>
    </a-col>
  </a-row>
</template>
