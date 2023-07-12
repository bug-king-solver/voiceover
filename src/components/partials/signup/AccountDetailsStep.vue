<template>
  <!-- BEGIN: Acount Details Section -->
  <q-step
    :name="2"
    title="Contact Details and Registration"
    prefix="2"
    :done="step > 2"
  >
    <q-form autofocus>
      <!-- BEGIN: Full Name -->
      <div class="q-mt-sm">
        <custom-label :desc="'Full Name'" :role="'fullName'" />
        <q-input
          v-model="vuelidate.fullName.$model"
          :error="vuelidate.fullName.$error"
          @blur="vuelidate.fullName.$touch"
          filled
          label="Enter your full name *"
          hide-bottom-space
        />
      </div>
      <!-- END: Full Name -->
      <!-- BEGIN: Residence Country -->
      <div class="q-mt-sm">
        <custom-label
          :desc="'Select your residence country'"
          :role="'residence'"
        />
        <q-select
          filled
          v-model="vuelidate.residence.$model"
          :error="vuelidate.residence.$error"
          @blur="vuelidate.residence.$touch"
          :options="countryList"
          label="Select your residence country *"
          hide-bottom-space
        />
      </div>
      <!-- END: Residence Country -->
      <!-- BEGIN: Email Address -->
      <div class="q-mt-sm">
        <custom-label :desc="'Email Address'" :role="'emailAddress'" />
        <q-input
          v-model="vuelidate.emailAddress.$model"
          :error="vuelidate.emailAddress.$error"
          :type="email"
          @blur="vuelidate.emailAddress.$touch"
          filled
          label="Enter your email address *"
          hide-bottom-space
        />
      </div>
      <!-- END: Email Address -->
      <!-- BEGIN: Your Password -->
      <div class="q-mt-sm">
        <custom-label :desc="'Password'" :role="'password'" />
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
      <!-- BEGIN: Mobile Number -->
      <div class="q-mt-sm">
        <custom-label :desc="'Mobile Number'" :role="'mobileNumber'" />
        <div class="row justify-between">
          <q-select
            filled
            v-model="phoneCode"
            :options="phoneCodeList"
            label="Country Code"
            class="col-5 miniInput"
          />
          <q-input
            filled
            v-model="vuelidate.phoneNumber.$model"
            :error="vuelidate.phoneNumber.$error"
            @blur="vuelidate.phoneNumber.$touch"
            label="Enter your mobile number *"
            hide-bottom-space
            class="col-6 miniInput"
          />
        </div>
      </div>
      <!-- END: Mobile Number -->
      <!-- BEGIN: Mobile Number -->
      <div class="q-mt-sm">
        <custom-label :desc="'Whats App Number'" :role="'whatsAppNumber'" />
        <div class="row justify-between">
          <q-select
            filled
            v-model="phoneCode"
            :options="phoneCodeList"
            label="Country Code"
            class="col-5 miniInput"
          />
          <q-input
            filled
            v-model="vuelidate.whatsappNumber.$model"
            :error="vuelidate.whatsappNumber.$error"
            @blur="vuelidate.whatsappNumber.$touch"
            label="Enter your whats app number *"
            hide-bottom-space
            class="col-6 miniInput"
          />
        </div>
      </div>
      <!-- END: Mobile Number -->
      <!-- BEGIN: Social Media Links -->
      <div class="q-mt-sm">
        <custom-label :desc="'Social Media Links'" :role="'socialMediaLinks'" />
        <!-- BEGIN: Facebook -->
        <q-input
          filled
          bottom-slots
          type="url"
          v-model="facebook"
          label="Facebook"
        >
          <template v-slot:prepend>
            <q-icon name="img:/assets/icons/facebook.svg" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="twitter = ''" class="cursor-pointer" />
          </template>
        </q-input>
        <!-- END: Facebook -->
        <!-- BEGIN: Twitter -->
        <q-input
          filled
          bottom-slots
          type="url"
          v-model="twitter"
          label="Twitter"
        >
          <template v-slot:prepend>
            <q-icon name="img:/assets/icons/twitter.svg" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="twitter = ''" class="cursor-pointer" />
          </template>
        </q-input>
        <!-- END: Twitter -->
        <!-- BEGIN: Instagram -->
        <q-input
          filled
          bottom-slots
          type="url"
          v-model="instagram"
          label="Instagram"
        >
          <template v-slot:prepend>
            <q-icon name="img:/assets/icons/instagram.svg" />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click="instagram = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <!-- END: Instagram -->
        <!-- BEGIN: LinkedIn -->
        <q-input
          filled
          bottom-slots
          type="url"
          v-model="linkedin"
          label="LinkedIn"
        >
          <template v-slot:prepend>
            <q-icon name="img:/assets/icons/linkedin.svg" />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click="linkedin = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <!-- END: LinkedIn -->
        <!-- BEGIN: SoundCloud -->
        <q-input
          filled
          bottom-slots
          type="url"
          v-model="soundcloud"
          label="SoundCloud"
        >
          <template v-slot:prepend>
            <q-icon name="img:/assets/icons/soundcloud.svg" />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click="soundcloud = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <!-- END: SoundCloud -->
        <!-- BEGIN: GoogleDriver -->
        <q-input
          filled
          bottom-slots
          type="url"
          v-model="googledriver"
          label="GoogleDriver"
        >
          <template v-slot:prepend>
            <q-icon name="img:/assets/icons/googledriver.svg" />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click="googledriver = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <!-- END: GoogleDriver -->
        <!-- BEGIN: SnapChat -->
        <q-input filled bottom-slots type="url" v-model="tiktok" label="TikTok">
          <template v-slot:prepend>
            <q-icon name="img:/assets/icons/tiktok.svg" />
          </template>
          <template v-slot:append>
            <q-icon name="close" @click="tiktok = ''" class="cursor-pointer" />
          </template>
        </q-input>
        <!-- END: TikTok -->
        <!-- BEGIN: Snapchat -->
        <q-input
          filled
          bottom-slots
          type="url"
          v-model="tiktok"
          label="snapchat"
        >
          <template v-slot:prepend>
            <q-icon name="img:/assets/icons/snapchat.svg" />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click="snapchat = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
        <!-- END: SnapChat -->
      </div>
      <!-- END: Social Media Links -->
      <!-- BEGIN: Next and Back Button Group -->
      <q-stepper-navigation>
        <q-btn
          @click="onNext(3)"
          color="primary"
          label="Continue"
          :disabled="vuelidate.$invalid"
        />
        <q-btn @click="setPage(1)" color="grey" label="Back" class="q-ml-sm" />
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
  integer,
} from "@vuelidate/validators";

import CustomLabel from "src/components/common/CustomLabel.vue";
import { signupconstants } from "assets/constants";

export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {
    CustomLabel,
  },
  setup(props) {
    const countryList = signupconstants.countries;
    const phoneCode = ref(null);
    const phoneCodeList = signupconstants.phoneCodes;
    const isPwd = ref(true);
    const form = reactive({
      fullName: "",
      residence: "",
      emailAddress: "",
      password: "",
      phoneNumber: "",
      whatsappNumber: "",
    });
    const rules = {
      fullName: { required },
      residence: { required },
      emailAddress: { required, emailValidator },
      password: { required, minLength: minLength(8) },
      phoneNumber: { required, integer },
      whatsappNumber: { required, integer },
    };
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
      countryList,
      phoneCode,
      phoneCodeList,
      vuelidate,
      onNext,
    };
  },
};
</script>
<style scoped>
.miniInput {
  min-width: 30vh;
}
</style>
