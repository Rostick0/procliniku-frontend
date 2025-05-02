<template>
  <div class="p-2">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <div class="text-sm mb-4">
        <div class="font-medium mb-1">Добавление клиники</div>
        <ol class="list-decimal pl-4">
          <li>
            Добавьте юридическое лицо в систему с помощью вашего ключа ЭЦП.
          </li>
          <li>
            У нового юридического лица нажмите кнопку - "Добавить клинику"
          </li>
          <li>Система найдет действующие лицензии в базе Росздравнадзора</li>
          <li>По данным лицензии система подберет клиник из базы сайта</li>
          <li>Установите связи</li>
        </ol>
      </div>
      <div class="flex gap-x-2 items-center justify-between">
        <UiButton class="px-3 w-fit" @click="$router.back()">Назад</UiButton>
        <a class="flex w-fit" href="https://procliniku.ru/">
          <UiButton class="px-3">Перейти на сайт</UiButton>
        </a>
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

// const route = useRoute();

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
