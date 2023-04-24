<template>
  <div
    class="bg-slate-700 p-8 h-full text-white flex flex-col justify-between gap-4 rounded-lg"
  >
    <div class="flex flex-col justify-between gap-4">
      <div class="flex justify-between">
        <div class="font-bold text-lg flex flex-row gap-2">
          <div>
            {{ hour(booking.start_time) }}
          </div>
          <div class="font-normal text-slate-200">
            {{ date(booking.start_time) }}
          </div>
        </div>
        <div class="text-slate-400">{{ booking.duration }} min</div>
      </div>
      <img
        :src="booking.facility.image_url"
        alt=""
        class="w-full rounded-md"
        v-if="booking.facility !== undefined"
      />
      <div class="text-white" v-if="booking.start_time">
        <div class="i-fluent-emoji-flat-woman-mechanic-light"></div>
        <div class="text-lg">
          {{ booking.facility.name }} - Bana {{ booking.court_id }}
        </div>

        <div v-if="booking.door_code !== ''" class="text-slate-400">
          Dörrkod: {{ booking.door_code }}
        </div>
      </div>
    </div>
    <div v-if="!booking.payment">
      <h1 class="text-2xl text-red-500 mb-4">Tiden är inte betald!</h1>
    </div>
    <NuxtLink to="/" class="flex justify-center"
      ><button class="bg-slate-500">Stäng</button></NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
// definePageMeta({ layout: "fullscreen" });

const isPaymentPaid = ref(false);
const booking = ref({});
const updateBooking = async () => {
  const response = await getBookingByPk(useRoute().params.id as string);
  booking.value = response;
};
updateBooking();

function date(dateString: string) {
  const date = new Date(dateString);
  const options = {
    // year: 'numeric',
    weekday: "short",
    month: "numeric",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };
  return date.toLocaleDateString("se-SE", options);
}
function hour(dateString: string) {
  const date = new Date(dateString);
  const options = {
    // year: "numeric",
    // month: "long",
    // day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };
  return date.toLocaleTimeString("se-SE", options);
}
</script>

<style scoped></style>
