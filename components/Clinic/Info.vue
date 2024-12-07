<template>
  <div class="clinic__info flex flex-col gap-y-2">
    <div class="flex items-start gap-x-3">
      <IconMap class="shrink-0" />
      <span>{{ clinic?.address }}</span>
    </div>
    <div class="flex items-start gap-x-3">
      <IconClock class="shrink-0" />
      <span>Пн-Пт 09:00–21:00; <br />Сб-Вс 09:00–17:00</span>
    </div>
    <div class="flex items-start gap-x-3">
      <IconTel class="shrink-0" />
      <span class="whitespace-pre-line">
        {{ clinic?.clinic_phones?.map((item) => item?.phone)?.join("\r\n") }}
      </span>
    </div>
    <div class="flex items-center gap-x-3">
      <IconGlobe class="shrink-0" />
      <a class="font-medium text-ui" target="_blank" :href="clinic?.link">{{
        clinic?.link
      }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";
interface IProps {
  clinic: IClinic;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scopedc>
.clinic__info {
  font-size: 11px;
  overflow-wrap: break-word;
  overflow-wrap: anywhere;
}
</style>
