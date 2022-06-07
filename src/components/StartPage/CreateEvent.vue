<script setup>
import { ref } from "vue";

let checked = ref(false);
let eventType = ref("open");
let offerCheckbox = ref(false);

function toggleEvent(val) {
  eventType.value = val;
}
</script>
<template>
  <v-container>
    <v-row>
      <v-col>
        <span class="text-h6 text-md-h4">Создать мероприятие</span>
        <v-row>
          <v-col>
            Открытое мероприятие
            <a-switch v-model:checked="checked" />
            Закрытое мероприятие
          </v-col>
        </v-row>
        <!-- <v-radio-group v-model="eventType" inline>
          <v-radio value="closed">
            <template v-slot:label></template>
          </v-radio>
          <v-radio value="open">
            <template v-slot:label></template>
          </v-radio>
        </v-radio-group> -->

        <div v-if="!checked">
          <v-row>
            <v-col cols="12" md="7">
              Начните вводить имя артиста
              <v-text-field density="compact" variant="outlined"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="3">
              <v-checkbox v-model="offerCheckbox">
                <template v-slot:label>Принять условия оферты</template>
              </v-checkbox>
            </v-col>
          </v-row>
          <v-btn rounded="pill" color="accent" class="text-body-1">
            Создать сбор
          </v-btn>
        </div>
        <div v-else>Закрытое</div>
      </v-col>
    </v-row>
  </v-container>
</template>
