<template>
  <Datepicker
    :="$attrs"
    :placeholder="placeholder"
    class="control__datepicker"
    :format="format"
    @update:model-value="handleInput"
    :modelValue="modelValue"
  />
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
await import("@vuepic/vue-datepicker/dist/main.css");

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  placeholder: String,
  modelValue: [Date, String, Number, Object],
  placeholder: String,
  format: {
    type: [Function, String],
  },
});

function handleInput(date) {
  emits("update:modelValue", date || undefined);
}
</script>

<style lang="scss">
.dp__main {
  .dp__input {
    background-color: #f5f5f5;
    border: none;
    border-radius: 8px;
    padding: 0.586rem 0.75rem;
    padding-left: 2.25rem;
  }
}
</style>
