<template>
  <ClinicForm>
    <template #="{ clinic }">
      <ClinicMutationInfo :clinic="clinic" />
    </template>
  </ClinicForm>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Информация клиники",
});

definePageMeta({
  middleware: ["auth"],
});
</script>
