<template>
  <div class="text-white flex flex-col gap-4" id="index-page">
    <TopBar />
    <MyBookings v-if="nhost.auth.getUser()?.id !== undefined" />
    <button @click="$router.push('/booking/confirm')">Boka tid</button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.knapp {
  color: greenyellow;
}
</style>
