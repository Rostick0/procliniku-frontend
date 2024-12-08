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
          <defs v-if="1 > modelValue - item + 1 > 0">
            <linearGradient
              :id="`grad${item}`"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" style="stop-color: var(--yellow-color)" />
              <stop
                :offset="`${Math.round((modelValue - item + 1) * 100)}%`"
                style="stop-color: var(--yellow-color)"
              />
              <stop
                :offset="`${Math.round((modelValue - item + 1) * 100)}%`"
                style="stop-color: #bbbec0"
              />
              <stop offset="100%" style="stop-color: #bbbec0" />
            </linearGradient>
          </defs>
          <path
            d="M8 0L9.79611 6.21885H15.6085L10.9062 10.0623L12.7023 16.2812L8 12.4377L3.29772 16.2812L5.09383 10.0623L0.391548 6.21885H6.20389L8 0Z"
            stroke=""
            :fill="`url(#grad${item})`"
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

<style lang="scss" scoped>
.star {
  &.active {
    svg path {
      fill: var(--yellow-color);
    }
  }
}
</style>
