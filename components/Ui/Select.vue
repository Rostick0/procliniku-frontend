<template>
  <div @focusout="onFocusout" ref="wrapper" class="select">
    <div
      @keydown.enter="!alwaysOpen && (isOpened = !isOpened)"
      class="select__field"
      tabindex="0"
      :class="{ select__active: isOpened }"
      @click="!alwaysOpen && toggle()"
    >
      <template v-if="isSearchable">
        <input
          v-bind="$attrs"
          class="control__field control__field_placeholder-top select__value"
          :placeholder="placeholder"
          ref="inputRef"
          @input="onInput"
          :value="searchString"
          type="text"
        />
      </template>
      <template v-else>
        <input
          class="control__field control__field_placeholder-top select__value control__field_placeholder-no-focus"
          :placeholder="placeholder"
          :value="model?.value ?? model?.name ?? model?.title"
          readonly
        />
      </template>
      <svg
        v-if="withIcon"
        class="select__icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="var(--color-grey-dark)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div
      class="select__options"
      v-show="alwaysOpen || isOpened"
      ref="selectRef"
      @mousedown.prevent
    >
      <template v-if="options?.length">
        <div
          class="options__item"
          v-for="option in options"
          :key="option.id"
          @mousedown="handleSelect(option)"
          :class="{ selected: option?.id == model?.id }"
        >
          <component v-if="componentOption" :is="componentOption" :="option" />
          <template v-else>
            {{ option?.value ?? option?.name ?? option?.title }}
          </template>
        </div>
        <div
          v-if="page < totalPages"
          class="link options__item options__item_more"
          @click="addMore"
        >
          Show more
        </div>
      </template>
      <template v-else>
        <div class="options__notfound">No results</div>
      </template>
    </div>
  </div>
</template>

<script setup>
const selectRef = ref();
const props = defineProps({
  label: String,
  searchString: [String, Number],
  isSearchable: Boolean,
  alwaysOpen: {
    type: Boolean,
    default: false,
  },
  closeAfterSelect: {
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: [Object, Number, String, Array],
  },
  options: Array,
  placeholder: [String, Number],
  withIcon: {
    default: true,
    type: Boolean,
  },
  componentOption: {
    type: [Object, null],
  },
  page: {
    type: Number,
  },
  totalPages: {
    type: Number,
  },
});
const emits = defineEmits([
  "scrolledTop",
  "scrolledBottom",
  "update:modelValue",
  "update:searchString",
]);

const model = computed({
  get() {
    if (!props.modelValue) return;

    return props.modelValue;
  },
  set(_value) {
    if (!_value) {
      return emits("update:modelValue", null);
    }

    if (props.modelValue?.id === _value?.id) {
      emits("update:searchString", null);
      return emits("update:modelValue", null);
    }

    return emits("update:modelValue", _value);
  },
});

const isOpened = ref(false);

const onInput = (e) => {
  emits("update:searchString", e.target.value);
  emits("update:modelValue", null);
};

watch([selectRef], () => {
  if (selectRef.value) {
    selectRef.value.scrollTo(0, selectRef.value.children[0].clientHeight / 15);
  }
});

const inputRef = ref();

const toggle = () => {
  isOpened.value = !isOpened.value;
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const wrapper = ref();

const onFocusout = (e) => {
  if (!wrapper.value.contains(e.relatedTarget)) isOpened.value = false;
};

const handleSelect = (option) => {
  if (props.closeAfterSelect) {
    isOpened.value = false;
  }
  emits("update:searchString", option?.value ?? option?.name ?? option?.title);
  model.value = option;
};

const addMore = (event) => emits("scrolledBottom", event.target);
</script>

<style lang="scss" scoped>
.select {
  cursor: pointer;
  position: relative;

  &__field {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    width: 100%;
  }

  &__active {
    .select {
      &__icon {
        transform: rotate(180deg) translateY(50%);
      }
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    transition: 0.3s;
  }

  input {
    width: 100%;

    &::placeholder {
      line-height: 1.3;
    }
  }

  &__value {
    background-color: #f5f5f5;
    border-radius: 8px;
    font-size: 16px;
    padding: 12px;
    width: 100%;
  }

  &__options {
    background-color: #f5f5f5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 700;
    margin-top: 4px;
    position: absolute;
    overflow: auto;
    width: 100%;
    max-height: 20rem;
    z-index: 10;
  }
}

.options {
  &__item {
    padding: 0.75rem 1.25rem;
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s;

    &:hover {
      background-color: var(--ui-color);
      color: white;
    }
    &.selected {
      background-color: var(--ui-color-2);
      color: white;
    }
  }

  &__notfound {
    cursor: default;
  }
}

.control {
  &.invalid {
    .control__field {
      border-color: var(--color-red);
      color: var(--color-red);
    }
  }

  &__label {
    display: flex;
    position: relative;

    &_name {
      color: var(--color-grey-dark);
      position: absolute;
      top: 50%;
      left: 12px;
      transform: translateY(-50%);
      transition: 0.3s;
    }
  }
}
</style>
