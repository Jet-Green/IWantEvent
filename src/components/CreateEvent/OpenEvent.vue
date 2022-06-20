<script setup>
import {ref} from 'vue'
let offerCheckboxChecked = ref(false);
let artistName = ref('')
</script>

<template>
    <a-row>
        <a-col >
            <a-input v-model:value="artistName" size="large" placeholder="Начните вводить имя артиста"
                style="margin: 20px 0 20px 0; width: 400px" />
        </a-col>
    </a-row>
    <a-row>
        <a-col>
            <a-checkbox v-model:checked="offerCheckboxChecked" style="margin: 0 0 20px 0">
                Принять условия оферты
            </a-checkbox>
        </a-col>
    </a-row>
    <a-button shape="round" type="primary" style="margin: 0 0 20px 0">
        Создать сбор
    </a-button>
</template>