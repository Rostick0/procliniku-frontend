<template>
  <ClinicForm>
    <template #="{ clinic }">
      <ClinicMutationTags :clinic="clinic" />
    </template>
  </ClinicForm>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"],
});
</script>
