<template>
  <div class="row q-col-gutter-lg">
    <!-- Форма для ввода данных пользователем -->
    <div class="col-12 col-md-6 col-lg-4">
      <FormCalculater @check="listEvents = listEvents + 1" />
    </div>
    <!-- Календарь для отображения графика -->
    <div class="col-12 col-md-6 col-lg-4">
      <WorkCalendar :key="listEvents" />
    </div>

    <div class="col-12 col-md-6 col-lg-4"></div>
    <div class="row">
      <div v-if="events" class="col-lg-12 col-md-6"></div>
    </div>
  </div>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Зарплата за день</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          dense
          type="number"
          v-model="pricePromt"
          autofocus
          @keyup.enter="prompt = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup />
        <q-btn flat label="Сохранить" @click="onRowClick()" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { LocalStorage } from "quasar";
import FormCalculater from "../components/FormCalculater.vue";
import WorkCalendar from "./WorkCalendar.vue";
import { useEventStore } from "../../src/stores/event-store";

const eventStore = useEventStore();

const formEvents = ref(true);

const prompt = ref(false); // Показывает ли форму диалога
const tempID = ref(null);
const pricePromt = ref(0);
const listEvents = ref(0);

const events = ref([]);

/**
 * Открытие диалога для добавления з/п
 * @param id - id события
 */
const funcDialogPromtOpen = (id) => {
  pricePromt.value = null; // обнуляем значение з/п
  tempID.value = id; // Записываем в переменную id
  prompt.value = true; // Показываем форму диалога
  console.log("Диалог добавления з/п открыт");
}; // Функция для диалога

/**
 *  Добавление в событие новое значение з/п при нажатии на кнопку
 */
const onRowClick = () => {
  let eventsLoc = getEvents();
  // поиск индекса события по id
  let foundIndex = eventsLoc.findIndex((x) => x.id == tempID.value);
  // если найдено, то добавляем з/п в событие и сохраняем в LocalStorage
  eventsLoc[foundIndex].money = pricePromt.value; // Записываем в переменную id
  saveEvents(eventsLoc);
  events.value = getEvents();
  tempID.value = null;
  prompt.value = false;
};

const columns = [
  {
    name: "id",
    label: "#",
    field: "id",
  },
  {
    name: "date",
    required: true,
    label: "Дата",
    align: "left",
    field: (row) => row.date,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "money",
    align: "center",
    label: "Затрата (руб)",
    field: "money",
    sortable: true,
  },
  { name: "type", label: "Статус", field: "type", sortable: true },
];

const otherForm = ref(false);

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

onMounted(() => {
  if (events.value.length == 0) {
    events.value = getEvents();
  }
});

const editGrafic = () => {
  events.value = [];
  LocalStorage.set("events", events.value);
  //formEvents.value = true;
};
const saveEvents = (events) => {
  console.log("Первый день: " + events[0].date);
  console.log("Последний день: " + events[events.length - 1].date);

  events.value = events;

  LocalStorage.set("events", events); // Сохранение событий в LocalStorage
  // LocalStorage.set("workingDays", workingDays.value);
  // LocalStorage.set("restDays", restDays.value);
  // LocalStorage.set("rotationPeriod", rotationPeriod.value);
  // LocalStorage.set("rotationStart", rotationStart.value);
  // LocalStorage.set("currentDate", currentDate.value);
};

const getEventsList = () => {};

const getEvents = () => {
  let workingDaysLocal = LocalStorage.getItem("workingDays");
  let restDaysLocal = LocalStorage.getItem("restDays");
  let rotationPeriodLocal = LocalStorage.getItem("rotationPeriod");
  let rotationStartLocal = LocalStorage.getItem("rotationStart");
  let currentDateLocal = LocalStorage.getItem("currentDate");
  let events = LocalStorage.getItem("events"); // События

  if (workingDaysLocal) {
    workingDays.value = workingDaysLocal;
  }
  if (restDaysLocal) {
    restDays.value = restDaysLocal;
  }
  if (rotationPeriodLocal) {
    rotationPeriod.value = rotationPeriodLocal;
  }
  if (rotationStartLocal) {
    rotationStart.value = rotationStartLocal;
  }
  if (currentDateLocal) {
    currentDate.value = currentDateLocal;
    // generateSchedule(); // Генерация рабочего графика
  }
  console.log(events);

  return events; // Возвращение событий
};
</script>

<style scoped>
.my-card {
  /*max-width: 300px; */
  padding: 10px;
  margin-bottom: 15px;
  /*margin-bottom: 20px;*/
}
</style>
