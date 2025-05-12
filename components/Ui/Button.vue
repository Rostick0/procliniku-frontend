<template>
  <button class="btn p-1 w-full" :class="[bgColor ? `bg-${bgColor}` : '']">
    <slot />
  </button>
</template>

<script lang="ts" setup>
interface IProps {
  bgColor?: "grey" | "red";
}

const props = defineProps<IProps>();
</script>
<!-- 
<style lang="scss" scoped>
.btn {
  
}
</style> -->
