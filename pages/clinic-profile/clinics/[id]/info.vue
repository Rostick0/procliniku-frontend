<template>
  <ClinicForm>
    <template #="{ clinic }">
      <ClinicMutationInfo :clinic="clinic" />
    </template>
  </ClinicForm>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
