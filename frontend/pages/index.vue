<template>
  <div class="text-white flex flex-col gap-4" id="index-page">
    <TopBar />
    <div v-if="nhost.auth.getUser()?.id !== undefined">
      <MyBookings />
    </div>

    <div class="flex gap-4"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.knapp {
  color: greenyellow;
}
</style>
