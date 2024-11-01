<template>
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
</template>
<script setup>
import { onMounted, ref } from "vue";
import { LocalStorage } from "quasar";

const events = ref([]);
</script>
