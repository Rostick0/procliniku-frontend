<template>
  <ClinicForm>
    <template #="{ clinic }">
      <ClinicMutationImages :clinic="clinic" />
    </template>
  </ClinicForm>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
