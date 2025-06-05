<template>
  <div class="flex lg:p-8 min-h-screen">
    <div
      class="auth bg-white rounded-3xl flex flex-col grow items-center justify-center relative px-4"
    >
      <NuxtLink class="auth__logo absolute top-6" :to="ROUTES_NAMES.main">
        <IconLogo />
      </NuxtLink>
      <div class="auth__inner w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  &__inner {
    max-width: 580px;
  }
}
</style>
