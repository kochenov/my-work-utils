<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">Расчёт рабочего графика</div>
      <div class="text-subtitle2">Вахтовый метод</div>
    </q-card-section>

    <q-separator inset />
    <q-card-section>
      <q-form class="q-gutter-md" @submit.prevent="generateSchedule">
        <!-- Поля для ввода рабочего графика -->
        <q-input
          v-model.number="workingDays"
          label="Количество рабочих дней"
          type="number"
        />
        <q-input
          v-model.number="restDays"
          label="Количество выходных дней"
          type="number"
        />
        <q-input
          v-model.number="rotationPeriod"
          label="Срок вахты (дни)"
          type="number"
        />
        <q-input
          v-model="rotationStart"
          label="Дата начала вахты"
          type="date"
        />

        <!-- Кнопка для показа настроек заработка -->
        <q-btn color="black" class="full-width" @click="toggleOtherForm"
          >Настройка заработка</q-btn
        >

        <!-- Дополнительные поля заработка (без использования в графике) -->
        <div v-if="otherForm">
          <q-input
            v-model.number="minSalaryPerDay"
            label="Минимальная з/п за день"
            type="number"
          />
          <q-input
            v-model.number="maxSalaryPerDay"
            label="Максимальная з/п за день"
            type="number"
          />
        </div>

        <!-- Кнопка для генерации графика -->
        <q-btn
          class="full-width"
          label="Создать график"
          type="submit"
          color="primary"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import { useEventStore } from "../../src/stores/event-store";

const eventStore = useEventStore(); // Инициализация хранилища

// Определение переменных состояния
const workingDays = ref(6);
const restDays = ref(1);
const rotationPeriod = ref(15);
const rotationStart = ref(new Date().toISOString().split("T")[0]);
const minSalaryPerDay = ref(4500); // Поля заработка не используются в графике
const maxSalaryPerDay = ref(5000);
const otherForm = ref(false); // Переключатель видимости настроек заработка

// Функция для показа/скрытия дополнительных настроек заработка
const toggleOtherForm = () => {
  otherForm.value = !otherForm.value;
};

const emit = defineEmits(["check"]);

// Генерация рабочего графика
const generateSchedule = () => {
  console.log("Генерация графика");

  let events = [];
  let currentDate = new Date(rotationStart.value);
  let totalDays = 0;

  // Основной цикл создания графика в зависимости от рабочих и выходных дней
  while (totalDays < rotationPeriod.value) {
    // Добавление рабочего периода
    for (
      let i = 0;
      i < workingDays.value && totalDays < rotationPeriod.value;
      i++
    ) {
      events.push({
        date: currentDate.toISOString().split("T")[0],
        type: "work",
      });
      currentDate.setDate(currentDate.getDate() + 1);
      totalDays++;
    }

    // Добавление выходного периода
    for (
      let j = 0;
      j < restDays.value && totalDays < rotationPeriod.value;
      j++
    ) {
      events.push({
        date: currentDate.toISOString().split("T")[0],
        type: "rest",
      });
      currentDate.setDate(currentDate.getDate() + 1);
      totalDays++;
    }
  }

  // Присвоение уникального ID для каждого события
  events = events.map((event, index) => ({
    ...event,
    id: index,
  }));
  let params = {
    workingDays: workingDays.value,
    restDays: restDays.value,
    rotationPeriod: rotationPeriod.value,
    rotationStart: rotationStart.value,
    minSalaryPerDay: minSalaryPerDay.value,
    maxSalaryPerDay: maxSalaryPerDay.value,
  };
  eventStore.saveEvents({ events: events, params: params }); // Сохранение событий в хранилище
  console.log("Сгенерированные события:", eventStore.getEvents);

  emit("check"); // Передаем список событий
};
</script>
