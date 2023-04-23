<template>
  <div class="bg-slate-700 m-4 p-8 h-full text-white">
    <div v-if="isPaymentPaid">
      <h1 class="text-2xl">Tiden är bokad!</h1>
      <!-- <div class="text-blue-600">
        <div class="i-fluent-emoji-flat-woman-mechanic-light"></div>

        <div>
          {{ tid }} - {{ datum }} <b>{{ duration }} min</b>
        </div>
        <div>{{ hall }} - {{ bana }}</div>
        <div v-if="code !== ''">Kod: {{ code }}</div>
      </div> -->
    </div>

    <NuxtLink to="/"><button class="bg-slate-500 p-4">Stäng</button></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const isPaymentPaid = ref(false);
// const booking = reactive({
//   tid: "00:00",
//   datum: "2022-01-01",
//   duration: "90",
//   hall: "WAP Birsta",
//   bana: "Bana 1 VUO",
//   code: "",
// });
const updateBooking = async () => {
  const booking = await getBookingByPk(useRoute().params.id as string);
  console.log(booking);
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
</script>

<style scoped></style>
