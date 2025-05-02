<template>
  <div class="profile-info rounded-md shadow-md text-center px-5 py-3">
    <div class="font-semibold text-sm py-3 mb-2">{{ title }}</div>
    <NuxtLink class="flex w-full" :to="link">
      <UiButton>Узнать больше</UiButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  title: string;
  link: string;
}

const props = defineProps<IProps>();
</script>
