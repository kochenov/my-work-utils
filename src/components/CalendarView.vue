<template>
  <q-date
    v-model="currentDate"
    :events="store.eventsFn"
    :event-color="store.eventColorFn"
    :locale="locale"
    @click="store.handleDateClick"
  />
</template>

<script setup>
import { useScheduleStore } from "../stores/schedule";
const store = useScheduleStore();
const currentDate = store.currentDate;

// Определение локализации на русском языке
const locale = {
  days: [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ],
  daysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
  months: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  monthsShort: [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ],
};
</script>
