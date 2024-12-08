<template>
  <div class="flex flex-col gap-y-8" v-if="clinics?.length">
    <ClinicItem v-for="clinic in clinics" :clinic="clinic" />
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinics: IClinic[] | null;
}

const props = defineProps<IProps>();
</script>
