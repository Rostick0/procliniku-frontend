<template>
  <ul class="pagination mt-4 mx-auto" v-if="number > 1">
    <li v-if="page > 1 && $slots.leftIcon" @click="setPage(page - 1)">
      <slot name="leftIcon"></slot>
    </li>
    <li class="pagination-item" v-for="idx of items" v-bind:key="idx">
      <button
        class="pagination-btn"
        type="button"
        v-bind:class="{
          active: idx === modelValue,
        }"
        v-bind:disabled="!+idx"
        v-on:click="setPage(idx)"
      >
        <span>{{ idx }}</span>
      </button>
    </li>
    <li
      v-if="page <= meta?.total && $slots.rightIcon"
      @click="setPage(page + 1)"
    >
      <slot name="rightIcon"></slot>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  padding: {
    type: [Number, String],
    default: 4,
  },
  meta: {
    type: Object,
    default: null,
  },
  modelValue: {
    type: [Number, null],
    default: 1,
  },
});

const page = ref(1);
const emit = defineEmits(["update:modelValue"]);

const onChangePage = (p) => {
  const router = useRouter();
  page.value = p;
};

const setPage = (val) => {
  emit("update:modelValue", val);
  onChangePage(val);
};

const { meta, modelValue } = toRefs(props);

const number = computed(() =>
  Math.ceil(props?.meta?.total / props?.meta?.per_page)
);

const items = computed(() => {
  const start = (() => {
    const result = [];
    result.push(modelValue.value);
    for (let i = 1; i <= props.padding; i++) {
      const target = modelValue.value - i;
      if (target > 0) result.push(target);
    }
    if (modelValue.value - props.padding - 1 - 1 === 1) result.push(2);
    if (modelValue.value - props.padding - 1 - 1 > 1) result.push("…");
    if (modelValue.value - props.padding > 1) result.push(1);
    return result;
  })();
  const end = (() => {
    const result = [];
    for (let i = 1; i <= props.padding; i++) {
      const target = modelValue.value + i;
      if (target <= number.value) result.push(target);
    }
    if (number.value - modelValue.value - props.padding - 1 === 1)
      result.push(number.value - 1);
    if (number.value - modelValue.value - props.padding - 1 > 1)
      result.push("…");
    if (number.value - (modelValue.value + props.padding - 1) > 1)
      result.push(number.value);
    return result;
  })();

  return start.reverse().concat(end);
});
</script>

<style lang="scss" scoped>
.pagination {
  border: 1px solid var(--ui-color-2);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: fit-content;

  &-btn {
    // border-radius: inherit;
    color: #000;
    font-size: 14px;
    padding: 4px 8px;
    min-width: 25px;

    &:disabled {
      cursor: no-drop;
    }

    &.active {
      color: var(--ui-text);
      cursor: default;
    }
  }

  &-item {
    border-right: 1px solid var(--ui-color-2);

    &:last-child {
      border-right: none;
    }
  }
}
</style>
