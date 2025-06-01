<template>
  <ClinicForm>
    <template #="{ clinic }">
      <ClinicMutationAddress :clinic="clinic" />
    </template>
  </ClinicForm>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Адрес клиники",
});

definePageMeta({
  middleware: ["auth"],
});
</script>
