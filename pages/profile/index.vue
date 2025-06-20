<template>
  <div class="container">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <NuxtLink
        v-if="
          [USER_ROLE.owner, USER_ROLE.worker, USER_ROLE.admin].includes(
            user.role
          )
        "
        class="flex max-w-72 w-full mx-auto mb-4"
        :to="ROUTES_NAMES.clinic_profile"
      >
        <UiButton>Войти в профиль клиники</UiButton>
      </NuxtLink>
      <div class="grid sm:grid-cols-2 gap-6 mb-4">
        <ProfileInfoWithList
          :count="favorites?.total"
          title="Любимые клиники"
          :link="ROUTES_NAMES.profile_favorites"
          :list="favoirtesData"
        />
        <ProfileInfoWithList
          :count="appointmentFuture?.total"
          title="Будущие записи"
          :link="ROUTES_NAMES.profile_appointment_future"
          :list="appointmentFutureData"
        />
        <ProfileInfoWithList
          :count="appointmentPast?.total"
          title="Посещения"
          :link="ROUTES_NAMES.profile_appointment_past"
          :list="appointmentPastData"
        />
      </div>
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
import { USER_ROLE } from "~/interfaces/models/User";

const user = useState<IUser>("user");

const date = moment().format(dateTimeFormat);

const favorites = await api.favorites.getAll({
  params: {
    extends: "clinic",
    limit: 2,
  },
});
const favoirtesData = await favorites?.data?.map((item) => ({
  ...item,
  name: item?.clinic?.name,
}));

const appointmentFuture = await api.appointments.getAll({
  params: {
    "filterGEQ[date]": date,
    "filterEQ[user_id]": user.value?.id,
    limit: 2,
    extends: "clinic",
  },
});
const appointmentFutureData = await appointmentFuture?.data?.map((item) => ({
  ...item,
  name: item?.clinic?.name,
}));

const appointmentPast = await api.appointments.getAll({
  params: {
    "filterLE[date]": date,
    "filterEQ[user_id]": user.value?.id,
    limit: 2,
    extends: "clinic",
  },
});
const appointmentPastData = await appointmentPast?.data?.map((item) => ({
  ...item,
  name: item?.clinic?.name,
}));

useSeoMeta({
  title: "Профиль",
});

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
