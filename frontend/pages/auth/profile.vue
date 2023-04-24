<template>
  <div class="flex flex-col gap-4">
    <div class="flex justify-center">
      <nuxt-img
        v-if="user?.avatarUrl"
        :src="user?.avatarUrl"
        :width="128"
        :quality="80"
        :format="'png'"
        :class="{ 'bg-red-500': nhost.auth.getUser() === null }"
        class="rounded-full bg-slate-700"
      />
    </div>
    <div>{{ user?.email }}</div>
    <div v-if="user?.phoneNumber">{{ user?.phoneNumber }}</div>

    <button @click="signOut()">Logga ut</button>
    <NuxtLink to="/"> <button>Tillbaka</button></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const user = nhost.auth.getUser();
</script>

<style scoped></style>
