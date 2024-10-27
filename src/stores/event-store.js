import { defineStore } from "pinia";
import { LocalStorage } from "quasar";

export const useEventStore = defineStore("events", {
  state: () => ({
    events: [],
  }),
  getters: {
    getEvents: (state) => state.events,
  },
  actions: {
    /**
     * Добавление нового события в график
     * @param {*} event
     */
    addEvent(event) {
      this.events.push(event);
    },
    saveEvents() {
      localStorage.setItem("events", JSON.stringify(this.events));
    },
    loadEvents() {
      const events = localStorage.getItem("events");
      if (events) {
        this.events = JSON.parse(events);
      }
    },
    clearEvents() {
      this.events = [];
    },
  },
});
