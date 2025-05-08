<template>
  <span>
    <template v-for="(workTime, index) in groupWorkTimes(clinicWorkTime)">
      {{ workTime }} <br v-if="index !== clinicWorkTime.length - 1" />
    </template>
  </span>
</template>

<script lang="ts" setup>
import type IClinicWorkTime from "~/interfaces/models/ClinicWorkTime";

interface IProps {
  clinicWorkTime: IClinicWorkTime[];
}

const props = defineProps<IProps>();
</script>
