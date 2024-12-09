<template>
  <div class="px-8">
    <ClinicShortList class="mb-4" :clinics="clinics" />
    <UiPagination v-model="filters.page" :meta="meta" />
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";
import type IFavorite from "~/interfaces/models/Favorite";
import type IUser from "~/interfaces/models/User";

const user = useState<IUser>("user");

const { filters } = useFilter<{
  page: number;
}>({
  initialFilters: {
    page: 1,
  },
});
const { data, meta } = await useApi<IFavorite[]>({
  apiMethod: "getAll",
  apiName: "favorites",
  filters,
  params: {
    "filterEQ[user_id]": user.value?.id,
    extends: "clinic",
  },
  init: true,
});

const clinics = computed(
  () => data.value?.map((item) => item?.clinic) as IClinic[]
);
</script>
