<template>
  <div class="yandex-map min-h-32 w-full" ref="map"></div>
</template>

<script lang="ts" setup>
import ymaps from "ymaps";

interface IProps {
  cords: number[];
  zoom?: number;
  controls?: any[] | never[];
}

const props = withDefaults(defineProps<IProps>(), {
  zoom: 12,
  controls: [],
});

const map = ref(null);

ymaps.load().then((maps: any) => {
  //   console.log(maps);

  const myMap = new maps.Map(map.value, {
    center: props.cords,
    ...props,
    // controls: ["geolocationControl"],
  });

  const myPlacemark = new maps.Placemark(
    myMap.getCenter()
    // {},
    // {
    //   draggable: true,
    // }
  );

  //   myPlacemark.events.add("dragend", function (e: any) {
  //     const coord = e.get("target").geometry.getCoordinates();
  //     value.value = coord;
  //   });

  return myMap.geoObjects.add(myPlacemark);
});

// await ymaps.then(res => res.)
</script>

<style lang="scss" scoped>
.yandex-map {
  //   min-height: 400px;
  //   min-height: 125px;
}
</style>
