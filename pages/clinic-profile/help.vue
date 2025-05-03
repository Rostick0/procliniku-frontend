<template>
  <div class="p-2">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <div class="text-sm mb-4">
        <h3 class="font-medium mb-1">Добавление клиники</h3>
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
        <div class="">
          <UiButton class="px-3" @click="$router.back()">Назад</UiButton>
        </div>
        <a class="" href="https://procliniku.ru/" target="_blank" external>
          <UiButton class="px-3">Перейти на сайт</UiButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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
