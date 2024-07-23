<template>
  <div class="q-pt-md q-gutter-y-lg">
    <div class="row q-gutter-y-md">
      <!-- Форма для ввода данных пользователем -->
      <div class="col-12 col-md-6 col-lg-4">
        <q-form class="q-gutter-md" @submit.prevent="generateSchedule">
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
          <q-btn label="Создать график" type="submit" color="primary" />
        </q-form>
      </div>

      <!-- Вывод количества рабочих дней и выходных -->
      <div class="col-12 col-md-6 col-lg-4">
        <div class="q-ma-sm">
          <p>Количество рабочих дней: {{ totalWorkingDays }}</p>
          <p>Количество выходных: {{ totalRestDays }}</p>
          <hr class="q-ma-sm"  style="width: 40px;"/>
          <h6>Прогнозируемый доход</h6>
          <p>Минимальный:  {{ totalWorkingDays * 3000 }} руб.</p>
          <p>Максимальный:  {{ totalWorkingDays * 4500 }} руб.</p>
        </div>
      </div>

      <!-- Календарь для отображения графика -->
      <div class="col-12 col-md-6 col-lg-4">
        <q-date
          v-model="currentDate"
          :events="eventsFn"
          :event-color="eventColorFn"
          :locale="locale"
          @click="handleDateClick"
          first-day-of-week="1"
        />

        <!-- Диалоговое окно для отображения информации о дате -->
        <q-dialog v-model="isDialogOpen">
          <q-card>
            <q-card-section>
              <div class="text-h6">{{ dialogDate }}</div>
              <div>{{ dialogMessage }}</div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="Закрыть" color="primary" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

// Получение текущей даты в формате YYYY-MM-DD
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split("T")[0];
};

// Состояние для хранения пользовательских данных
const workingDays = ref(6);
const restDays = ref(1);
const rotationPeriod = ref(15);
const rotationStart = ref(getCurrentDate());
const currentDate = ref(rotationStart.value);
const events = ref([]);

// Новые состояния для количества рабочих дней и выходных
const totalWorkingDays = ref(0);
const totalRestDays = ref(0);

// Состояние для управления диалогом
const isDialogOpen = ref(false);
const dialogDate = ref("");
const dialogMessage = ref("");

// Функция для обработки клика по дате
const handleDateClick = () => {
  let date = currentDate.value;
  if (date) {
    const formattedDate = new Date(date).toISOString().split("T")[0]; // Форматирование даты в формате YYYY-MM-DD
    if (isNaN(new Date(formattedDate).getTime())) {
      console.error("Invalid date value");
      return;
    }

    const event = events.value.find((event) => event.date === formattedDate);

    if (event) {
      dialogDate.value = formattedDate;
      dialogMessage.value = `Тип события: ${
        event.type === "work"
          ? "Рабочий день"
          : event.type === "rest"
          ? "Выходной день"
          : "Конец вахты"
      }`;
      isDialogOpen.value = true;
    }
  }
};

// Функция для генерации рабочего графика
const generateSchedule = () => {
  events.value = [];

  let startDate = new Date(rotationStart.value);
  startDate.setHours(0, 0, 0, 0);

  let totalDays = 0;
  totalWorkingDays.value = 0;
  totalRestDays.value = 0;

  while (totalDays < rotationPeriod.value) {
    for (
      let i = 0;
      i < workingDays.value && totalDays < rotationPeriod.value;
      i++
    ) {
      events.value.push({
        date: startDate.toISOString().split("T")[0],
        type: "work",
      });
      startDate.setDate(startDate.getDate() + 1);
      totalDays++;
      totalWorkingDays.value++;
    }

    for (
      let j = 0;
      j < restDays.value && totalDays < rotationPeriod.value;
      j++
    ) {
      events.value.push({
        date: startDate.toISOString().split("T")[0],
        type: "rest",
      });
      startDate.setDate(startDate.getDate() + 1);
      totalDays++;
      totalRestDays.value++;
    }
  }

  events.value.push({
    date: startDate.toISOString().split("T")[0],
    type: "end",
  });

  console.log(`Даты событий:` + events.value);
};

// Функция для проверки наличия событий
const eventsFn = (date) => {
  if (date) {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    return events.value.some((event) => event.date === formattedDate);
  }
  return false;
};

// Функция для определения цвета события
const eventColorFn = (date) => {
  if (date) {
    const formattedDate = new Date(date).toISOString().split("T")[0];
    const event = events.value.find((event) => event.date === formattedDate);
    if (event) {
      if (event.type === "work") {
        return "green";
      } else if (event.type === "rest") {
        return "blue";
      } else if (event.type === "end") {
        return "red";
      }
    }
  }
  return "";
};
</script>

<style scoped>
.q-form {
  max-width: 300px;
  margin-bottom: 20px;
}
</style>
