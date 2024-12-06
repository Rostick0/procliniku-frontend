<template>
  <button class="btn rounded-lg text-white text-sm font-bold p-1 w-full">
    <slot />
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.btn {
  background-color: var(--ui-color);
}
</style>
