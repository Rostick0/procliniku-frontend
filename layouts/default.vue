<template>
  <div class="wrapper flex flex-col min-h-screen">
    <header class="header">
      <div class="container">
        <div class="flex items-center justify-between pt-6 pb-11">
          <NuxtLink class="flex" :to="ROUTES_NAMES.main">
            <IconLogo />
          </NuxtLink>
          <div class="flex gap-x-4">
            <NuxtLink class="flex" :to="ROUTES_NAMES.profile">
              <IconProfile />
            </NuxtLink>
            <button class="flex" @click="openMenu">
              <IconBurger />
            </button>
          </div>
        </div>
      </div>
    </header>
    <main class="main grow">
      <slot />
    </main>
    <footer class="footer font-semibold text-sm pt-5 pb-4 mt-8">
      <div class="container">
        <div class="opacity-60">
          <div class="flex gap-x-12 mb-12">
            <div class="footer-menu__item">
              <div class="text-base">ПроКлинику</div>
              <button class="flex" @click="openContacts">Контакты</button>
              <NuxtLink :to="ROUTES_NAMES.about">О сервисе</NuxtLink>
              <NuxtLink :to="ROUTES_NAMES.regions">Регионы</NuxtLink>
              <NuxtLink :to="ROUTES_NAMES.cities">Города</NuxtLink>
              <span @click="openSocial" role="button">Соцсети</span>
              <NuxtLink>Тарифы</NuxtLink>
            </div>
            <div class="footer-menu__item">
              <div class="text-base">Условия использования</div>
              <NuxtLink :to="ROUTES_NAMES.offer">Оферта для юр.лиц</NuxtLink>
              <NuxtLink :to="ROUTES_NAMES.offer">Оферта для физ.лиц</NuxtLink>
              <NuxtLink :to="ROUTES_NAMES.offer"
                >Обработка персональных данных</NuxtLink
              >
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
      </div>
    </footer>
  </div>
  <LazyUiModal :name="nameModalContacts">
    <UiModalInner class="py-14 px-4">
      <div class="flex flex-col items-start gap-y-5">
        <a class="flex items-center gap-x-2" href="tel:73472019690">
          <IconTel width="18" height="18" />
          <span>+7 (347) 201-96-90</span>
        </a>
        <a class="flex items-center gap-x-2" :href="`mailto:${SITE_INFO.mail}`">
          <IconMail width="22" />
          <span>{{ SITE_INFO.mail }}</span>
        </a>
        <a
          class="flex items-center gap-x-2"
          :href="SITE_INFO.address_link"
          target="_blank"
        >
          <IconMap class="shrink-0" width="16" height="21" />
          <span>{{ SITE_INFO.address }}</span>
        </a>
      </div>
    </UiModalInner>
  </LazyUiModal>

  <LazyUiModal :name="nameModalMenu">
    <UiModalInner class="px-6 py-4">
      <div class="flex flex-col items-start justify-start gap-y-5 w-full">
        <NuxtLink
          class="flex items-center gap-x-2"
          @click="closeMenu"
          :to="ROUTES_NAMES.regions"
        >
          <IconMap class="shrink-0" width="18" height="17" />
          <span>Москва</span>
        </NuxtLink>
        <NuxtLink
          class="flex items-center gap-x-2"
          @click="closeMenu"
          :to="ROUTES_NAMES.main"
        >
          <IconHome class="shrink-0" width="18" height="18" />
          <span>Главная</span>
        </NuxtLink>
        <NuxtLink
          class="flex items-center gap-x-2"
          @click="closeMenu"
          :to="ROUTES_NAMES.clinic"
        >
          <IconClinic class="shrink-0" width="18" height="18" />
          <span>Клиники</span>
        </NuxtLink>
        <span
          class="flex items-center gap-x-2"
          @click="openContacts(), closeMenu()"
          role="button"
        >
          <IconTel class="shrink-0" width="18" height="18" />
          <span>Контакты</span>
        </span>
        <NuxtLink
          class="flex items-center gap-x-2"
          @click="closeMenu"
          :to="ROUTES_NAMES.about"
        >
          <IconPatient class="shrink-0" width="18" height="18" />
          <span>Пациентам</span>
        </NuxtLink>
      </div>
    </UiModalInner>
  </LazyUiModal>

  <LazyUiModal :name="nameModalSocial">
    <UiModalInner class="py-16 px-4">
      <div class="flex flex-col items-start gap-y-5">
        <a
          class="flex items-center gap-x-2"
          :href="`https://t.me/procliniku`"
          @click="closeSocial"
          target="_blank"
        >
          <IconTg
            class="shrink-0"
            fill="var(--ui-color)"
            width="18"
            height="18"
          />
          <span class="underline">https://t.me/procliniku</span>
        </a>
        <a
          class="flex items-center gap-x-2"
          :href="`https://vk.com/procliniku`"
          @click="closeSocial"
          target="_blank"
        >
          <IconVk
            class="shrink-0"
            fill="var(--ui-color)"
            width="18"
            height="18"
          />
          <span class="underline">https://vk.com/procliniku</span>
        </a>
      </div>
    </UiModalInner>
  </LazyUiModal>
</template>

<script lang="ts" setup>
const nameModalContacts = "modal-contacts";
const { open: openContacts } = useModal({ name: nameModalContacts });

const nameModalMenu = "modal-menu";
const { open: openMenu, close: closeMenu } = useModal({ name: nameModalMenu });

const nameModalSocial = "modal-social";
const { open: openSocial, close: closeSocial } = useModal({
  name: nameModalSocial,
});
</script>

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
