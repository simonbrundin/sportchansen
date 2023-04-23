<template>
  <div class="bg-slate-700 m-4 p-8 h-full text-white flex flex-col gap-4">
    <div v-if="isPaymentPaid">
      <h1 class="text-2xl">Tiden är bokad!</h1>
    </div>
    <div class="text-white" v-if="booking.start_time">
      <div class="i-fluent-emoji-flat-woman-mechanic-light"></div>

      <div>
        {{ formatDate(booking.start_time) }} -
        <b>{{ booking.duration }} min</b>
      </div>
      <div>{{ booking.facility.name }} - Bana {{ booking.court_id }}</div>
      <div v-if="booking.code !== ''">Kod: {{ booking.code }}</div>
    </div>
    <NuxtLink to="/"><button class="bg-slate-500 p-4">Stäng</button></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const isPaymentPaid = ref(false);
const booking = ref({});
const updateBooking = async () => {
  const response = await getBookingByPk(useRoute().params.id as string);
  console.log(response.duration);
  booking.value = response;
};
updateBooking();
const updatePaymentStatus = async (paymentRequestId: string) => {
  const swishServerEndpoint = "http://localhost:7777";
  const response = await $fetch(`${swishServerEndpoint}/payment-status`, {
    method: "POST",
    body: JSON.stringify({ paymentRequestID: paymentRequestId }),
  });
  if (response === "PAID") {
    isPaymentPaid.value = true;
  } else {
    isPaymentPaid.value = false;
  }
};
const paymentRequestId = useRoute().params.id;
// updatePaymentStatus(paymentRequestId as string);
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
