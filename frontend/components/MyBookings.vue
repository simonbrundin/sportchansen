<template>
  <div class="flex flex-col gap-4">
    <h1>Mina bokningar</h1>
    <div class="flex gap-4">
      <div
        v-for="booking in myBookings"
        :key="booking.id"
        class="flex flex-col p-4 w-40 bg-slate-600 rounded-lg"
        @click="$router.push(`/booking/${booking.id}`)"
      >
        <div>{{ shortDate(booking.start_time) }}</div>
        <div>{{ booking.facility.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const userID = nhost.auth.getUser()?.id as string;
const myBookings = await getMyBookings(userID);
function shortDate(dateString: string) {
  const date = new Date(dateString);
  const options = {
    // year: 'numeric',
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };
  return date.toLocaleDateString("se-SE", options);
}
</script>

<style scoped></style>
