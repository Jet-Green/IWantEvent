<script setup>
import { ref } from 'vue'

const emit = defineEmits(['nextStep'])

let offerCheckboxChecked = ref(false);
let artistName = ref('')
</script>
<template>
  <a-row>
    <a-col :span="24" :sm="14">
      <a-input v-model:value="artistName" size="large" placeholder="Начните вводить имя артиста"
        style="margin: 20px 0 20px 0;" />
    </a-col>
  </a-row>
  <a-row>
    <a-col>
      <a-checkbox v-model:checked="offerCheckboxChecked" style="margin: 0 0 20px 0">
        Принять условия оферты
      </a-checkbox>
    </a-col>
  </a-row>
  <a-button danger shape="round" type="primary" style="margin: 0 0 20px 0" @click="$emit('nextStep')">
    Создать сбор
  </a-button>
</template>