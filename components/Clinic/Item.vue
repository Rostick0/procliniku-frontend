<template>
  <div class="clinic p-5 shadow-md">
    <div class="clinic__title font-bold text-sm mb-3">{{ clinic?.name }}</div>
    <div class="flex items-center gap-x-1.5 text-ui text-xs mb-4">
      <IconList />
      <span>Клиники</span>
    </div>
    <div class="flex gap-x-1.5 items-start mb-4">
     <ClinicInfo />
      <div class="w-full">
        <UiYandexMap :cords="[clinic?.longitude, clinic?.latitude]" />
      </div>
    </div>
    <NuxtLink class="flex" to="">
      <UiButton>Узнать больше</UiButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { clinic } from "~/interfaces/models/clinic";
interface IProps {
  clinic: clinic;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.clinic {
  border-radius: 10px;

  &__title {
    border-bottom: 1px solid var(--ui-color);
  }

  &__info {
    font-size: 11px;
  }
}
</style>
