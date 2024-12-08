<template>
  <div class="px-8">
    <!-- {{ data }} -->
    <div class="clinic p-5 mt-5 shadow-md">
      <div class="clinic__title font-semibold text-xl mb-3">
        <span>{{ data?.name }}</span>
      </div>
      <div class="flex items-center gap-x-2 mb-3">
        <span>Поделиться</span>
        <a
          :href="`https://vk.com/share.php?title=${data?.main_category?.name} - ${data?.name}&url=${requestUrl.href}`"
          target="_blank"
        >
          <IconVk class="shrink-0" />
        </a>
        <a
          :href="`https://t.me/share/url?text=${data?.main_category?.name} - ${data?.name}&url=${requestUrl.href}`"
          target="_blank"
        >
          <IconTg class="shrink-0" />
        </a>
      </div>
      <div class="flex gap-x-2.5 mb-6">
        <ClinicInfo :clinic="data" />
        <div class="clinic__raiting flex flex-col grow gap-y-1">
          <img class="w-full" src="/images/default-image.png" alt="" />
          <UiStars :modelValue="data?.rating" />
        </div>
      </div>
      <div class="mb-8" v-if="data?.description">
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
import api from "~/api";
import type IClinic from "~/interfaces/models/Clinic";

const route = useRoute();

const requestUrl = useRequestURL();

const data = await api.clinics
  .showByLinkName({
    link_name: route.params?.link_name as string,
    params: {
      extends: "clinic_phones",
    },
  })
  ?.then((res: { data?: IClinic }) => res?.data);

if (!data) {
  throw navigateTo("/404");
}

console.log(data);
// const {data} = await useApi()

// const data = {
//   id: 1,
//   name: "ABOBA",
//   address: "800 летие москвы",
//   rating: 4,
//   longitude: 55.55,
//   latitude: 37.3736,
//   owner_id: 1,
//   description:
//     'В медицинском центре "Ультрамед+" можно пройти все виды УЗИ пациентам любого возраста. В современном оборудованном центре принимают специалисты различного профиля, все высшей категории. К вашим услугам акушер-гинеколог, маммолог-онколог, терапевт-гастроэнтеролог, эндокринолог и гематолог. ',
// } as IClinic;
</script>

<style lang="scss" scoped>
.clinic {
  &__raiting {
    width: 25vw;
  }
}
</style>
