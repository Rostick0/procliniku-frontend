<template>
  <div class="clinic-short bg-white shadow-md flex gap-x-4 px-3 py-4">
    <NuxtLink
      class="clinic-short__image flex shrink-0"
      :to="`${ROUTES_NAMES.clinic}/${clinic?.link_name}`"
    >
      <img
        class=""
        :src="clinic?.icon?.path_webp ?? '/images/default-image.svg'"
        :alt="clinic?.name"
        width="60"
        height="60"
      />
    </NuxtLink>
    <div class="flex flex-col">
      <NuxtLink
        class="block font-semibold mb-3"
        :to="`${ROUTES_NAMES.clinic}/${clinic?.link_name}`"
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
      <div class="text-sm mt-2">
        {{ service?.service_category?.name + " " + service?.name }}
      </div>
      <div class="font-bold ui text-sm mt-auto">
        {{ moment(date).format("DD MMM HH:mm:ss") }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import type IClinic from "~/interfaces/models/Clinic";
import type IService from "~/interfaces/models/Service";

interface IProps {
  clinic: IClinic;
  date: Date;
  service: IService;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.clinic-short {
  border-radius: 10px;

  &__image {
    width: 20vw;
    max-width: 160px;
    height: 100%;

    img {
      width: 100%;
    }
  }
}
</style>
