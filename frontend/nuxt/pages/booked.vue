<template>
  <div class="bg-slate-700 m-4 p-8 h-full text-white">
    <h1 class="text-2xl">Tiden är bokad!</h1>
    <div>
      {{ tid }} - {{ datum }} <b>{{ duration }} min</b>
    </div>
    <div>{{ hall }} - {{ bana }}</div>
    <div v-if="code !== ''">Kod: {{ code }}</div>
    <NuxtLink to="/"><button class="bg-slate-500 p-4">Stäng</button></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const tid = ref("00:00");
const datum = ref("2022-01-01");
const duration = ref("90");
const hall = ref("WAP Birsta");
const bana = ref("Bana 1 VUO");
const code = ref("1234");
const route = useRoute();
const paymentRequestId = route.query.paymentRequestId;
const isPaymentPaid = async (paymentRequestId: string) => {
  const swishEndpoint = "https://mss.cpc.getswish.net/swish-cpcapi";
  const response = await useFetch(
    `${swishEndpoint}/api/v1/paymentrequests/${paymentRequestId}`
  );
  console.log(response.data.value);
  console.log(response.error.value.message);
};
isPaymentPaid(paymentRequestId);
</script>

<style scoped></style>
