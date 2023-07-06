<template>
  <q-header elevated class="bg-white">
    <q-toolbar class="justify-between" style="height: 56px">
      <div class="row items-center header">
        <div>
          <router-link to="/">
            <img
              class="myBrand"
              src="../assets/img/logo.png"
              style="width: 80px; height: 47x"
            />
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
    </q-toolbar>
  </q-header>
</template>
<script>
import { defineComponent } from "vue";
import NoHoverButton from "src/components/common/NoHoverButton.vue";
import { useAuthStore } from "stores/auth";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "HeaderSection",
  components: {
    NoHoverButton,
  },

  setup() {
    const authStore = useAuthStore();
    const { loggedIn } = storeToRefs(authStore);
    return {
      loggedIn,
    };
  },
});
</script>

<style scoped>
.myBrand {
  border: none;
  background-color: white;
}
.myBrand:hover {
  cursor: pointer;
}
.menuBar {
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}
</style>
