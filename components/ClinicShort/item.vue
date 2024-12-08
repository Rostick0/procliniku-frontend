<template>
  <div class="clinic-short bg-white shadow-md flex gap-x-4 px-3 py-4">
    <NuxtLink
      class="clinic-short__image flex shrink-0"
      :to="`${ROUTES_NAMES.clinic}/clinic/${clinic?.link_name}`"
    >
      <img
        class=""
        :src="clinic?.image ?? '/images/default-image.svg'"
        :alt="clinic?.name"
        width="60"
        height="60"
      />
    </NuxtLink>
    <div class="">
      <NuxtLink
        class="block font-semibold mb-3"
        :to="`${ROUTES_NAMES.clinic}/clinic/${clinic?.link_name}`"
        >{{ clinic?.name }}</NuxtLink
      >
      <div class="clinic__info flex flex-col gap-y-2">
        <div class="flex items-start gap-x-3">
          <IconMap class="shrink-0" />
          <span>{{ clinic?.address }}</span>
        </div>
        <div class="flex items-center gap-x-3">
          <IconGlobe class="shrink-0" />
          <a class="font-medium text-ui" target="_blank" :href="clinic?.link">{{
            clinic?.link
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinic: IClinic;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.clinic-short {
  border-radius: 10px;

  &__image {
    width: 20vw;
    height: 20vw;

    img {
      width: 100%;
    }
  }
}
</style>
