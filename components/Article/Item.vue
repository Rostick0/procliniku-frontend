<template>
  <NuxtLink
    class="rounded-lg shadow-md flex justify-between p-5"
    :to="ROUTES_NAMES.article(article.id)"
  >
    <div class="font-medium grow">{{ article.id }}</div>
    <time
      class="rounded-xs text-xs p-1"
      :datetime="article.created_at?.toString()"
    >
      {{ moment(article.created_at).format("DD MMM HH:mm:ss") }}
    </time>
  </NuxtLink>
</template>

<script lang="ts" setup>
import moment from "moment";
import type IArticle from "~/interfaces/models/Article";

interface IProps {
  article: IArticle;
}

const props = defineProps<IProps>();
</script>
