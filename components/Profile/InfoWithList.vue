<template>
  <div class="profile-info rounded-md shadow-md text-center px-5 py-3">
    <div class="font-semibold text-xl mb-2">{{ count }}</div>
    <div class="font-semibold text-sm mb-2">{{ title }}</div>
    <div class="flex flex-col gap-y-2 text-sx mb-3" v-if="list?.length">
      <div v-for="item in list" :key="item?.id">{{ item?.name }}</div>
    </div>
    <NuxtLink v-if="count > 1" class="flex w-full" :to="link">
      <UiButton>Узнать больше</UiButton>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
// interface Item {
//   id: number;
//   name: string;
// }

interface IProps {
  title: string;
  count: number;
  link: string;
  list?: any[] | null;
}

const props = defineProps<IProps>();
</script>
