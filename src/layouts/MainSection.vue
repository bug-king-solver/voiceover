<template>
  <q-page-container class="mainSection">
    <router-view />
  </q-page-container>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainSection",
  setup() {},
});
</script>

<style scoped>
.mainSection {
  min-height: 780px;
}
</style>
