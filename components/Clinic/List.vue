<template>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8" v-if="clinics?.length">
    <ClinicItem v-for="clinic in clinics" :key="clinic?.id" :clinic="clinic" />
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinics: IClinic[] | null;
}

const props = defineProps<IProps>();
</script>
