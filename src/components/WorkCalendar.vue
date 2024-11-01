<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">График: {{ currentWorkEvents }}</div>
    </q-card-section>
    <q-card-section class="flex flex-center">
      <q-date
        title="Выберите дату"
        v-model="currentDate"
        :events="eventsFn"
        :event-color="eventColorFn"
        :locale="locale"
        @click="handleDateClick"
        first-day-of-week="1"
        :minimal="true"
        flat
        square
        today-btn
        navigation-min-year-month="2024/10"
      />
      <q-btn color="secondary" class="full-width" @click="saveEvents()"
        >Запомнить график</q-btn
      >
      <q-btn color="red" class="full-width" @click="editGrafic()"
        >Изменить график</q-btn
      >
    </q-card-section>
  </q-card>
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
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useEventStore } from "../../src/stores/event-store";

// Состояние для управления диалогом
const isDialogOpen = ref(false);
const dialogDate = ref("");
const dialogMessage = ref("");

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

const eventStore = useEventStore(); // Инициализация хранилища
const currentDate = ref(new Date().toISOString().split("T")[0]);

const events = ref();
const params = ref();
const currentWorkEvents = ref("");

onMounted(() => {
  eventStore.loadEvents();
  events.value = getLastWorkGrafic();
});

// Функция для проверки наличия событий
const eventsFn = (date) => {
  if (date && events.value) {
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

// получить последний сделанный график
const getLastWorkGrafic = () => {
  let events = eventStore.getEvents;

  // список графиков
  let listGrafic = Object.keys(events);
  currentWorkEvents.value = listGrafic[listGrafic.length - 1];
  return events[listGrafic[listGrafic.length - 1]].events;
};
</script>

<style></style>
