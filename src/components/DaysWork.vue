<template>
  <!-- Вывод количества рабочих дней и выходных -->
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
                >{{ totalWorkingDays * minManyforDay }} &#x20bd;</q-item-label
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
                >{{ totalWorkingDays * maxManyforDay }} &#x20bd;</q-item-label
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
                >{{ totalWorkingDays * maxManyforDay }} &#x20bd;</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup></script>

<style></style>
