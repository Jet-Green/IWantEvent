<script setup></script>

<template>
  <a-row type="flex" justify="space-between" class="section">
    <a-typography-text style="margin-bottom: 16px">На этом шаге вы можете воспользоваться помощью организатора или
      создать
      мероприятие сами.
    </a-typography-text>
    <a-col>
      <a-typography-text>Организатор</a-typography-text>
      <a-switch style="margin-left: 16px;">
      </a-switch>
    </a-col>
    <a-col :span="12">
      <a-input></a-input>
    </a-col>
    <a-col class="container">
      <a-button type="primary" shape="round" style="display: flex; align-items: center; margin: 0 0 0 8px">
        <span class="mdi mdi-24px mdi-tune-variant"></span>
      </a-button>
      <span class="mdi mdi-24px mdi-information-outline" style="margin-left: 16px;"></span>
    </a-col>
  </a-row>
  <a-typography-text>На втором этапе важно выбрать место проведения и нанять ведущего</a-typography-text>
  <a-row type="flex" justify="space-between" class="section">
    <a-col>
      <a-typography-text>
        Место проведения
      </a-typography-text>
      <a-switch style="margin-left: 16px;"></a-switch>
    </a-col>
    <a-col :span="12">
      <a-input></a-input>
    </a-col>
    <a-col class="container">
      <a-button type="primary" shape="round" style="display: flex; align-items: center; margin: 0 0 0 8px">
        <span class="mdi mdi-24px mdi-tune-variant"></span>
      </a-button>
      <span class="mdi mdi-24px mdi-information-outline" style="margin-left: 16px;"></span>
    </a-col>
  </a-row>
  <a-checkbox>Выбрать все места проведения</a-checkbox>
  <a-row type="flex" justify="space-between" class="section">
    <a-col>
      <a-typography-text>
        Ведущий
      </a-typography-text>
      <a-switch style="margin-left: 16px;"></a-switch>
    </a-col>
    <a-col :span="12">
      <a-input></a-input>
    </a-col>
    <a-col class="container">
      <a-button type="primary" shape="round" style="display: flex; align-items: center; margin: 0 0 0 8px">
        <span class="mdi mdi-24px mdi-tune-variant"></span>
      </a-button>
      <span class="mdi mdi-24px mdi-information-outline" style="margin-left: 16px;"></span>
    </a-col>
  </a-row>
  <a-checkbox>Выбрать всех ведущих</a-checkbox>
</template>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.section {
  margin: 16px 0 16px 0;
}
</style>