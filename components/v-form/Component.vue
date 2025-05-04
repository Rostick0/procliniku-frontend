<template>
  <ClientOnly>
    <VFormField
      v-if="field.type == 'text'"
      v-model="model"
      v-bind="field.bind"
      :errorMessage="errorMessage"
    />
    <VFormMultiSelect
      v-else-if="field.type == 'select'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    />
    <VFormTextarea
      v-else-if="field.type == 'textarea'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    />
    <!-- <UiCheckbox
      v-else-if="field.type == 'checkbox'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    >
      <slot />
    </UiCheckbox> -->
    <VFormMultiMSelect
      v-else-if="field.type == 'multiple-select'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
      :name="field.name"
    />

    <VFormDatePicker
      v-else-if="field.type == 'date'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    />
    <!-- 
    <UiFileLoader
      v-else-if="field.type == 'file-loader'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    /> -->

    <VFormPhotoLoader
      v-else-if="field.type == 'photo-loader'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    />

    <VFormMPhotoLoader
      v-else-if="field.type == 'multiple-photo-loader'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
      @setError="setErrors"
    />

    <!-- <UiSwitch
      v-else-if="field.type == 'switch'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    /> -->

    <VFormCkeditor
      v-else-if="field.type == 'ckeditor'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    />

    <VFormRecaptcha
      v-else-if="field.type == 'recaptcha'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    />

    <VFormYandexMap
      v-else-if="field.type == 'yandex-map'"
      v-model="model"
      v-bind="field.bind"
      :error-message="errorMessage"
    />
  </ClientOnly>
</template>

<script setup>
import { useField } from "vee-validate";

defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  field: Object,
  modelValue: [String, Array, Object, Number, Boolean],
});

const model = computed({
  get() {
    return props.field.modelValue;
  },
  set(value) {
    props.field.modelValue = value;
    emits("update:modelValue", value);
  },
});

const { errorMessage, value, resetField, setErrors } = useField(
  props.field.name,
  props.field.rules,
  {
    initialValue:
      props.field.convertTo?.(props.field.modelValue) ?? props.field.modelValue,
  }
);

watch(
  model,
  () => {
    value.value = props.field.convertTo?.(model.value) ?? model.value;
  },
  {
    deep: true,
  }
);

onMounted(() => {
  model.value =
    props.field.convertTo?.(props.field.modelValue) ?? props.field.modelValue;
});

onUnmounted(() => {
  if (!props.field?.withoutResetInUnmounted && model.value) model.value = "";
});
</script>
