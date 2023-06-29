<template>
  <button type="button" class="noHover">{{ label }}</button>
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
  background-color: white;
  margin: 0 10px;
  border: none;
}
.noHover:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
