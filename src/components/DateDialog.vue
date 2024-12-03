<template>
  <q-dialog v-model="store.isDialogOpen">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ store.dialog.date }}</div>
        <div>{{ store.dialog.message }}</div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="Закрыть" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useScheduleStore } from "../stores/schedule";
const store = useScheduleStore();
</script>
