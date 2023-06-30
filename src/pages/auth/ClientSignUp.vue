<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-white text-white">
        <div class="text-h6 text-black">SIGN UP</div>
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
            <!-- BEGIN: Your Confirm Email Address -->
            <custom-label :desc="'Confirm Email Address'" />
            <q-input
              v-model="confirmemail"
              filled
              label="Enter your confirm email address *"
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
            <!-- BEGIN:  Your Confirm Password-->
            <custom-label :desc="'Confirm Password'" />
            <q-input
              v-model="confirmpassword"
              filled
              label="Enter your confirm password *"
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
            <q-toggle v-model="isAccept" label="Keep me logged in" />
            <div class="q-pa-md q-gutter-sm text-center">
              <q-btn label="Sign Up" type="submit" color="primary" />
              <q-btn label="Reset" type="reset" color="grey" />
            </div>
          </q-form>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import CustomLabel from "src/components/common/CustomLabel.vue";

export default {
  name: "SignIn",
  components: {
    CustomLabel,
  },

  setup() {
    const isAccept = ref(false);
    return {
      isAccept,
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
