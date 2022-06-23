<script setup>
</script>

<template>
  <a-typography-paragraph
    :ellipsis="ellipsis"
    content="Выберите тип мероприятия, дату, время и ожидаемое количество гостей."
    style="margin: 20px 0 20px 0"
  />

  <a-row class="ma-16">
    <a-col :xs="8">
      <span style="line-height: 32px">Тип мероприятия:</span>
    </a-col>
    <a-col :xs="16">
      <a-select
        placeholder="Свадьба"
        style="width: 120px"
        @focus="focus"
        @change="handleChange"
      >
        <a-select-option value="fest">Свадьба</a-select-option>
      </a-select></a-col
    >
  
  </a-row>

  <a-row class="ma-16">
    <a-col :xs="24" :sm="8"> <span style="line-height: 32px">Дата:</span> </a-col>
    <a-col :xs="12" :sm="8">
      <span style="opacity: 0.6; margin-right: 8px">Hачалo </span>
      <a-space direction="vertical" :size="12">
        <a-date-picker :format="dateFormat" placeholder="2022-06-28" />
      </a-space>
    </a-col>
    <a-col :xs="12" :sm="8">
      <span style="opacity: 0.6; margin-right: 8px">Конец </span>
      <a-space direction="vertical" :size="12">
        <a-date-picker
          :format="dateFormat"
          placeholder="2022-06-28"
        /> </a-space
    ></a-col>
  </a-row>
  <a-row class="ma-16">
    <a-col :xs="24" :sm="8"> <span style="line-height: 32px">Время:</span></a-col>
    <a-col :xs="12" :sm="8">
      <span style="opacity: 0.6; margin-right: 8px">Hачалo </span>
      <a-time-picker format="HH:mm" placeholder="17:00" />
    </a-col>
    <a-col :xs="12" :sm="8">
      <span style="opacity: 0.6; margin-right: 8px">Конец </span>
      <a-time-picker format="HH:mm" placeholder="20:00" />
    </a-col>
  </a-row>
  <a-row class="ma-16">
    <a-col :xs="8"
      ><span style="line-height: 32px">Количество гостей:</span></a-col
    >
    <a-col :xs="16">
      <a-input-number type="number"  min="1">
      
      </a-input-number>
       <span style="opacity: 0.6; margin-left: 8px">чел. </span>
    </a-col>
 
  </a-row>
</template>
<style lang="scss" scoped>
.ma-16 {
  margin: 16px;
}
</style>
