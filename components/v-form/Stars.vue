<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :leftIcon="leftIcon"
    :rightIcon="rightIcon"
  >
    <UiStars
      class="stars"
      classStar=" cursor-pointer"
      :modelValue="value"
      @update:modelValue="(val) => emits('update:modelValue', val)"
      size="24"
    />
  </UiControl>
</template>

<script lang="ts" setup>
interface IProps {
  modelValue: number;
  invalid?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  message?: string;
  label?: string;
  errorMessage?: string;
}

const props = defineProps<IProps>();

const emits = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => val,
});
</script>

<style lang="scss" scoped>
.stars {
  justify-content: start;
}
</style>
