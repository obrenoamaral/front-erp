<template>
  <div class="p-6 space-y-6">
    <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>

    <!-- Dashboard Overview -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Card de Estatística 1 -->
      <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
        <div class="p-4 bg-blue-100 rounded-full">
          <i class="fas fa-users text-blue-500 text-2xl"></i>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Usuários</h2>
          <p class="text-2xl font-bold text-gray-900">{{ userCount }}</p>
        </div>
      </div>

      <!-- Card de Estatística 2 -->
      <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
        <div class="p-4 bg-green-100 rounded-full">
          <i class="fas fa-dollar-sign text-green-500 text-2xl"></i>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Total em Orçamentos</h2>
          <p class="text-2xl font-bold text-gray-900">${{ totalBudgets.toFixed(2) }}</p>
        </div>
      </div>

      <!-- Card de Estatística 3 -->
      <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
        <div class="p-4 bg-red-100 rounded-full">
          <i class="fas fa-calendar-day text-red-500 text-2xl"></i>
        </div>
        <div>
          <h2 class="text-lg font-semibold text-gray-700">Orçamentos Hoje</h2>
          <p class="text-2xl font-bold text-gray-900">{{ budgetsToday }}</p>
        </div>
      </div>
    </div>

    <!-- Gráfico de Orçamentos -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Orçamentos por Mês</h2>
      <Bar :data="chartData" :options="chartOptions" />
    </div>

    <!-- Tabela de Orçamentos Recentes -->
    <div class="bg-white rounded-lg shadow-md p-4">
      <h2 class="text-xl font-semibold text-gray-700 mb-4">Orçamentos Recentes</h2>
      <table class="min-w-full bg-white rounded-lg">
        <thead class="bg-gray-100">
        <tr>
          <th class="py-2 px-4 text-left text-gray-600">Cliente</th>
          <th class="py-2 px-4 text-left text-gray-600">Valor</th>
          <th class="py-2 px-4 text-left text-gray-600">Data</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="budget in recentBudgets"
            :key="budget.id"
            class="border-b hover:bg-gray-50"
        >
          <td class="py-2 px-4 text-gray-700">{{ budget.client }}</td>
          <td class="py-2 px-4 text-gray-700">${{ budget.value }}</td>
          <td class="py-2 px-4 text-gray-700">{{ budget.date }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  components: {
    Bar,
  },
  data() {
    return {
      userCount: 120, // Exemplo de dados
      totalBudgets: 25430.50, // Exemplo de dados
      budgetsToday: 5, // Exemplo de dados
      recentBudgets: [
        { id: 1, client: 'Cliente A', value: 500, date: '2024-09-12' },
        { id: 2, client: 'Cliente B', value: 1000, date: '2024-09-13' },
      ],
      chartData: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: 'Total Orçamentos',
            backgroundColor: '#4B6A9B',
            data: [500, 600, 800, 900, 1000, 700, 650, 800, 750, 900, 850, 950],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                return `$${context.raw}`;
              },
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
</style>
