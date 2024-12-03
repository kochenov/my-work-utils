import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useScheduleStore = defineStore("schedule", () => {
  // Состояние формы ввода
  const form = ref({
    workingDays: 6, // Количество рабочих дней
    restDays: 1, // Количество выходных дней
    rotationPeriod: 15, // Срок вахты (в днях)
    rotationStart: new Date().toISOString().split("T")[0], // Дата начала вахты
    minManyforDay: 4500, // Минимальная зарплата за день
    maxManyforDay: 5000, // Максимальная зарплата за день
  });

  // Список событий для календаря
  const events = ref([]);

  // Текущее выбранное состояние календаря
  const currentDate = ref(form.value.rotationStart);

  // Диалоговое окно
  const isDialogOpen = ref(false);
  const dialog = ref({
    date: "",
    message: "",
  });

  // Вычисления
  const stats = computed(() => {
    const totalWorkingDays = events.value.filter(
      (e) => e.type === "work"
    ).length;
    const totalRestDays = events.value.filter((e) => e.type === "rest").length;

    return {
      totalWorkingDays,
      totalRestDays,
      minIncome: totalWorkingDays * form.value.minManyforDay,
      maxIncome: totalWorkingDays * form.value.maxManyforDay,
    };
  });

  // Генерация расписания
  const generateSchedule = () => {
    events.value = [];
    let startDate = new Date(form.value.rotationStart);
    startDate.setHours(0, 0, 0, 0);

    let totalDays = 0;

    while (totalDays < form.value.rotationPeriod) {
      // Рабочие дни
      for (
        let i = 0;
        i < form.value.workingDays && totalDays < form.value.rotationPeriod;
        i++
      ) {
        events.value.push({
          date: startDate.toISOString().split("T")[0],
          type: "work",
        });
        startDate.setDate(startDate.getDate() + 1);
        totalDays++;
      }

      // Выходные дни
      for (
        let j = 0;
        j < form.value.restDays && totalDays < form.value.rotationPeriod;
        j++
      ) {
        events.value.push({
          date: startDate.toISOString().split("T")[0],
          type: "rest",
        });
        startDate.setDate(startDate.getDate() + 1);
        totalDays++;
      }
    }

    // Добавляем конец вахты
    events.value.push({
      date: startDate.toISOString().split("T")[0],
      type: "end",
    });
  };

  // Функция для получения событий на определённую дату
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
        switch (event.type) {
          case "work":
            return "green";
          case "rest":
            return "blue";
          case "end":
            return "red";
        }
      }
    }
    return "";
  };

  // Обработка клика по дате
  const handleDateClick = () => {
    const date = currentDate.value;
    if (date) {
      const formattedDate = new Date(date).toISOString().split("T")[0];
      const event = events.value.find((event) => event.date === formattedDate);

      if (event) {
        dialog.value.date = formattedDate;
        dialog.value.message = `Тип события: ${
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

  return {
    form,
    events,
    currentDate,
    isDialogOpen,
    dialog,
    stats,
    generateSchedule,
    eventsFn,
    eventColorFn,
    handleDateClick,
  };
});
