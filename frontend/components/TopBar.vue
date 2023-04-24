<template>
  <div class="flex justify-between items-center">
    <div class="text-2xl font-extrabold">Välkommen!</div>
    <NuxtLink to="/auth/profile">
      <nuxt-img
        src="/default-user.png"
        :width="48"
        :quality="80"
        :class="{ 'bg-red-500': nhost.auth.getUser() === null }"
    /></NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
