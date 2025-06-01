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
import type IImage from "~/interfaces/models/Image";
import type IService from "~/interfaces/models/Service";

interface IProps {
  clinic?: IClinic;
}
const props = defineProps<IProps>();

const route = useRoute();

const { handleSubmit, setErrors } = useForm();
const { getImageFrom, getImageIdsFrom } = useImages();

const onSubmut = handleSubmit(async (values) => {
  const data = values;

  if (values?.icon_id) {
    const icon = (await getImageFrom(values?.icon_id)) as IImage;
    if (icon?.id) data.icon_id = icon.id;
  }

  if (data?.clinic_phones)
    data.clinic_phones = data.clinic_phones.map(convertPhoneToDb).join(",");

  if (data?.images) data.images = await getImageIdsFrom(values?.images);

  if (data?.clinic_categories)
    data.clinic_categories = data.clinic_categories
      .map((item: ICategory) => item.id)
      .join(",");

  if (data?.clinic_services)
    data.clinic_services = data.clinic_services
      .map((item: IService) => item.id)
      .join(",");

  if (data?.coords) {
    data.latitude = data?.coords[0];
    data.longitude = data?.coords[1];
  }

  if (data?.city_id?.id) data.city_id = data.city_id.id;

  if (data?.work_times) {
    const workTimes: Array<{
      day: number;
      time_start: string;
      time_end: string;
    }> = [];

    data.work_times?.forEach(
      (
        dates: Array<{ hours: number; minutes: number; seconds: number }>,
        index: number
      ) => {
        if (!dates?.length) return;

        workTimes.push({
          day: index,
          time_start: `${addLeadingZeros(
            dates[0]["hours"],
            2
          )}:${addLeadingZeros(dates[0]["minutes"], 2)}:${addLeadingZeros(
            dates[0]["seconds"],
            2
          )}`,
          time_end: `${addLeadingZeros(dates[1]["hours"], 2)}:${addLeadingZeros(
            dates[1]["minutes"],
            2
          )}:${addLeadingZeros(dates[1]["seconds"], 2)}`,
        });
      }
    );

    data.work_times = workTimes;
  }

  const res = await api.clinics.update({
    id: route.params.id.toString(),
    data,
  });

  if (res?.error) {
    setErrors(res?.errorResponse);
    return;
  } else {
    success("Данные успешно обновлены");
  }
});
</script>
