<template>
  <div class="row q-col-gutter-lg">
    <!-- Форма для ввода данных пользователем -->
    <div class="col-12 col-md-6 col-lg-4">
      <q-card v-if="events.length == 0" class="my-card">
        <q-card-section>
          <div class="text-h6">Расчёт рабочего графика</div>
          <div class="text-subtitle2">Вахтовый метод</div>
        </q-card-section>

        <q-separator inset />
        <q-card-section>
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

            <q-btn
              color="black"
              class="full-width"
              @click="otherForm = !otherForm"
              >Настройка заработка</q-btn
            >

            <div v-if="otherForm">
              <q-input
                v-model.number="minManyforDay"
                label="Минимальная з/п за день"
                type="number"
              />
              <q-input
                v-model.number="maxManyforDay"
                label="Максимальная з/п за день"
                type="number"
              />
            </div>

            <q-btn
              class="full-width"
              label="Создать график"
              type="submit"
              color="primary"
            />
          </q-form>
        </q-card-section>
      </q-card>

      <q-table
        flat
        bordered
        title="Доходы"
        :rows="events"
        :columns="columns"
        row-key="id"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="id" :props="props">
              {{ props.row.id + 1 }}
            </q-td>
            <q-td key="date" :props="props">
              {{ props.row.date }}
            </q-td>
            <q-td key="money" :props="props">
              <q-badge color="green">
                {{ props.row.money }}
              </q-badge>
              <q-btn
                flat
                @click="funcDialogPromtOpen(props.row.id)"
                size="sm"
                dense
                icon="add"
                style="color: #f43455"
              />
            </q-td>
            <q-td key="type" :props="props">
              <q-badge :color="props.row.type == 'work' ? 'green' : 'red'">
                {{ props.row.type }}
              </q-badge>
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <!-- Календарь для отображения графика -->
    <div class="col-12 col-md-6 col-lg-4">
      <q-card class="my-card">
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
          <q-btn
            v-if="events.length == 0"
            color="secondary"
            class="full-width"
            @click="saveEvents()"
            >Запомнить график</q-btn
          >
          <q-btn v-else color="red" class="full-width" @click="events = []"
            >Изменить график</q-btn
          >
        </q-card-section>
      </q-card>
    </div>
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
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Вывод количества рабочих дней и выходных -->
      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Дни вахты</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="q-ma-sm">
            <q-chip square>
              <q-avatar color="blue" text-color="white">{{
                totalWorkingDays
              }}</q-avatar>
              рабочих дней
            </q-chip>
            <q-chip square>
              <q-avatar color="red" text-color="white">{{
                totalRestDays
              }}</q-avatar>
              выходных дней
            </q-chip>
          </div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">Прогнозируемый доход</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          <div class="q-ma-sm">
            <q-list bordered padding>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="primary" name="payments" />
                </q-item-section>
                <q-item-section>Минимальная з/п </q-item-section>
                <q-item-section side>
                  <q-item-label caption
                    >{{
                      totalWorkingDays * minManyforDay
                    }}
                    &#x20bd;</q-item-label
                  >
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon color="red" name="credit_card" />
                </q-item-section>
                <q-item-section>Максимальная з/п </q-item-section>
                <q-item-section side>
                  <q-item-label caption class="text-red"
                    >{{
                      totalWorkingDays * maxManyforDay
                    }}
                    &#x20bd;</q-item-label
                  >
                </q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar>
                  <q-icon color="yellow" name="account_balance" />
                </q-item-section>
                <q-item-section>Средняя з/п в день</q-item-section>
                <q-item-section side>
                  <q-item-label caption class="text-green"
                    >{{
                      totalWorkingDays * maxManyforDay
                    }}
                    &#x20bd;</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-card-section>
      </q-card>
    </div>
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
import { useEventStore } from "../../src/stores/event-store";

const { eventStore } = useEventStore();

const formEvents = ref(true);

const prompt = ref(false); // Показывает ли форму диалога
const tempID = ref(null);
const pricePromt = ref(0);

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
const workingDays = ref(6); // Количество рабочих дней
const restDays = ref(1); // Количество выходных
const rotationPeriod = ref(15); // Период смены рабочих дней
const rotationStart = ref(getCurrentDate()); // Начальная дата смены рабочих дней(в формате YYYY-MM-DD)
const currentDate = ref(rotationStart.value); // Текущая дата смены рабочих дней(в формате YYYY-MM-DD)
const events = ref([]); // Массив событий
const minManyforDay = ref(4500); // Минимальная дневная оплата в рублях
const maxManyforDay = ref(5000); // Максимальная дневная оплата в рублях

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
  let events = [];

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
      events.push({
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
      events.push({
        date: startDate.toISOString().split("T")[0],
        type: "rest",
      });
      startDate.setDate(startDate.getDate() + 1);
      totalDays++;
      totalRestDays.value++;
    }
  }

  events.push({
    date: startDate.toISOString().split("T")[0],
    type: "end",
  });

  events.forEach((val, index) => {
    events[index] = {
      ...val,
      id: index,
      money: val.money != null && val.money > 0 ? val.money : 0,
    };
  });
  saveEvents(events);
  events.value = getEvents();
  formEvents.value = false;
};

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

onMounted(() => {
  events.value = getEvents();
});

const saveEvents = (events) => {
  console.log(events);

  console.log("Первый день: " + events[0].date);
  console.log("Последний день: " + events[events.length - 1].date);

  events.value = events;

  LocalStorage.set("events", events); // Сохранение событий в LocalStorage
  LocalStorage.set("workingDays", workingDays.value);
  LocalStorage.set("restDays", restDays.value);
  LocalStorage.set("rotationPeriod", rotationPeriod.value);
  LocalStorage.set("rotationStart", rotationStart.value);
  LocalStorage.set("currentDate", currentDate.value);
};

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
    //generateSchedule(); // Генерация рабочего графика
  }
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
