<template>
  <div class="block rounded-lg p-5 shadow-md">
    <div class="block__top font-bold mb-3">
      <slot name="top" />
    </div>
    <div class="">
      <slot name="center" />
    </div>
    <div class="">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.block {
  &__top {
    border-bottom: 1px solid var(--ui-color);
    padding-bottom: 4px;
  }
}
</style>
