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
      <span
        >+7 (347) 266 34 34; <br />
        +7 (901) 810 77 33</span
      >
    </div>
    <div class="flex items-center gap-x-3">
      <IconGlobe class="shrink-0" />
      <a
        class="font-medium text-ui"
        target="_blank"
        href="https://ultramedufa.ru/"
        >https://ultramedufa.ru/</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { clinic } from "~/interfaces/models/clinic";
interface IProps {
  clinic: clinic;
}

const props = defineProps<IProps>();
</script>
