<template>
  <div class="flex gap-x-1.5 justify-center">
    <template v-for="item in [1, 2, 3, 4, 5]" :key="item">
      <div
        @click="handleClick(item)"
        class="star flex"
        :class="[{ active: modelValue >= item }, item]"
      >
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0L9.79611 6.21885H15.6085L10.9062 10.0623L12.7023 16.2812L8 12.4377L3.29772 16.2812L5.09383 10.0623L0.391548 6.21885H6.20389L8 0Z"
            fill="#BBBEC0"
          />
        </svg>
      </div>
    </template>
  </div>
</template>

<script setup>
defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue"]);

defineProps(["modelValue"]);

const handleClick = (item) => {
  emits("update:modelValue", item);
};
</script>
