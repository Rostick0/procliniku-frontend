<template>
  <div class="clinic p-5 shadow-md">
    <div class="clinic__title font-bold text-sm mb-3">{{ clinic?.name }}</div>
    <div class="flex items-center gap-x-1.5 text-ui text-xs mb-4">
      <IconList />
      <span>{{ clinic?.main_category?.name }}</span>
    </div>
    <div class="flex gap-x-1.5 items-start mb-4">
      <ClinicInfo class="clinic__info" :clinic="clinic" />
      <div class="grow">
        <UiYandexMap
          class="clinic__yandex-map"
          :coords="[clinic?.latitude, clinic?.longitude]"
        />
      </div>
    </div>
    <NuxtLink class="flex" :to="`${ROUTES_NAMES.clinic}/${clinic?.link_name}`">
      <UiButton>Узнать больше</UiButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";
interface IProps {
  clinic: IClinic;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.clinic {
  border-radius: 10px;

  &__title {
    border-bottom: 1px solid var(--ui-color);
  }

  &__yandex-map {
    margin-left: auto;
    width: 12vw;

    @media (max-width: 1279px) {
      width: 20vw;
    }

    @media (max-width: 767px) {
      width: calc(30vw + 50px);
    }
  }
}
</style>
