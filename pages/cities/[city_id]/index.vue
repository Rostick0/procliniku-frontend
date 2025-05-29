<template>
  <div class="container">
    <div class="font-medium text-ui-2 mb-3">
      Лечебные учреждения города {{ city?.name }}
    </div>
    <Search class="mb-6" v-model="searchQuery" />
    <ServiceCategoriesList
      class="mb-4"
      @makeServiceCategory=""
      :serviceCategories="serviceCategories"
    />
    <div class="font-medium text-ui-2 mb-3" id="titleClinics">
      Все учреждения
    </div>
    <ClinicShortList class="mb-8" :clinics="clinics" />
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
  "filterEQ[clinic_services.service_id]"?: number;
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

const searchQuery = ref();
watch(
  () => searchQuery.value,
  debounce((cur) => (filters.value["filterLIKE[name]"] = cur), 500)
);

watch(
  () => searchQuery.value,
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

const title = computed(() => `${city?.name} | Поиск клиники по городу - ${city?.name}`);
const description = "Поможем вам найти подходящую - клинику именно для вас";
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>
