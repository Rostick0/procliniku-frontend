<template>
  <div class="block rounded-lg p-5 shadow-md">
    <div class="block__top border-color-ui border-b font-bold pb-1 mb-3">
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
