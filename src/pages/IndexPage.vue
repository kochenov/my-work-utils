<template>
  <q-page class="q-pa-md">
    <div class="q-pt-md q-gutter-y-lg">
      <div class="row q-gutter-y-md">
        <div class="col-12 col-md-6 col-lg-4">
          <InputForm />
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <StatsDisplay />
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <CalendarView />
        </div>
      </div>
      <DateDialog />
    </div>
  </q-page>
</template>

<script setup>
import InputForm from "../components/InputForm.vue";
import StatsDisplay from "../components/StatsDisplay.vue";
import CalendarView from "../components/CalendarView.vue";
import DateDialog from "../components/DateDialog.vue";
</script>

<style scoped>
.q-form {
  max-width: 300px;
  margin-bottom: 20px;
}
</style>
