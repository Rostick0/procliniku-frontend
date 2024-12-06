<template>
  <div class="px-8">
    <ClinicItem v-for="clinic in clinics" :clinic="clinic" />
    <!-- <UiButton>312</UiButton> --> 
  </div>
</template>

<script lang="ts" setup>
import type { clinic } from "~/interfaces/clinit";

const clinics = [
  {
    id: 1,
    name: "ABOBA",
    address: "800 летие москвы",
    phone: "88005553535",
    rating: 4,
    longitude: 55.55,
    latitude: 37.3736,
    owner_id: 1,
  },
] as clinic[];
</script>

<style lang="scss" scoped></style>
