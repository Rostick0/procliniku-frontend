<template>
  <div class="px-8">
    <div class="font-medium text-ui-2 mb-3">
      Лечебные учреждения города {{ city?.name }}
    </div>
    <Search class="mb-6" v-model="seachQuery" />
    <ServiceCategoriesList
      class="mb-4"
      :serviceCategories="serviceCategories"
    />
    <div class="font-medium text-ui-2 mb-3" id="titleClinics">
      Все учреждения
    </div>
    <ClinicShortList class="mb-10" :clinics="clinics" />
    <UiPagination v-model="filters.page" :meta="metaClinic" />
  </div>
</template>

<script lang="ts" setup>
import api from "~/api";
import type IClinic from "~/interfaces/models/Clinic";
import type IServiceCategory from "~/interfaces/models/ServiceCategory";
import debounce from "lodash/debounce";

const route = useRoute();

const city = await api.cities
  .get({ id: +route.params?.city_id })
  .then((res) => res?.data);

const { data: serviceCategories, get: getServiceCategories } = await useApi<
  IServiceCategory[]
>({
  apiMethod: "getAll",
  apiName: "serviceCategories",
  params: {
    "filterEQ[services.clinic_services.clinic.city_id]": route.params?.city_id,
    // extends: "service_category",
  },
});
await getServiceCategories();

const { filters } = useFilter<{
  "filterLIKE[name]": string;
  page: number;
}>({
  initialFilters: {
    page: 1,
  },
});

watch(
  () => filters.value.page,
  (cur) => {
    document
      .querySelector("#titleClinics")
      ?.scrollIntoView?.({ behavior: "smooth" });
  }
);

const seachQuery = ref();
watch(
  () => seachQuery.value,
  debounce((cur) => (filters.value["filterLIKE[name]"] = cur), 500)
);

watch(
  () => seachQuery.value,
  () => (filters.value.page = 1)
);

const {
  data: clinics,
  get: getClinics,
  meta: metaClinic,
} = await useApi<IClinic[]>({
  apiMethod: "getAll",
  apiName: "clinics",
  filters,
  params: {
    "filterEQ[city_id]": route.params?.city_id,
  },
});
await getClinics();
</script>
