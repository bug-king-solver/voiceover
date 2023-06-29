<template>
  <q-header elevated class="bg-white">
    <q-toolbar class="justify-between">
      <div class="row items-center">
        <router-link to="/">
          <button class="myBrand">
            <img src="../assets/img/blacklogo.png" style="width: 42px" />
          </button>
        </router-link>
        <router-link to="/our-services">
          <no-hover-button :label="'OUR SERVICES'"
        /></router-link>
        <router-link to="/terms-conditions">
          <no-hover-button :label="'TERMS AND CONDITIONS'" />
        </router-link>
        <router-link to="/how-work">
          <no-hover-button :label="'HOW WE WORK'" />
        </router-link>
        <router-link to="/how-work">
          <no-hover-button :label="'TRANSLATION'" />
        </router-link>
        <router-link to="/contact-us">
          <no-hover-button :label="'CONTACT US'" />
        </router-link>
      </div>
      <div>
        <router-link v-if="!loggedIn" to="/signin">
          <no-hover-button :label="'SIGN IN'" />
        </router-link>
        <router-link to="/presignup">
          <no-hover-button :label="'SIGN UP'" />
        </router-link>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script>
import { computed, defineComponent } from "vue";
import NoHoverButton from "src/components/common/NoHoverButton.vue";
import { useAuthStore } from "stores/auth";

export default defineComponent({
  name: "HeaderSection",
  components: {
    NoHoverButton,
  },
  setup() {
    const authStore = useAuthStore();
    const loggedIn = computed(() => authStore.loggedIn);
    // const { loggedIn } = authStore;
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
</style>
