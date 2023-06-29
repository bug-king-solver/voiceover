<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-white text-white">
        <div class="text-h6 text-black">SIGN IN</div>
        <!-- <div class="text-subtitle2">Welcome Back</div> -->
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <div class="q-pa-md q-panel">
          <q-form @submit="onSubmit" @reset="onReset">
            <!-- BEGIN: Your Email Address -->
            <custom-label :desc="'Email Address'" />
            <q-input
              v-model="email"
              filled
              label="Enter your email address *"
              :type="email"
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Please type your email address',
              ]"
            />
            <!-- END: Your Email Address -->
            <!-- BEGIN:  Your Password-->
            <custom-label :desc="'Password'" />
            <q-input
              v-model="password"
              filled
              label="Enter your password *"
              :type="isPwd ? 'password' : 'text'"
              :rules="[
                (val) => (val && val.length > 0) || 'Please type your password',
              ]"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <!-- END: Your Password -->
            <q-toggle v-model="accept" label="Keep me logged in" />
            <div class="q-pa-md q-gutter-sm text-center">
              <q-btn label="Sign In" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="grey" />
            </div>
          </q-form>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
import CustomLabel from "src/components/common/CustomLabel.vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "stores/auth";

export default {
  name: "SignIn",
  components: {
    CustomLabel,
  },

  setup() {
    const $q = useQuasar();
    const password = ref("");
    const isPwd = ref(true);
    const email = ref(null);
    const accept = ref(false);
    const authStore = useAuthStore();
    function onSubmit() {
      // const {loggedIn} = authStore;
      alert();
      authStore.login();
    }
    function onReset() {
      email.value = null;
      password.value = null;
      accept.value = false;
    }
    return {
      onSubmit,
      onReset,
      password,
      isPwd,
      email,
      accept,
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 700px
  margin: auto
  margin-top: 50px
</style>
