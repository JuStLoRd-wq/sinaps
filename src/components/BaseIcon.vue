<template>
  <svg
      :class="$attrs.class || 'w-6 h-6'"
      fill="none"
      viewBox="0 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      v-html="path"
  >
  </svg>
</template>



<script>
import icons from '../icon.js';

export default {
  props: ['name'],
  name: 'BaseIcon',
  data() {
    return {
      path: icons[this.name]
    };
  },
};
</script>

<style scoped>

</style>