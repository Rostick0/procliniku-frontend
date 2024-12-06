<template>
  <div class="px-8">
    <Search />
    <!-- {{ data }} -->
    <div class="clinic p-5 shadow-md">
      <div class="clinic__title">
        <span>{{ data?.name }}</span>
      </div>
      <div class="flex gap-x-2">
        <span>Поделиться</span>
        <IconVk />
        <IconTg />
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
