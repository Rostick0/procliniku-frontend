<template>
  <button
    class="btn rounded-lg text-white text-sm font-bold p-1 w-full"
    :class="[bgColor ? `bg-${bgColor}` : '']"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface IProps {
  bgColor?: "grey" | null;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.btn {
  background-color: var(--ui-color);

  &.bg-grey {
    background-color: var(--grey-color);
  }
}
</style>
