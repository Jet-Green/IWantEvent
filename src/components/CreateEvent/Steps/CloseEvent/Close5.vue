<script setup>
  import { ref } from 'vue'
  let name=ref('Имя фестиваля')
</script>

<template>
  <a-typography-paragraph content="Поздравляем, вы почти создали своё закрытое мероприятие!"
    style="margin: 20px 0 20px 0" />
  <a-typography-paragraph content="Теперь проверяем, что получилось." style="margin: 20px 0 20px 0" />
  <a-row>
    <a-col>
      Шаг 1
    </a-col>
    <a-col>
      
    </a-col>
    <a-col>
      Основные параметры
    </a-col>
  </a-row>
  <a-row>
    <a-typography-paragraph v-model:content="name" editable />
  </a-row>
</template>
