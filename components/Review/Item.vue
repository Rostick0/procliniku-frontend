<template>
  <div class="">
    <div class="flex flex-wrap items-start mb-2">
      <div class="font-medium grow">{{ review.user?.name }}</div>
      <UiStars :modelValue="review.rating" />
    </div>
    <div class="text-sm">{{ review.text }}</div>
  </div>
</template>

<script lang="ts" setup>
import type IReview from "~/interfaces/models/Review";

interface IProps {
  review: IReview;
}

const props = defineProps<IProps>();
</script>
