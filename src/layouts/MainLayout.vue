<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-white">
      <q-toolbar class="justify-between">
        <div class="row items-center">
          <router-link to="/">
            <q-btn class="myBrand">
              <q-avatar size="42px">
                <img src="../assets/img/blacklogo.png" />
              </q-avatar>
            </q-btn>
          </router-link>

          <router-link to="/our-services">
            <q-btn flat color="black" label="Our services" class="myButton"
          /></router-link>
          <router-link to="/terms-conditions">
            <q-btn flat color="black" label="Terms and conditions"
          /></router-link>
          <router-link to="/how-work">
            <q-btn flat color="black" label="How we work"
          /></router-link>
          <router-link to="/how-work">
            <q-btn flat color="black" label="Traslation"
          /></router-link>
          <router-link to="/contact-us">
            <q-btn flat color="black" label="Contact us"
          /></router-link>
        </div>
        <div>
          <router-link to="/signin">
            <q-btn flat color="black" label="SIGN IN"
          /></router-link>
          <router-link to="/presignup">
            <q-btn flat color="black" label="SIGN UP"
          /></router-link>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {},
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.myBrand:before {
  box-shadow: none;
}
</style>
