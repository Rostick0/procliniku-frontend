<template>
  <NuxtLink
    class="profile-info flex items-center rounded-md shadow-md text-center px-8 py-2"
    :to="link"
  >
    <div class="flex justify-center">
      <slot name="icon" />
    </div>
    <div class="text-lg font-medium mx-auto">{{ title }}</div>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface IProps {
  title: string;
  link: string;
}

const props = defineProps<IProps>();
</script>
