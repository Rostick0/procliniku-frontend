<template>
  <div class="container">
    <h2 class="text-xl font-semibold mb-3">Ваши будущие записи в клиники</h2>
    <ProfileBack class="mb-4" :to="ROUTES_NAMES.profile">Назад</ProfileBack>
    <ClinicAppointmentList class="mb-4" :appointments="data" />
    <UiPagination v-model="filters.page" :meta="meta" />
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import api from "~/api";
import type IAppointment from "~/interfaces/models/Appointment";
import type IClinic from "~/interfaces/models/Clinic";
import type IUser from "~/interfaces/models/User";

const user = useState<IUser>("user");

const date = moment().format(dateTimeFormat);

const { filters } = useFilter<{
  page: number;
}>({
  initialFilters: {
    page: 1,
  },
});
const { data, meta } = await useApi<IAppointment[]>({
  apiMethod: "getAll",
  apiName: "appointments",
  filters,
  params: {
    "filterGEQ[date]": date,
    "filterEQ[user_id]": user.value?.id,
    extends: "clinic,service.service_category",
    sort: "-date",
  },
  init: true,
});

useSeoMeta({
  title: "Будущие записи",
});
</script>
