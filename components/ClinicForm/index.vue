<template>
  <div class="p-2">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <ProfileBack
        :to="ROUTES_NAMES.clinic_profile_clinics_id(+$route.params.id)"
        >Изменение клиники</ProfileBack
      >
      <div class="mt-6" v-if="clinic">
        <ClinicMutationForm :clinic="clinic">
          <slot :clinic="clinic" />
        </ClinicMutationForm>
      </div>

      <div class="flex gap-x-2 items-center justify-center">
        <IconMap width="18" height="18" />
        <span>Уфа</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from "~/api";
import type IClinic from "~/interfaces/models/Clinic";
import type IUser from "~/interfaces/models/User";
const route = useRoute();

const user = useState<IUser>("user");

const { data: clinic, get } = await useApi<IClinic>({
  apiName: "clinics",
  apiMethod: "get",
  params: {
    extends:
      "clinic_phones,clinic_categories.category,city,clinic_services.service,images.image,icon,work_times",
  },
  requestParams: {
    id: route.params.id,
  },
});
await get();
</script>

<style lang="scss" scoped>
.profile {
  border-radius: 10px;

  &__top {
    border-bottom: 1px solid var(--ui-color);
  }
}
</style>
