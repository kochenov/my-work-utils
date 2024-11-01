import { defineStore } from "pinia";
import { LocalStorage } from "quasar";
import { formatDate } from "../../src/utils";

export const useEventStore = defineStore("events", {
  state: () => ({
    events: {},
  }),
  getters: {
    getEvents: (state) => state.events,
  },
  actions: {
    saveEvents(events) {
      console.log(events);

      // Логируем даты первого и последнего события
      console.log("Первый день: " + events.events[0].date);
      console.log(
        "Последний день: " + events.events[events.events.length - 1].date
      );

      // Ключ для хранения в формате "дата начала дд.мм.ГГГГ - дата конца дд.мм.ГГГГ"
      const eventKey = `${Object.keys(this.events).length + 1}. ${formatDate(
        events.events[0].date
      )} - ${formatDate(events.events[events.events.length - 1].date)}`;

      // Проверяем, есть ли уже данные в LocalStorage
      const storedEvents = LocalStorage.getItem("events") || {};

      // Объединяем новые события с существующими данными
      const updatedEvents = { ...storedEvents, [eventKey]: events };

      // Обновляем состояние и сохраняем данные в LocalStorage
      this.events = updatedEvents;
      LocalStorage.set("events", updatedEvents);

      console.log("Сохранённые события:", this.events);
    },

    loadEvents() {
      // Загружаем события из LocalStorage
      const events = LocalStorage.getItem("events");

      if (events) {
        this.events = events;
      }
    },

    clearEvents() {
      // Очищаем состояние и удаляем события из LocalStorage
      this.events = {};
      LocalStorage.remove("events");
    },
  },
});
