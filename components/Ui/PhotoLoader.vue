<template>
  <div class="flex gap-3">
    <label
      class="control__photoloader photoloader__block"
      :class="{ error: errorMessage || invalid }"
    >
      <input
        @change="handleOnFileChange"
        v-bind="$attrs"
        class="photoloader__input"
        type="file"
      />
      <img v-if="url" class="photoloader__preview mb-1" :src="url" alt="" />
      <span class="btn p-1">Загрузить {{ url ? "другой " : "" }}фото</span>
    </label>
  </div>
</template>
<script setup>
defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String,
  invalid: Boolean,
  placeholder: String,
  errorMessage: String,
  onChange: Function,
});

const url = ref(props.modelValue);

watch(
  () => props.modelValue,
  () => {
    if (typeof props.modelValue == "string") {
      url.value = props.modelValue;
    }
  }
);

const handleOnFileChange = (e) => {
  const files = e.target.files;
  if (!files?.length) {
    url.value = null;
    return emits("update:modelValue", null);
  }
  const file = files[0];
  url.value = URL.createObjectURL(file);
  emits("update:modelValue", file);
};
</script>

<style lang="scss" scoped>
.photoloader {
  &__block {
    background-color: rgb(var(--color-white));
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    transition: 0.3s;
    width: 100%;
    // height: 250px;
  }

  &__block.error {
    transition: 0.3s;
  }

  &__label {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  &__input {
    display: none;
  }

  &__preview {
    object-fit: cover;
    max-width: 100%;
    max-height: 200px;
  }

  &__title {
    color: rgb(var(--color-dark));
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    z-index: 2;
  }

  &__subtitle {
    color: rgb(var(--color-dark));
    font-size: 0.75rem;
    z-index: 2;
  }

  &__images {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    width: 100%;
  }

  &__image {
    padding-top: 100%;
    position: relative;

    &_delete {
      background-color: rgb(var(--color-white));
      color: rgb(var(--color-red));
      border-radius: 0.33rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      transition: 0.3s;
      width: 1.25rem;
      height: 1.25rem;
      z-index: 1;

      &:hover {
        background-color: rgb(var(--color-pre-white));
      }
    }
  }

  &__content {
    background-color: rgb(var(--color-white));
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__link {
    color: rgb(var(--color-blue-light));
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
