<template>
  <div class="p-2">
    <div class="profile shadow-md p-3">
      <div class="profile__top flex gap-x-2 pb-3 mb-8">
        <div class="shrink-0">
          <img src="/images/icon-user.svg" alt="" width="65" height="65" />
        </div>
        <div class="flex flex-col grow">
          <div class="flex justify-between mb-2">
            <div class="font-medium">
              {{ user?.name ?? "Пользователь" }}
            </div>
            <NuxtLink
              class="flex items-center gap-x-2"
              :to="ROUTES_NAMES.profile_edit"
            >
              <IconPencil class="shrink-0" />
              <span class="font-light text-sm underline"
                >изменить информацию</span
              >
            </NuxtLink>
          </div>
          <div class="text-sm mb-2" v-if="user?.birthdate">
            {{
              getYearsString(moment().diff(moment(user?.birthdate), "years"))
            }}
          </div>
          <div class="text-sm">{{ user?.email }}</div>
        </div>
      </div>
      <div class="grid gap-y-6 mb-4">
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
