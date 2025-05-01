<template>
  <div class="p-2">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <!-- {{ clinic }} -->
      <div class="">
        <ClinicMutationForm :clinic="clinic" />
      </div>
      <!-- <ProfileClinicList :clinics="clinics" /> -->
      <!-- <div class="grid gap-y-6 mb-4">
          <ProfileInfo
            :count="favorites?.total"
            title="Любимые клиники"
            :link="ROUTES_NAMES.profile_favorites"
            :list="favoirtesData"
          />
          <ProfileInfo
            :count="appointmentFuture?.total"
            title="Будущие записи"
            :link="ROUTES_NAMES.profile_appointment_future"
            :list="appointmentFutureData"
          />
          <ProfileInfo
            :count="appointmentPast?.total"
            title="Посещения"
            :link="ROUTES_NAMES.profile_appointment_past"
            :list="appointmentPastData"
          />
        </div> -->
      <div class="flex gap-x-2 items-center justify-center">
        <IconMap width="18" height="18" />
        <span>Уфа</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import api from "~/api";
import type IUser from "~/interfaces/models/User";
const route = useRoute();

const user = useState<IUser>("user");

const clinic = await api.clinics
  .get({
    id: route.params.id.toString(),
    // params: {
    //   "filterEQ[owner_id]": user.value?.id,
    //   extends: "city",
    // },
  })
  ?.then((res) => res?.data);

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
.profile {
  border-radius: 10px;

  &__top {
    border-bottom: 1px solid var(--ui-color);
  }
}
</style>
