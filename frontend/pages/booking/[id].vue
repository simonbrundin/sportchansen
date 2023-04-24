<template>
  <div
    class="bg-slate-700 p-8 h-full text-white flex flex-col justify-between gap-4 rounded-lg h-full"
  >
    <div class="flex flex-col justify-between">
      <div v-if="!booking.payment">
        <h1 class="text-2xl text-red-500 mb-4">Tiden är inte betald!</h1>
      </div>
      <div class="text-white" v-if="booking.start_time">
        <div class="i-fluent-emoji-flat-woman-mechanic-light"></div>

        <div>
          {{ formatDate(booking.start_time) }}
        </div>
        <b>{{ booking.duration }} min</b>

        <div>{{ booking.facility.name }} - Bana {{ booking.court_id }}</div>
        <div v-if="booking.door_code !== ''">Kod: {{ booking.door_code }}</div>
      </div>
    </div>

    <NuxtLink to="/" class="flex justify-center"
      ><button class="bg-slate-500">Stäng</button></NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "fullscreen" });

const isPaymentPaid = ref(false);
const booking = ref({});
const updateBooking = async () => {
  const response = await getBookingByPk(useRoute().params.id as string);
  booking.value = response;
};
updateBooking();

function formatDate(dateString: string) {
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
