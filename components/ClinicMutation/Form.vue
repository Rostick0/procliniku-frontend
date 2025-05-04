<template>
  <form class="" @submit="onSubmut">
    <div class="flex flex-col gap-y-2">
      <slot />
    </div>
    <div class="mt-6 ml-auto w-fit">
      <UiButton class="">Сохранить</UiButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import api from "~/api";
import type ICategory from "~/interfaces/models/Category";
import type IClinic from "~/interfaces/models/Clinic";
import type IService from "~/interfaces/models/Service";

interface IProps {
  clinic?: IClinic;
}
const props = defineProps<IProps>();

const route = useRoute();

const { handleSubmit, setErrors } = useForm();

const onSubmut = handleSubmit(async (values) => {
  const data = values;
  // console.log(values);
  if (data?.clinic_phones) data.clinic_phones = data.clinic_phones.join(",");
  if (data?.images) {
    const { getImageIdsFrom } = useImages();

    const images = await getImageIdsFrom(values?.images);
    data.images = images;
  }

  if (data?.clinic_categories)
    data.clinic_categories = data.clinic_categories
      .map((item: ICategory) => item.id)
      .join(",");

  if (data?.clinic_services)
    data.clinic_services = data.clinic_services
      .map((item: IService) => item.id)
      .join(",");
  // console.log(data);
  // return;

  const res = await api.clinics.update({
    id: route.params.id.toString(),
    data,
  });

  if (res?.error) {
    setErrors(res?.errorResponse);
    return;
  }
});
</script>
