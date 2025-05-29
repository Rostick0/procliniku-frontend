<template>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
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
