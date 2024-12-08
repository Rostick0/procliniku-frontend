<template>
  <div class="service-categories grid grid-cols-2 gap-3 px-5 py-7 shadow-md">
    <span
      class="text-left underline decoration-dotted overflow-hidden text-ellipsis text-nowrap"
      v-for="serviceCategory in serviceCategories"
      :key="serviceCategory?.id"
      @click="emits('makeServiceCategory', serviceCategory)"
      :title="serviceCategory?.name"
      role="button"
    >
      {{ serviceCategory?.name }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import type IServiceCategory from "~/interfaces/models/ServiceCategory";

interface IProps {
  serviceCategories: IServiceCategory[] | null;
}

const props = defineProps<IProps>();

const emits = defineEmits(["makeServiceCategory"]);
</script>

<style lang="scss" scoped>
.service-categories {
  border-radius: 10px;
}
</style>
