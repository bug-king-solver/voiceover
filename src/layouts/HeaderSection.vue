<template>
  <q-header elevated class="bg-white">
    <q-toolbar class="justify-between" style="height: 56px">
      <div class="row items-center">
        <router-link to="/">
          <img
            class="myBrand"
            src="../assets/img/whitelogo.png"
            style="width: 80px; height: 70px"
          />
        </router-link>
        <div class="menuBar">
          <router-link class="underLine" to="/our-services">
            <no-hover-button :label="'Our Services'"
          /></router-link>
          <router-link
            class="underLine"
            to="/terms-conditions"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'Terms and Conditions'" />
          </router-link>
          <router-link
            class="underLine"
            to="/how-work"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'How We Work'" />
          </router-link>
          <router-link
            class="underLine"
            to="/translations"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'Translation'" />
          </router-link>
          <router-link
            class="underLine"
            to="/contact-us"
            style="margin-left: 20px"
          >
            <no-hover-button :label="'Contact Us'" />
          </router-link>
        </div>
      </div>
      <div class="signButton" v-if="loggedIn === false">
        <router-link class="underLine" to="/signin" style="margin-left: 20px">
          <no-hover-button :label="'SignIn'" />
        </router-link>
        <router-link class="underLine" to="/signup" style="margin-left: 20px">
          <no-hover-button :label="'SignUp'" />
        </router-link>
      </div>
      <div v-if="loggedIn === true">
        <router-link class="underLine" to="/" style="margin-left: 20px">
          <no-hover-button :label="'SignOut'" />
        </router-link>
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
    // const loggedIn = computed(() => user.value);
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
.underLine {
  text-decoration: none;
  border-bottom-color: rgb(189, 189, 189);
  margin: 0px;
  font-size: 18px;
  font-weight: bold;
  font-family: "icomoonFont";
  text-decoration: none;
  color: black;
  display: block;
  line-height: 1;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  padding-top: 2px;
}
.underLine:hover {
  border-bottom-color: rgb(189, 189, 189);
}
.signButton {
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
}
</style>
