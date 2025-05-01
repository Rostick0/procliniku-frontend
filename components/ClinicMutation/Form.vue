<template>
  <form class="">
    {{ clinic }}
    <ClinicMutationStep1 v-if="step === 1" :clinic="clinic" />
    <ClinicMutationStep1 v-else-if="step === 2" :clinic="clinic" />
  </form>
  <div class="flex">
    <UiButton
      v-for="indx in [1, 2, 3, 4, 5]"
      class=""
      :bgColor="indx === step ? null : 'grey'"
    ></UiButton>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinic?: IClinic;
}

const step = ref<1 | 2 | 3 | 4 | 5>(1);

const props = defineProps<IProps>();

const { handleSubmit } = useForm();

const onSubmut = handleSubmit((values) => {
  console.log(values);
  //   if (step.value < 5) return (step.value += 1);
});
</script>
