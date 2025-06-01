<template>
  <ClinicForm>
    <template #="{ clinic }">
      <ClinicMutationTags :clinic="clinic" />
    </template>
  </ClinicForm>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: "Теги и услуги клиники",
});

definePageMeta({
  middleware: ["auth"],
});
</script>
