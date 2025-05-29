<template>
  <div class="container" v-if="article">
    <h1 class="text-lg font-bold mb-0.5">{{ article?.title }}</h1>
    <time
      class="block text-xs mb-4 opacity-50"
      :datetime="article.created_at?.toString()"
      >{{ moment(article.created_at).format("DD MMM HH:mm:ss") }}</time
    >
    <div v-html="article?.content" />
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import type IArticle from "~/interfaces/models/Article";

const route = useRoute();

const { data: article, get: getArticle } = await useApi<IArticle>({
  apiName: "articles",
  apiMethod: "get",
  // params: {},
  requestParams: {
    id: route.params.id,
  },
});

await getArticle();
</script>
