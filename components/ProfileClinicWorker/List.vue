<template>
  <table class="mt-6 w-full">
    <thead>
      <tr class="text-left">
        <th class="border-color-ui border-b-2 pr-2">Почта</th>
        <th class="border-color-ui border-l-2 border-b-2 px-2 py-2 w-full">
          ФИО
        </th>
        <th class="border-color-ui border-b-2">Должность</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="clinicWorker in clinicWorkers" :key="clinicWorker.id">
        <td class="pr-4">
          {{ clinicWorker?.user?.email }}
        </td>
        <td class="py-2 px-2 w-full">
          {{ clinicWorker?.user?.name }}
        </td>
        <td class="">{{ CLINIC_WORKER_ROLES[clinicWorker?.role] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import type IClinicWorker from "~/interfaces/models/ClinicWorker";

interface IProps {
  clinicWorkers?: IClinicWorker[] | [];
}

const props = defineProps<IProps>();
</script>
