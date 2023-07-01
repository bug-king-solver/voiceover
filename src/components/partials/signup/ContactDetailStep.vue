<template>
  <!-- BEGIN: Contact Details -->
  <q-step :name="4" title="Contact Details" prefix="4" :done="step > 4">
    <!-- BEGIN: Residence Country -->
    <div class="q-mt-sm">
      <custom-label
        :role="'residence'"
        :desc="'Start typing or select your country of residence (autocomplete)'"
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
    <!-- BEGIN: Address Panel -->
    <div class="q-mt-sm">
      <custom-label :role="'address'" :desc="'Address line 1'" />
      <q-input
        filled
        v-model="vuelidate.address.$model"
        :error="vuelidate.address.$error"
        @blur="vuelidate.address.$touch"
        hide-bottom-space
      />
    </div>
    <!-- END: Address Panel -->
    <!-- BEGIN: City and Country -->
    <div class="row q-gutter-x-md">
      <div class="col q-mt-sm">
        <custom-label :role="'city'" :desc="'City'" />
        <q-input
          filled
          v-model="vuelidate.city.$model"
          :error="vuelidate.city.$error"
          @blur="vuelidate.city.$touch"
          hide-bottom-space
        />
      </div>
      <div class="col q-mt-sm">
        <custom-label :role="'state'" :desc="'County / State'" />
        <q-input
          filled
          v-model="vuelidate.state.$model"
          :error="vuelidate.state.$error"
          @blur="vuelidate.state.$touch"
          hide-bottom-space
        />
      </div>
    </div>
    <!-- END: City and Country -->
    <!-- BEGIN: PostCode and Country -->
    <div class="row q-gutter-x-md">
      <div class="col q-mt-sm">
        <custom-label :role="'postcode'" :desc="'Postcode / Zip code'" />
        <q-input
          filled
          v-model="vuelidate.postcode.$model"
          :error="vuelidate.postcode.$error"
          @blur="vuelidate.postcode.$touch"
          hide-bottom-space
        />
      </div>
      <div class="col q-mt-sm">
        <custom-label :role="'country'" :desc="'Country'" />
        <q-input
          filled
          v-model="vuelidate.residence.$model"
          disable
          readonly
          hide-bottom-space
        />
      </div>
    </div>
    <!-- END: PostCode and Country -->
    <!-- BEGIN: Mobile Number -->
    <div class="q-mt-sm">
      <custom-label :role="'mobilenumber'" :desc="'Mobile Number'" />
      <div class="row justify-between">
        <q-select
          filled
          v-model="phoneCode"
          :options="phoneCodeList"
          class="col-4"
        />
        <q-input
          filled
          v-model="vuelidate.phoneNumber.$model"
          :error="vuelidate.phoneNumber.$error"
          @blur="vuelidate.phoneNumber.$touch"
          hide-bottom-space
          class="col-7"
        />
      </div>
    </div>
    <!-- END: Mobile Number -->
    <!-- BEGIN: Alternative Tel Number -->
    <div class="q-mt-sm">
      <custom-label
        :role="'telnumber'"
        :desc="'Alternative Tel Number (Optional)'"
      />
      <div class="row justify-between">
        <q-select
          filled
          v-model="telCode"
          :options="phoneCodeList"
          class="col-4"
        />
        <q-input filled v-model="telNumber" class="col-7" />
      </div>
    </div>
    <!-- END: Alternative Tel Number -->
    <!-- BEGIN: Other Email Address -->
    <div class="q-mt-sm">
      <custom-label
        :role="'otheremail'"
        :desc="'Other Email Address (Optional)'"
      />
      <q-input filled v-model="otherEamil" type="email"></q-input>
    </div>
    <!-- END: Other Email Address -->
    <!-- BEGIN: Personal Website -->
    <div class="q-mt-sm">
      <custom-label
        :role="'personalwebsite'"
        :desc="'Personal Website (Optional)'"
      />
      <q-input
        filled
        v-model="personalWebsite"
        type="url"
        label="https://www."
      />
    </div>
    <!-- END: Personal Website -->
    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn
        @click="onNext(5)"
        color="primary"
        label="Continue"
        :disabled="vuelidate.$invalid"
      />
      <q-btn @click="setPage(3)" color="grey" label="Back" class="q-ml-sm" />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Contact Details -->
</template>
<script>
import { reactive, ref } from "vue";
import { signupconstants } from "assets/constants";
import CustomLabel from "src/components/common/CustomLabel.vue";
import useVuelidate from "@vuelidate/core";
import { required, integer } from "@vuelidate/validators";

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
    const telCode = ref(null);
    const telNumber = ref(null);
    const otherEamil = ref(null);
    const personalWebsite = ref(null);
    const rules = {
      residence: { required },
      address: { required },
      city: { required },
      state: { required },
      postcode: { required },
      phoneNumber: { required, integer },
    };
    const form = reactive({
      residence: "",
      address: "",
      city: "",
      state: "",
      postcode: "",
      phoneNumber: "",
    });
    const vuelidate = useVuelidate(rules, form);
    async function validate() {
      return vuelidate.value.$validate();
    }
    async function onNext(number) {
      try {
        const valid = await validate();
        if (!valid) {
          return console.log("Form could not be submitted.");
        }
        props.setPage(number);
      } catch (error) {
        console.error("Login error");
      }
    }
    return {
      countryList,
      phoneCode,
      phoneCodeList,
      telCode,
      telNumber,
      otherEamil,
      personalWebsite,
      vuelidate,
      onNext,
    };
  },
};
</script>
