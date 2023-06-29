<template>
  <q-layout view="lHh Lpr lFf">
    <header-section />
    <main-section />
    <footer-section />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import HeaderSection from "./HeaderSection.vue";
import MainSection from "./MainSection.vue";
import FooterSection from "./FooterSection.vue";

export default defineComponent({
  name: "MainLayout",
  components: { HeaderSection, MainSection, FooterSection },
  setup() {
    return {};
  },
});
</script>
