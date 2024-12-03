<template>
  <q-form class="q-gutter-md" @submit.prevent="generateSchedule">
    <q-input v-model="form.workingDays" label="Рабочие дни" type="number" />
    <q-input v-model="form.restDays" label="Выходные дни" type="number" />
    <q-input
      v-model="form.rotationPeriod"
      label="Срок вахты (дни)"
      type="number"
    />
    <q-input v-model="form.rotationStart" label="Дата начала" type="date" />
    <q-input
      v-model="form.minManyforDay"
      label="Мин. з/п за день"
      type="number"
    />
    <q-input
      v-model="form.maxManyforDay"
      label="Макс. з/п за день"
      type="number"
    />
    <q-btn label="Создать график" type="submit" color="primary" />
  </q-form>
</template>

<script setup>
import { useScheduleStore } from "../stores/schedule";
const store = useScheduleStore();
const form = store.form;
const generateSchedule = store.generateSchedule;
</script>
