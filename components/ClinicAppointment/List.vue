<template>
  <div class="flex flex-col gap-y-6">
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
