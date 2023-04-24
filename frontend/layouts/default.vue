<template>
  <div id="default-layout" class="p-4">
    <slot />
  </div>
</template>

<script setup lang="ts">
if (nhost.auth.getUser() === null) {
  navigateTo("/auth/login");
}
</script>

<style scoped></style>
