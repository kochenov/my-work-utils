<template>
  <div>
    <p>Рабочие дни: {{ store.stats.totalWorkingDays }}</p>
    <p>Выходные: {{ store.stats.totalRestDays }}</p>
    <h6>Прогнозируемый доход</h6>
    <p>Мин: {{ store.stats.minIncome }} руб.</p>
    <p>Макс: {{ store.stats.maxIncome }} руб.</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScheduleStore } from "../stores/schedule";
const store = useScheduleStore();
</script>
