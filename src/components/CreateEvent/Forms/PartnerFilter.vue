<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['counterEvent']);
const emitFunction = function() {
    emit('counterEvent', 2)
}

</script>

<template>
  <a-typography-paragraph
    :ellipsis="ellipsis"
    content=" Partner"
    style="margin: 20px 0 20px 0"
  />
  <button @click="emitFunction">Click Me</button>
</template>
