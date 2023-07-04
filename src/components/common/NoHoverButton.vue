<template>
  <p class="noHover">{{ label }}</p>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    label: String,
  },
});
</script>
<style scoped>
.noHover {
  margin: 0px;
  font-size: 14px;
  font-family: "icomoonFont";
  line-height: 1.73;
  font-weight: 570;
}
</style>
