<template>
  <div class="px-8">
    <div class="clinic p-5 mt-5 shadow-md">
      <div class="flex items-start gap-x-2">
        <IconVerification v-if="data?.is_verification" />
        <div class="clinic__title font-semibold text-xl mb-3">
          <span>{{ data?.name }}</span>
        </div>
        <button class="flex ml-auto" @click="toggleFavorite">
          <IconFavorite :fill="isFavorite ? 'red' : '#BBBEC0'" />
        </button>
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
          <img
            class="w-full"
            src="/images/default-image.svg"
            :alt="data?.name"
          />
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
      extends: "clinic_phones,my_favorite",
    },
  })
  ?.then((res: { data?: IClinic }) => res?.data);

const isFavorite = ref(!!data?.my_favorite);

if (!data) {
  throw navigateTo("/404");
}

const toggleFavorite = async () => {
  const clinic_id = data?.id;

  if (isFavorite.value) {
    await api.favorites.delete({ clinic_id });
    isFavorite.value = false;
    return;
  }

  await api.favorites.create({
    data: {
      clinic_id,
    },
  });
  isFavorite.value = true;
};

const title = data?.name;
const description = data?.description;
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<style lang="scss" scoped>
.clinic {
  &__raiting {
    width: 25vw;
  }
}
</style>
