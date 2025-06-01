<template>
  <NuxtLink class="inline-flex items-center gap-x-4" :to="to">
    <IconArrow />
    <span class="font-medium text-lg">
      <slot />
    </span>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
} from "vue-router";

interface IProps {
  to?: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric;
}

const props = defineProps<IProps>();
</script>
