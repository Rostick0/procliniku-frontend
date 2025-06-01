<template>
  <div class="container">
    <h2 class="text-xl font-semibold mb-3">Изменения профиля</h2>
    <ProfileBack class="mb-4" :to="ROUTES_NAMES.profile"
      >Вернуться в профиль</ProfileBack
    >
    <UserForm :user="user" />
    <br />
  </div>
</template>

<script lang="ts" setup>
import type IUser from "~/interfaces/models/User";

const user = useState<IUser>("user");

useSeoMeta({
  title: "Изменить профиль",
});
</script>
