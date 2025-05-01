<template>
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
          <span class="font-light text-sm underline">изменить информацию</span>
        </NuxtLink>
      </div>
      <div class="text-sm mb-2" v-if="user?.birthdate">
        {{ getYearsString(moment().diff(moment(user?.birthdate), "years")) }}
      </div>
      <div class="text-sm">{{ user?.email }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";
import type IUser from "~/interfaces/models/User";

const user = useState<IUser>("user");
</script>
