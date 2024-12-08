<template>
  <div class="flex flex-col gap-y-6">
    <ClinicShortItem
      v-for="clinic in clinics"
      :key="clinic?.id"
      :clinic="clinic"
    />
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinics: IClinic[] | null;
}

const props = defineProps<IProps>();
</script>
