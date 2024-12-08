<template>
  <div class="modal-inner bg-white flex items-center justify-center">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modal-inner {
  border-radius: 10px;
  // padding: 56px 10px;
  width: calc(100vw - 64px);
}
</style>
