<script setup>
import { ref, reactive } from "vue";

import Close1 from "./Steps/CloseEvent/Close1.vue";
import Close2 from "./Steps/CloseEvent/Close2.vue";
import Close3 from "./Steps/CloseEvent/Close3.vue";
import Close4 from "./Steps/CloseEvent/Close4.vue";
import Close5 from "./Steps/CloseEvent/Close5.vue";

let current = ref(0);

let steps = reactive([
  {
    title: "First",
  },
  {
    title: "Second",
  },
  {
    title: "Third",
  },
  {
    title: "Four",
  },
  {
    title: "Five",
  },
]);

function changeStep(step) {
  current.value=step;
}

const next = () => {
  current.value++;
};

const prev = () => {
  current.value--;
};
</script>

<template>
  <a-steps v-model:current="current" :responsive="false">
    <a-step />
    <a-step />
    <a-step />
    <a-step />
    <a-step />
  </a-steps>
  <!-- <div class="steps-content" v-html="steps[current].content">
      </div> -->
  <div v-if="current == 0">
    <Close1 />
  </div>
  <div v-if="current == 1">
    <Close2 />
  </div>
  <div v-if="current == 2">
    <Close3 />
  </div>
  <div v-if="current == 3">
    <Close4 />
  </div>
  <div v-if="current == 4">
    <Close5 @change-step="changeStep" />
  </div>

  <div class="steps-action">
    <a-button
      v-if="current < steps.length - 1"
      type="primary"
      shape="round"
      @click="next"
    >
      Далее
    </a-button>

    <a-button v-if="current == steps.length - 1" type="primary" shape="round">
      Отправить
    </a-button>

    <a-button
      v-if="current > 0"
      type="primary"
      shape="round"
      style="margin-left: 8px"
      @click="prev"
    >
      Назад
    </a-button>
  </div>
</template>
