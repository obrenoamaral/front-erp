<template>
  <div>
    <div class="bg-white rounded-lg shadow-2xl p-2">
      <div class="flex justify-between items-center p-4 rounded">
        <div>
          <h1 class="text-3xl font-bold text-gray-800">Usuários</h1>
        </div>
        <div class="flex justify-end">

          <!-- Botão de adicionar usuário -->
          <button
              @click="openModal()"
              class="px-1 py-2 bg-white text-gray-950 hover:bg-gray-100 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 ml-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Data Table -->
      <table class="min-w-full bg-white rounded-lg">
        <thead class="border-b border-gray-300">
        <tr>
          <th class="py-2 px-4 text-left text-gray-400 text-sm">Nome</th>
          <th class="py-2 px-4 text-left text-gray-400 text-sm">Email</th>
          <th class="py-2 px-4 text-left text-gray-400 text-sm">Status</th>
          <th class="py-2 px-4 text-left text-gray-400 text-sm">Data Criação</th>
          <th class="py-2 px-4 text-left text-gray-400 text-sm">Ações</th>

        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users" :key="user.id" class="hover:bg-gray-100">
          <td class="py-2 px-4 text-gray-700 text-sm border-b border-gray-300">{{ user.name }}</td>
          <td class="py-2 px-4 text-gray-700 text-sm border-b border-gray-300">{{ user.email }}</td>
          <td class="py-2 px-4 text-gray-700 text-sm border-b border-gray-300 ">{{ user.status }}</td>
          <td class="py-2 px-4 text-gray-700 text-sm border-b border-gray-300">{{ user.date }}</td>
          <td class="py-2 px-4 border-b border-gray-300">
            <div class="flex space-x-2">
              <!-- Botão de editar -->
              <button @click="editUser(user)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </button>
              <!-- Botão de deletar -->
              <button @click="deleteUser(user.id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="red" class="size-5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>
          </td>
        </tr>
        </tbody>
        <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Previous</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </a>
          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
          <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
          <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
          <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
          <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
          <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
            <span class="sr-only">Next</span>
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </a>
        </nav>
      </table>


    </div>

    <!-- Modal de edição/adicionar usuário -->
    <Modal v-if="showModal" @close="closeModal()">
      <template v-slot:header>
        <h2 class="text-xl font-semibold text-gray-700">{{ modalTitle }}</h2>
      </template>
      <template v-slot:body>
        <form @submit.prevent="saveUser">
          <div class="mb-4">
            <label class="block text-gray-600">Nome</label>
            <input
                v-model="userForm.name"
                type="text"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-600">Email</label>
            <input
                v-model="userForm.email"
                type="email"
                class="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none"
            />
          </div>
        </form>
      </template>
      <template v-slot:footer>
        <button
            @click="saveUser"
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
import Modal from './UserModal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      users: [], // Lista de usuários vinda do banco de dados
      showModal: false,
      modalTitle: 'Adicionar Usuário',
      userForm: {
        name: '',
        email: '',
      },
      isEdit: false,
    };
  },
  methods: {
    openModal() {
      this.modalTitle = 'Adicionar Usuário';
      this.userForm = {name: '', email: ''};
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    editUser(user) {
      this.modalTitle = 'Editar Usuário';
      this.userForm = {...user};
      this.isEdit = true;
      this.showModal = true;
    },
    saveUser() {
      if (this.isEdit) {
        // Lógica de edição
        // Atualizar o usuário no banco de dados
      } else {
        // Lógica de adição
        // Adicionar um novo usuário no banco de dados
      }
      this.closeModal();
    },
    deleteUser(id) {
      // Lógica de deleção de usuário
    },
  },
  mounted: function () {
    // Carregar usuários do banco de dados
    this.users = [
      {id: 1, name: 'John Doe', email: 'john@example.com', status: 'ativo', date: '2022-09-12'},
      {id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'ativo', date: '2022-09-12'}
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
