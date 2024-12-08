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
        placeholder="Найти клинику, услугу"
        :modelValue="modelValue"
        @update:modelValue="(val) => emits('update:modelValue', val)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  modelValue: string;
}

const props = defineProps<IProps>();

const emits = defineEmits(["update:modelValue"]);
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
    padding: 6px 10px;
  }
}
</style>
