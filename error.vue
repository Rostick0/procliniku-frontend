<template>
  <NuxtLayout>
    <div class="error-page">
      <h2 class="title">{{ error?.statusCode }}</h2>
      <div class="error-page__content">
        <div class="">{{ error?.message }}</div>
        <div class="" v-if="error?.stack" v-html="error?.stack"></div>
      </div>
      <NuxtLink :to="ROUTES_NAMES.main">
        <UiButton>На главную</UiButton>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const error = useError();

useHead({
  title: error.value?.message,
});
</script>
