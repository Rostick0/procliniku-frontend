<template>
  <div class="search">
    <div class="search-field flex">
      <UiButton
        class="search__button flex px-3 py-2 items-center justify-center"
      >
        <IconSearch />
      </UiButton>
      <UiField
        class="search__input"
        v-model="searchQuery"
        placeholder="Введите запрос"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const prosp = defineProps();

const searchQuery = ref();
</script>

<style lang="scss" scoped>
.search {
  &-field {
    border: 2px solid var(--ui-color);
    border-radius: 5px;
  }

  &__button {
    background-color: transparent;
    border-right: 2px solid var(--ui-color);
    border-radius: 0;
    width: auto;
  }

  &__input {
    background-color: transparent;
  }
}
</style>
