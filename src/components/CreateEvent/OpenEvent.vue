<script setup>
import { ref } from 'vue'

import FirstStep from './Steps/OpenEvent/FirstStep.vue'
import LastStep from './Steps/OpenEvent/LastStep.vue'

let current = ref(0)
</script>
<template>
    <a-row>
        <a-col>
            <a-steps v-model:current="current" :responsive="false">
                <a-step />
                <a-step />
            </a-steps>
            <div v-if="current == 0">
                <FirstStep @nextStep="current = 1" />
            </div>
            <div v-else>
                <LastStep />
            </div>
        </a-col>
    </a-row>
</template>