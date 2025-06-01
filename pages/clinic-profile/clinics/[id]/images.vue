<template>
  <ClinicForm>
    <template #="{ clinic }">
      <ClinicMutationImages :clinic="clinic" />
    </template>
  </ClinicForm>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Фотогалерея клиники",
});

definePageMeta({
  middleware: ["auth"],
});
</script>
