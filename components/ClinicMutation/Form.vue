<template>
  <form class="">
    {{ clinic }}
    <ClinicMutationStep1 v-if="step === 1" :clinic="clinic" />
    <ClinicMutationStep2 v-else-if="step === 2" :clinic="clinic" />
    <ClinicMutationStep3 v-else-if="step === 3" :clinic="clinic" />
    <ClinicMutationStep4 v-else-if="step === 4" :clinic="clinic" />
  </form>
  <div class="flex">
    <UiButton
      v-for="indx in arraySteps"
      class=""
      @click="step = indx"
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

type step = 1 | 2 | 3 | 4 | 5;
const arraySteps: step[] = [1, 2, 3, 4, 5];
const step = ref<step>(1);

const props = defineProps<IProps>();

const { handleSubmit } = useForm();

const onSubmut = handleSubmit((values) => {
  console.log(values);
  //   if (step.value < 5) return (step.value += 1);
});
</script>
