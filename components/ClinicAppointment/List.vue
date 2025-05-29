<template>
  <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
    <ClinicAppointmentItem
      v-for="appointment in appointments"
      :key="appointment?.id"
      :clinic="appointment?.clinic"
      :date="appointment?.date"
      :service="appointment?.service"
    />
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";
import type IAppointment from "~/interfaces/models/Appointment";

interface IProps {
  appointments: IAppointment[] | null;
}

const props = defineProps<IProps>();
</script>
