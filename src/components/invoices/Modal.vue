<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <div class="mb-4">
        <slot name="header"></slot>
      </div>
      <div class="mb-6">
        <slot name="body"></slot>
      </div>
      <div class="flex justify-end">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Adiciona estilização adicional se necessário */
</style>
