<template>
  <div class="">
    <ArticleItem v-for="article in articles" :key="article.id" :article="article" />
  </div>
</template>

<script lang="ts" setup>
import type IArticle from "~/interfaces/models/Article";

interface IProps {
  articles?: IArticle[];
}

const props = defineProps<IProps>();
</script>
