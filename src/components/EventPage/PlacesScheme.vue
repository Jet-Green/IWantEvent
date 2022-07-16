<script setup>
import { reactive } from 'vue'

let placesMatrix = reactive(
  [
    ['500 р', '500 р', '500 р'],
    ['', '500 р', ''],
    ['500 р', '', ''],
    ['', '', '']
  ]
)
</script>
<template>
  <div class="scheme-container">
    <a-row v-for="(row, rowIndex) in placesMatrix" :key="rowIndex" type="flex" justify="space-between">
      <a-col v-for="(col, colIndex) in row" :key="colIndex" :span="3" class="scheme-item ma-8">
        <div v-if="rowIndex == 0">
          Место {{ colIndex + 1 }}
        </div>
        <a-button :disabled="!col">
          {{ col || 'занято' }}
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>
<style scoped lang="scss">
.scheme-container {
  border: 1px solid grey;
  border-radius: 5px;
  overflow: hidden;
}

.scheme-item {
  display: flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
