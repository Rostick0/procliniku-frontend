<template>
  <div class="inline-flex items-center gap-x-4">
    <NuxtLink class="flex" :to="to">
      <IconArrow />
    </NuxtLink>
    <span class="font-medium text-lg">
      <slot />
    </span>
  </div>
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
