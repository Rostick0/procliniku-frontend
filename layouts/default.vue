<template>
  <div class="wrapper flex flex-col min-h-screen">
    <header class="header flex items-center justify-between px-8 pt-6 pb-11">
      <NuxtLink class="flex" :to="ROUTES_NAMES.main">
        <IconLogo />
      </NuxtLink>
      <div class="flex gap-x-4">
        <NuxtLink class="flex" :to="ROUTES_NAMES.profile">
          <IconProfile />
        </NuxtLink>
        <IconBurger />
      </div>
    </header>
    <main class="main grow">
      <slot />
    </main>
    <footer class="footer font-semibold text-sm px-8 pt-5 pb-4">
      <div class="opacity-60">
        <div class="flex gap-x-12 mb-12">
          <div class="footer-menu__item">
            <div class="text-base">ПроКлинику</div>
            <NuxtLink>Контакты</NuxtLink>
            <NuxtLink>О сервисе</NuxtLink>
            <NuxtLink>Регионы</NuxtLink>
            <NuxtLink>Города</NuxtLink>
            <NuxtLink>Соцсети</NuxtLink>
            <NuxtLink>Тарифы</NuxtLink>
          </div>
          <div class="footer-menu__item">
            <div class="text-base">ПроКлинику</div>
            <NuxtLink>Оферта для юр.лиц</NuxtLink>
            <NuxtLink>Оферта для физ.лиц</NuxtLink>
            <NuxtLink>Обработка персональных данных</NuxtLink>
            <NuxtLink class="mt-auto">© 2021 ПроКлинику</NuxtLink>
          </div>
        </div>
        <div class="">
          Информация, представленная на сайте, не может быть использована для
          постановки диагноза, назначения лечения и не заменяет прием врача.
          <br />
          <br />
          Номер в Едином Реестре российского ПО: 20472
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer {
  background-color: rgba(38, 116, 174, 0.05);

  &-menu {
    &__item {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    }
  }
}
</style>
