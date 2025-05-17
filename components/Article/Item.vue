<template>
  <NuxtLink
    class="rounded-lg shadow-md flex justify-between p-5"
    :to="ROUTES_NAMES.article(article.id)"
  >
    <div class="font-medium grow">{{ article.id }}</div>
    <div class="rounded-xs text-xs p-1">
      {{ moment(article.created_at).format("DD MMM HH:mm:ss") }}
    </div>
    <!-- {{ article }} -->
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
