<template>
  <ClinicForm>
    <template #="{ clinic }">
      <ClinicMutationAddress :clinic="clinic" />
    </template>
  </ClinicForm>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
