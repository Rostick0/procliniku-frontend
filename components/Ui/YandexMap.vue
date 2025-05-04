<template>
  <div class="yandex-map min-h-32 w-full" ref="map"></div>
</template>

<script lang="ts" setup>
import ymaps from "ymaps";

interface IProps {
  coords: number[];
  zoom?: number;
  controls?: any[] | never[];
  withEditCoords?: boolean;
  placemarkOption?: object;
}

const { withEditCoords, placemarkOption, ...props } = withDefaults(
  defineProps<IProps>(),
  {
    // coords: [54.7431, 55.9678],
    zoom: 12,
    controls: [],
  }
);

const emits = defineEmits(["update:modelValue"]);

const map = ref(null);

onMounted(() => {
  ymaps.load().then((maps: any) => {
    const myMap = new maps.Map(map.value, {
      center: props.coords,
      ...props,
      // controls: ["geolocationControl"],
    });

    const myPlacemark = new maps.Placemark(
      myMap.getCenter(),
      {},
      placemarkOption
    );

    if (withEditCoords) {
      myPlacemark.events.add("dragend", function (e: any) {
        emits("update:modelValue", e.get("target").geometry.getCoordinates());
      });
      myMap.events.add("click", function (e: any) {
        console.log(myPlacemark);
        myPlacemark.geometry.setCoordinates(e.get("coords"));

        emits("update:modelValue", e.get("coords"));
      });
    }

    return myMap.geoObjects.add(myPlacemark);
  });
});
</script>

<style lang="scss" scoped>
.yandex-map {
  //   min-height: 400px;
  //   min-height: 125px;
}
</style>
