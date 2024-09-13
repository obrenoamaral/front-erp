<template>
  <div>
    <h1 class="text-3xl font-bold mb-6 text-gray-700">Orçamentos</h1>

    <div class="bg-white rounded-lg shadow-md p-4">
      <div class="flex justify-end mb-4">
        <!-- Botão de adicionar orçamento -->
        <button
            @click="openModal()"
            class="flex items-center px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
        >
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <!-- Data Table -->
      <table class="min-w-full bg-white rounded-lg">
        <thead class="bg-gray-100">
        <tr>
          <th class="py-2 px-4 text-left text-gray-600">Cliente</th>
          <th class="py-2 px-4 text-left text-gray-600">Valor</th>
          <th class="py-2 px-4 text-left text-gray-600">Data</th>
          <th class="py-2 px-4 text-left text-gray-600">Ações</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="budget in budgets"
            :key="budget.id"
            class="border-b hover:bg-gray-50"
        >
          <td class="py-2 px-4 text-gray-700">{{ budget.client }}</td>
          <td class="py-2 px-4 text-gray-700">{{ budget.value }}</td>
          <td class="py-2 px-4 text-gray-700">{{ budget.date }}</td>
          <td class="py-2 px-4">
            <div class="flex space-x-2">
              <!-- Botão de editar orçamento -->
              <button
                  @click="editBudget(budget)"
                  class="px-4 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
              >
                <i class="fas fa-edit"></i>
              </button>
              <!-- Botão de deletar orçamento -->
              <button
                  @click="deleteBudget(budget.id)"
                  class="px-4 py-2 bg-red-200 text-red-600 rounded-full hover:bg-red-300"
              >
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal de edição/adicionar orçamento -->
    <Modal v-if="showModal" @close="closeModal()">
      <template v-slot:header>
        <h2 class="text-xl font-semibold text-gray-700">{{ modalTitle }}</h2>
      </template>
      <template v-slot:body>
        <form @submit.prevent="saveBudget">
          <div class="mb-4">
            <label class="block text-gray-600">Cliente</label>
            <input
                v-model="budgetForm.client"
                type="text"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-600">Valor</label>
            <input
                v-model="budgetForm.value"
                type="number"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-600">Data</label>
            <input
                v-model="budgetForm.date"
                type="date"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
            />
          </div>
        </form>
      </template>
      <template v-slot:footer>
        <button
            @click="saveBudget"
            class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <i class="fas fa-save"></i>
        </button>
        <button
            @click="closeModal"
            class="px-4 py-2 bg-gray-300 text-gray-600 rounded-full hover:bg-gray-400"
        >
          <i class="fas fa-times"></i>
        </button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      budgets: [], // Lista de orçamentos vinda do banco de dados
      showModal: false,
      modalTitle: 'Adicionar Orçamento',
      budgetForm: {
        client: '',
        value: '',
        date: '',
      },
      isEdit: false,
    };
  },
  methods: {
    openModal() {
      this.modalTitle = 'Adicionar Orçamento';
      this.budgetForm = { client: '', value: '', date: '' };
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    editBudget(budget) {
      this.modalTitle = 'Editar Orçamento';
      this.budgetForm = { ...budget };
      this.isEdit = true;
      this.showModal = true;
    },
    saveBudget() {
      if (this.isEdit) {
        // Lógica de edição
        // Atualizar o orçamento no banco de dados
      } else {
        // Lógica de adição
        // Adicionar um novo orçamento no banco de dados
      }
      this.closeModal();
    },
    deleteBudget(id) {
      // Lógica de deleção de orçamento
    },
  },
  mounted() {
    // Carregar orçamentos do banco de dados
    this.budgets = [
      { id: 1, client: 'Cliente A', value: 1000, date: '2024-09-12' },
      { id: 2, client: 'Cliente B', value: 2000, date: '2024-09-13' },
    ];
  },
};
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0 10px;
}
</style>
