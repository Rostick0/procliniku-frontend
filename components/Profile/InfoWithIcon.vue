<template>
  <NuxtLink
    class="profile-info block rounded-md shadow-md text-center px-5 py-3"
    :to="link"
  >
    <div class="flex justify-center py-3 mb-2">
      <slot name="icon" />
    </div>
    <div class="text-sm font-medium">{{ title }}</div>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface IProps {
  title: string;
  link: string;
}

const props = defineProps<IProps>();
</script>
