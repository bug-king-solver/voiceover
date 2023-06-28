<template>
  <!-- BEGIN: Acount Details Section -->
  <q-step :name="2" title="Account Details" prefix="2" :done="step > 2">
    <q-form autofocus>
      <!-- BEGIN: Email Address -->
      <div class="q-mt-sm">
        <custom-labe :desc="'Email Address'" :role="'email'" />
        <q-input
          v-model="vuelidate.email.$model"
          :error="vuelidate.email.$error"
          @blur="vuelidate.email.$touch"
          filled
          label="Enter your email address *"
          hide-bottom-space
        />
      </div>
      <!-- END: Email Address -->
      <!-- BEGIN: Confirm Email Address -->
      <div class="q-mt-sm">
        <custom-labe :desc="'Confirm Email Address'" :role="'confirmemail'" />
        <q-input
          v-model="vuelidate.confirmemail.$model"
          :error="vuelidate.confirmemail.$error"
          @blur="vuelidate.confirmemail.$touch"
          filled
          label="Enter your email address again *"
          hide-bottom-space
        />
      </div>
      <!-- END: Confirm Email Address -->
      <!-- BEGIN: Your Password -->
      <div class="q-mt-sm">
        <custom-labe :desc="'Password'" :role="'password'" />
        <q-input
          v-model="vuelidate.password.$model"
          :error="vuelidate.password.$error"
          @blur="vuelidate.password.$touch"
          filled
          label="Enter your password *"
          :type="isPwd ? 'password' : 'text'"
          hide-bottom-space
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <!-- END: Your Password -->
      <!-- BEGIN: Confirm Your Password -->
      <div class="q-mt-sm">
        <custom-labe :desc="'Confirm Password'" :role="'confirmpassword'" />
        <q-input
          v-model="vuelidate.confirmpassword.$model"
          :error="vuelidate.confirmpassword.$error"
          @blur="vuelidate.confirmpassword.$touch"
          filled
          label="Enter your password again *"
          :type="isPwd ? 'password' : 'text'"
          hide-bottom-space
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
      <!-- END: Confirm Your Password -->
      <!-- BEGIN: Next and Back Button Group -->
      <q-stepper-navigation>
        <q-btn
          @click="onNext(3)"
          color="primary"
          label="Continue"
          :disabled="vuelidate.$invalid"
        />
        <q-btn
          flat
          @click="setPage(1)"
          color="grey"
          label="Back"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
      <!-- END: Next and Back Button Group -->
    </q-form>
  </q-step>
  <!-- END: Acount Details Section -->
</template>
<script>
import { ref, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  email as emailValidator,
  minLength,
  required,
} from "@vuelidate/validators";

import { useQuasar } from "quasar";
import CustomLabe from "src/components/common/CustomLabel.vue";
export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {
    CustomLabe,
  },
  setup(props) {
    const isPwd = ref(true);
    const $q = useQuasar();
    const rules = {
      email: { required, emailValidator },
      confirmemail: { required, emailValidator },
      password: { required, minLength: minLength(8) },
      confirmpassword: {
        required,
        minLength: minLength(8),
      },
    };
    const form = reactive({
      email: "",
      confirmemail: "",
      password: "",
      confirmpassword: "",
    });
    const vuelidate = useVuelidate(rules, form);
    async function validate() {
      return vuelidate.value.$validate();
    }
    async function onNext() {
      try {
        const valid = await validate();
        if (!valid) {
          return console.log("Form could not be submitted.");
        }
        props.setPage(3);
      } catch (error) {
        console.error("Login error");
      }
    }
    return {
      isPwd,
      vuelidate,
      onNext,
    };
  },
};
</script>
