<template>
  <div class="px-8">
    <div class="clinic rounded-lg p-5 mt-5 shadow-md">
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
      <div class="flex items-start gap-x-2.5 mb-6">
        <ClinicInfo :clinic="data" />
        <div class="clinic__raiting flex flex-col grow gap-y-1">
          <div class="pt-[112%] relative w-full">
            <img
              class="object-cover absolute top-0 w-full h-full"
              :src="data?.icon?.path_webp ?? '/images/default-image.svg'"
              :alt="data?.name"
            />
          </div>
          <UiStars :modelValue="data?.rating" />
        </div>
      </div>
      <div class="mb-4" v-if="data?.description">
        <div class="font-semibold mb-2.5">Информация о клинике</div>
        <div class="">{{ data?.description }}</div>
      </div>

      <div class="w-full">
        <UiYandexMap class="h-64" :coords="[data?.longitude, data?.latitude]" />
      </div>
    </div>
    <!-- <div class="mb-4">
        <div class="font-semibold mb-2.5">Фотогалерея клиники</div>
      </div> -->
    <UiBlock class="mt-5" v-if="data?.images?.length">
      <template #top>Фотогалерея</template>
      <template #center>
        <div class="flex flex-wrap gap-4">
          <img
            class="object-cover size-24"
            v-for="image in data.images"
            :src="image?.image?.path_webp + '?w=120'"
            :alt="data.name"
            width="96"
            height="96"
          />
        </div>
      </template>
    </UiBlock>
    <UiBlock class="mt-5" v-if="data?.reviews_card?.length">
      <template #top>Отзывы пациентов</template>
      <template #center>
        <div class="flex flex-col gap-4">
          <div class="" v-for="review in data?.reviews_card">
            <div class="flex flex-wrap items-start mb-2">
              <div class="grow">{{ review.user?.name }}</div>
              <UiStars :modelValue="review.rating" />
            </div>
            <div class="">{{ review.text }}</div>
          </div>
        </div>
      </template>
    </UiBlock>
    <UiBlock class="mt-5" v-if="data?.articles_card?.length">
      <template #top>Отзывы пациентов</template>
      <template #center>
        <div class="flex flex-col gap-y-2">
          <div
            class="border-color-ui border-b pb-2"
            v-for="article in data?.articles_card"
          >
            {{ article?.title }}
          </div>
        </div>
      </template>
      <template #bottom>
        <NuxtLink class="block mt-12" :to="ROUTES_NAMES">
          <UiButton>Смотреть больше</UiButton>
        </NuxtLink>
      </template>
    </UiBlock>
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
      extends:
        "work_times,icon,clinic_phones,my_favorite,images.image,reviews_card.user,articles_card",
    },
  })
  ?.then((res: { data?: IClinic }) => res?.data);

const isFavorite = ref<boolean>(!!data?.my_favorite);

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
    margin-left: auto;
    width: 25vw;
    max-width: 160px;
  }
}
</style>
