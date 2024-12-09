<template>
  <div class="profile-info"></div>
</template>

<script lang="ts" setup>
interface IProps {
  title: string;
  count: number;
  link: string;
  list: any[];
}

const props = defineProps<IProps>();
</script>
