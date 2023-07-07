<template>
  <q-header elevated class="bg-white">
    <q-toolbar class="justify-between" style="height: 56px">
      <div v-if="$q.screen.width > 855" class="row items-center header">
        <div>
          <router-link to="/">
            <img class="logo" src="../assets/img/logo.png" />
          </router-link>
        </div>
        <div class="menuBar">
          <router-link
            class="menu-title"
            to="/our-services"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'Our Services'"
          /></router-link>
          <router-link
            class="menu-title"
            to="/terms-conditions"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'Terms and Conditions'" />
          </router-link>
          <router-link
            class="menu-title"
            to="/how-work"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'How We Work'" />
          </router-link>
          <router-link
            class="menu-title"
            to="/translations"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'Translation'" />
          </router-link>
          <router-link
            class="menu-title"
            to="/contact-us"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'Contact Us'" />
          </router-link>
        </div>
        <div class="signButtonGroup">
          <div class="signButton" v-if="loggedIn == false">
            <router-link
              class="menu-title"
              to="/signin"
              style="margin-left: 20px"
            >
              <no-hover-button :label="'Sign In'" />
            </router-link>
            <router-link
              class="menu-title"
              to="/signup"
              style="margin-left: 20px"
            >
              <no-hover-button :label="'Sign Up'" />
            </router-link>
          </div>
          <div v-if="loggedIn == true">
            <router-link class="menu-title" to="/" style="margin-left: 20px">
              <no-hover-button :label="'Sign Out'" />
            </router-link>
          </div>
        </div>
      </div>
      <div v-if="$q.screen.width <= 855" class="row items-center header">
        <div>
          <router-link to="/">
            <img class="logo" src="../assets/img/logo.png" />
          </router-link>
        </div>
        <div class="signButtonGroup">
          <q-fab
            v-model="fab2"
            vertical-actions-align="left"
            color="grey"
            padding="sm"
            icon="keyboard_arrow_down"
            direction="down"
          >
            <div class="mini-menu-panel">
              <router-link class="mini-menu-title" to="our-services">
                <p class="mini-menu text-black">Our Services</p>
              </router-link>
              <router-link class="mini-menu-title" to="/terms-conditions">
                <p class="mini-menu text-black">Terms and Conditions</p>
              </router-link>
              <router-link class="mini-menu-title" to="/how-work">
                <p class="mini-menu text-black">How We Work</p>
              </router-link>
              <router-link class="mini-menu-title" to="/translation">
                <p class="mini-menu text-black">Translation</p>
              </router-link>
              <router-link class="mini-menu-title" to="translations">
                <p class="mini-menu text-black">Contact Us</p>
              </router-link>
              <router-link class="mini-menu-title" to="/signin">
                <p class="mini-menu text-black">Sign In</p>
              </router-link>
              <router-link class="mini-menu-title" to="/signup">
                <p
                  class="mini-menu text-black"
                  style="border-bottom: 1px solid grey"
                >
                  Sign Up
                </p>
              </router-link>
            </div>
          </q-fab>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script>
import { defineComponent } from "vue";
import NoHoverButton from "src/components/common/NoHoverButton.vue";
import { useAuthStore } from "stores/auth";
import { storeToRefs } from "pinia";
import { useQuasar } from "quasar";
export default defineComponent({
  name: "HeaderSection",
  components: {
    NoHoverButton,
  },

  setup() {
    const authStore = useAuthStore();
    const { loggedIn } = storeToRefs(authStore);
    const $q = useQuasar();
    return {
      loggedIn,
      $q,
    };
  },
});
</script>

<style scoped>
.menuBar {
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
</style>
