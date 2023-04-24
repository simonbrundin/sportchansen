<template>
  <div
    class="bg-slate-700 p-8 h-full text-white flex flex-col justify-between gap-4 rounded-lg h-full"
  >
    <div v-if="!isMobile">Öppna via mobilen</div>
    <div class="flex flex-col justify-between gap-4">
      <div class="flex flex-col text-white gap-2" v-if="booking.start_time">
        <div class="i-fluent-emoji-flat-woman-mechanic-light"></div>

        <div>
          {{ formatDate(booking.start_time) }}
        </div>
        <b>{{ booking.duration }} min</b>

        <div>{{ booking.facility.name }} - Bana {{ booking.court_id }}</div>
        <input
          type="text"
          placeholder="Matchi bokningsID"
          v-model="booking.vendor_booking_id"
          class="text-gray-700 py-2 px-4 rounded-lg"
        />
      </div>
    </div>
    <div class="flex flex-col items-center gap-4">
      <button class="bg-slate-500" @click="book">Boka</button>
      <NuxtLink to="/" class="text-slate-300">Tillbaka</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: "fullscreen" });

const booking = ref({
  court_id: 4,
  duration: 90,
  facility: { id: 2, name: "WAP Birsta" },
  start_time: "2023-04-23T15:23:53.225361+00:00",
  vendor_booking_id: "xyz",
});

const book = async () => {
  const backendSwishServer = "http://localhost:7777";
  try {
    const swishLink = await $fetch(`${backendSwishServer}/book`, {
      method: "POST",
      body: { hello: "world " },
    });

    console.log(swishLink);
    if (swishLink) {
      navigateTo(swishLink, { external: true });
    }
  } catch (error) {
    console.error(error);
  }
};
// const updateBooking = async () => {
//   const response = await getBookingByPk(useRoute().params.id as string);
//   booking.value = response;
// };
// updateBooking();

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
const { isMobile } = useDevice();
</script>

<style scoped></style>
