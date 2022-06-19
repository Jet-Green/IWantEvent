<script setup>
import { ref } from "vue";

let checked = ref(false);
let eventType = ref(false);
let offerCheckbox = ref(false);

function toggleEvent(val) {
  eventType.value = val;
}
</script>
<template>
  <a-col :xs="24">
    <a-row type="flex" justify="center" align="top" style="margin: 20px 0 0 0">
      <a-col :span="15" :md="15" :xs="22" :sm="18">
        <span class="text-h6 text-md-h4">Создать мероприятие</span>
        <a-row style="margin: 20px 0 0 0">
          <a-col>
            Открытое мероприятие
            <a-switch v-model:checked="eventType" />
            Закрытое мероприятие
          </a-col>
        </a-row>
        <div v-if="!eventType">
          <a-row>
            <a-col :span="15" :xs="24" :md="12">
              <a-input
                v-model:value="value"
                size="large"
                placeholder="Начните вводить имя артиста"
                style="margin: 20px 0 20px 0"
              />
            </a-col>
          </a-row>
          <a-row>
            <a-col>
              <a-checkbox v-model:checked="checked" style="margin: 0 0 20px 0">
                Принять условия оферты
              </a-checkbox>
            </a-col>
          </a-row>
          <a-button shape="round" type="primary" style="margin: 0 0 20px 0">
            Создать сбор
          </a-button>
        </div>
        <div v-else>Закрытое</div>
      </a-col>
    </a-row>
  </a-col>
</template>
