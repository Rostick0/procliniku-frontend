<template>
  <div class="flex flex-col gap-y-2">
    <ReviewItem
      class="rounded-lg shadow-md p-5"
      v-for="review in reviews"
      :key="review.id"
      :review="review"
    />
  </div>
</template>

<script lang="ts" setup>
import type IReview from "~/interfaces/models/Review";

interface IProps {
  reviews: IReview[];
}

const props = defineProps<IProps>();
</script>
