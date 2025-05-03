<template>
  <table class="mt-6 w-full">
    <thead>
      <tr class="text-left">
        <th class="border-color-ui border-b-2 pr-2">Город</th>
        <th class="border-color-ui border-l-2 border-b-2 pl-2 py-2">
          Название
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="clinic in clinics" :key="clinic.id">
        <td class="pr-4">
          {{ clinic?.city?.name }}
        </td>
        <td class="py-2 w-full">
          <NuxtLink :to="ROUTES_NAMES.clinic_profile_clinics_id(clinic.id)">
            <UiButton>{{ clinic?.name }}</UiButton>
          </NuxtLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinics?: IClinic[] | [];
}

const props = defineProps<IProps>();
</script>
