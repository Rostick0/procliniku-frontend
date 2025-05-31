<template>
  <div class="container" v-if="clinic">
    <div class="clinic rounded-lg p-5 mt-5 shadow-md">
      <div class="flex items-start gap-x-2">
        <IconVerification v-if="clinic?.is_verification" />
        <div class="clinic__title font-semibold text-xl mb-3">
          <span>{{ clinic?.name }}</span>
        </div>
        <button class="flex ml-auto" @click="toggleFavorite">
          <IconFavorite :fill="isFavorite ? 'red' : '#BBBEC0'" />
        </button>
      </div>
      <div class="flex items-center gap-x-2 mb-3">
        <span>Поделиться</span>
        <a
          :href="`https://vk.com/share.php?title=${clinic?.main_category?.name} - ${clinic?.name}&url=${requestUrl.href}`"
          target="_blank"
        >
          <IconVk class="shrink-0" />
        </a>
        <a
          :href="`https://t.me/share/url?text=${clinic?.main_category?.name} - ${clinic?.name}&url=${requestUrl.href}`"
          target="_blank"
        >
          <IconTg class="shrink-0" />
        </a>
      </div>
      <div class="flex items-start gap-x-2.5 mb-6">
        <ClinicInfo :clinic="clinic" />
        <div class="clinic__raiting flex flex-col grow gap-y-1">
          <div class="pt-[112%] relative w-full">
            <img
              class="object-contain absolute top-0 w-full h-full"
              :src="clinic?.icon?.path_webp ?? '/images/default-image.svg'"
              :alt="clinic?.name"
            />
          </div>
          <UiStars :modelValue="clinic?.rating" />
        </div>
      </div>
      <div class="mb-4" v-if="clinic?.description">
        <div class="font-semibold mb-2.5">Информация о клинике</div>
        <div class="">{{ clinic?.description }}</div>
      </div>

      <div class="w-full">
        <UiYandexMap
          class="h-64"
          :coords="[clinic?.latitude, clinic?.longitude]"
        />
      </div>
    </div>

    <UiBlock class="mt-5" v-if="clinic?.images?.length">
      <template #top>Фотогалерея</template>
      <template #center>
        <div class="flex flex-wrap gap-4">
          <img
            class="object-contain size-24"
            v-for="image in clinic.images"
            :src="image?.image?.path_webp + '?w=120'"
            :alt="clinic.name"
            width="96"
            height="96"
          />
        </div>
      </template>
    </UiBlock>

    <UiBlock class="mt-5">
      <template #top>Отзывы пациентов</template>
      <template #center>
        <div class="mb-4" v-if="myReview && !isAddMark">
          <div class="font-bold mb-2">Мой отзыв</div>
          <ReviewItem :review="{ ...myReview, user }" />
        </div>
        <UiButton v-if="!isAddMark" @click="isAddMark = true"
          >{{ myReview ? "Изменить" : "Добавить" }} отзыв</UiButton
        >
        <ReviewForm
          v-else
          @sended="(review) => ((myReview = review), (isAddMark = false))"
          :review="myReview"
          :clinic="clinic"
        />

        <div class="flex flex-col gap-4" v-if="reviews?.length">
          <br />
          <ReviewItem
            v-for="review in reviews"
            :key="review.id"
            :review="review"
          />
        </div>
        <div
          class="flex items-center justify-center h-16"
          v-else-if="!myReview"
        >
          Отзывов отсуствуют
        </div>
      </template>
      <template v-if="metaReviews && metaReviews?.total > 3" #bottom>
        <NuxtLink
          class="block mt-12"
          :to="ROUTES_NAMES.articles_clinic(clinic.link_name)"
        >
          <UiButton>Смотреть больше</UiButton>
        </NuxtLink>
      </template>
    </UiBlock>

    <UiBlock class="mt-5" v-if="articles?.length">
      <template #top>Статьи</template>
      <template #center>
        <div class="flex flex-col gap-y-2">
          <NuxtLink
            class="border-color-ui border-b pb-2"
            v-for="article in articles"
            :key="article.id"
            :to="ROUTES_NAMES.article(article.id)"
          >
            {{ article?.title }}
          </NuxtLink>
        </div>
      </template>
      <template v-if="metaArticles && metaArticles?.total > 3" #bottom>
        <NuxtLink
          class="block mt-12"
          :to="ROUTES_NAMES.articles_clinic(clinic.link_name)"
        >
          <UiButton>Смотреть больше</UiButton>
        </NuxtLink>
      </template>
    </UiBlock>
  </div>
</template>

<script lang="ts" setup>
import api from "~/api";
import type IArticle from "~/interfaces/models/Article";
import type IClinic from "~/interfaces/models/Clinic";
import type IReview from "~/interfaces/models/Review";
import type IUser from "~/interfaces/models/User";

const route = useRoute();
const requestUrl = useRequestURL();

const user = useState<IUser>("user");

const isAddMark = ref<boolean>(false);

const { data: clinic, get: getClinic } = await useApi<IClinic>({
  apiName: "clinics",
  apiMethod: "showByLinkName",
  params: {
    extends: "work_times,icon,clinic_phones,my_favorite,my_review,images.image",
  },
  requestParams: {
    link_name: route.params?.link_name as string,
  },
});

const {
  data: articles,
  get: getArticles,
  meta: metaArticles,
} = await useApi<IArticle[]>({
  apiName: "articles",
  apiMethod: "getAll",
  params: {
    "filterEQ[clinic.link_name]": route.params?.link_name,
  },
});

const {
  data: reviews,
  get: getReviews,
  meta: metaReviews,
} = await useApi<IReview[]>({
  apiName: "reviews",
  apiMethod: "getAll",
  params: {
    "filterEQ[clinic.link_name]": route.params?.link_name,
    "filterNEQ[user_id]": user.value.id,
    extends: "user",
  },
});

await Promise.all([getClinic(), getArticles(), getReviews()]);

const myReview = ref<IReview | undefined>(clinic.value?.my_review);
const isFavorite = ref<boolean>(!!clinic.value?.my_favorite);

if (!clinic.value)
  throw createError({
    statusCode: 404,
    message: "Страница не найден",
  });

const toggleFavorite = async () => {
  const clinic_id = clinic.value?.id as number;

  if (isFavorite.value) {
    await api.favorites.delete({ clinic_id });
  } else {
    await api.favorites.create({
      data: {
        clinic_id,
      },
    });
  }

  isFavorite.value = !isFavorite.value;
};

const title = clinic.value?.name;
const description = clinic.value?.description;
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
    max-width: 120px;
  }
}
</style>
