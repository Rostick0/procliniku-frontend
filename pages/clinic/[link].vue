<template>
  <div class="px-8">
    <Search />
    <!-- {{ data }} -->
    <div class="clinic p-5 mt-5 shadow-md">
      <div class="clinic__title font-semibold text-xl mb-3">
        <span>{{ data?.name }}</span>
      </div>
      <div class="flex items-center gap-x-2 mb-3">
        <span>Поделиться</span>
        <IconVk class="shrink-0" />
        <IconTg class="shrink-0" />
      </div>
      <div class="flex gap-x-2.5 mb-6">
        <ClinicInfo :clinic="data" />
        <div class="clinic__raiting flex-col grow gap-y-1">
          <img class="w-full" src="/images/default-image.png" alt="" />
          <UiStars />
        </div>
      </div>
      <div class="mb-8">
        <div class="font-semibold mb-2.5">Информация о клинике</div>
        <div class="">{{ data?.description }}</div>
      </div>
      <div class="w-full">
        <UiYandexMap class="h-64" :cords="[data?.longitude, data?.latitude]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { clinic } from "~/interfaces/models/clinic";

const data = {
  id: 1,
  name: "ABOBA",
  address: "800 летие москвы",
  phone: "88005553535",
  rating: 4,
  longitude: 55.55,
  latitude: 37.3736,
  owner_id: 1,
  description:
    'В медицинском центре "Ультрамед+" можно пройти все виды УЗИ пациентам любого возраста. В современном оборудованном центре принимают специалисты различного профиля, все высшей категории. К вашим услугам акушер-гинеколог, маммолог-онколог, терапевт-гастроэнтеролог, эндокринолог и гематолог. ',
} as clinic;
</script>

<style lang="scss" scoped>
.clinic {
  &__raiting {
    width: 25vw;
  }
}
</style>
