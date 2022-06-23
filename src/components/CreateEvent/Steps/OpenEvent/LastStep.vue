<script setup>
import { ref } from 'vue'
let ticketCost = ref(1000)
</script>
<template>
    <a-row type="flex" justify="space-between">
        <a-col>Тип меоприятия</a-col>
        <a-col>Открытое</a-col>
    </a-row>
    <a-row type="flex" justify="space-between">
        <a-col>Введите артиста:</a-col>
        <a-col>БИ-2</a-col>
    </a-row>
    <a-row type="flex" justify="space-between">
        <a-col>Место мероприятия:</a-col>
        <a-col>Глазов</a-col>
    </a-row>
    <a-row type="flex" justify="space-between">
        <a-col>Стоимость вашего будущего билета:</a-col>
        <a-col>
            <a-input v-model:value="ticketCost" size="small" />
        </a-col>
    </a-row>
</template>