<script>
export default {
  name: "LoginComponent",
}
</script>

<template>
  <div class="flex flex-col lg:flex-row h-screen">
    <!-- Seção de login -->
    <div class="w-full lg:w-1/3 h-screen bg-white justify-center flex">
      <div class="w-11/12 sm:w-96 content-center place-content-center grid">
        <h1 class="text-3xl font-bold my-3">Entre na sua conta</h1>
        <span>Não tem uma conta? <a class="text-sky-600 cursor-pointer">Clique aqui</a> e registre-se agora.</span>
        <label class="input input-bordered flex items-center gap-2 shadow-xl my-5 rounded-md">
          <input type="text" class="grow" placeholder="E-mail">
        </label>
        <label class="input input-bordered flex items-center gap-2 shadow-xl rounded-md">
          <input type="password" class="grow" placeholder="Senha">
        </label>
        <input type="submit" class="button bg-sky-600 shadow-xl my-5 py-2 rounded-md text-white cursor-pointer"/>
        <a class="cursor-pointer">Esqueceu a senha?</a>
      </div>
    </div>

    <!-- Seção informativa -->
    <div class="hidden lg:block lg:w-2/3 h-screen bg-gradient-to-r from-sky-500 to-blue-500 content-center pl-8 lg:pl-24">
      <h1 class="text-3xl font-bold my-3 text-white">Nome do Software</h1>
      <p class="text-white">Junte-se a mais de 5k de desenvolvedores e descubra um novo jeito de administrar os seus serviços digitais.</p>
    </div>
  </div>
</template>

<style scoped>

</style>
