<template>
  <!-- BEGIN: Voice Acting -->
  <q-step :name="5" title="Voice Acting" prefix="5" :done="step > 5">
    <!-- BEGIN: Start Year -->
    <div class="q-mt-sm">
      <custom-label :role="'startyear'" :desc="'Year Started Perfoming'" />
      <q-select
        filled
        v-model="vuelidate.startYear.$model"
        :error="vuelidate.startYear.$error"
        @blur="vuelidate.startYear.$touch"
        :options="startYearList"
        :label="'Select your started year *'"
        hide-bottom-space
      />
    </div>

    <!-- END: Start Year -->
    <!-- BEGIN: availability -->
    <div class="q-mt-sm">
      <custom-label :role="'availability'" :desc="'Availability'" />
      <q-select
        filled
        v-model="vuelidate.availability.$model"
        :error="vuelidate.availability.$error"
        @blur="vuelidate.availability.$touch"
        :options="availabilityList"
        :label="'Average notice required for booking *'"
        hide-bottom-space
      />
    </div>
    <!-- END: availability -->
    <!-- BEGIN: Time Synced -->
    <div class="q-mt-sm">
      <custom-label
        :role="'timesynced'"
        :desc="'Can you record time synced to picture?'"
      />
      <div class="row justify-start">
        <q-radio v-model="timesynced" label="Yes" val="Yes"></q-radio>
        <q-radio v-model="timesynced" label="No" val="No"></q-radio>
      </div>
    </div>
    <!-- END: Time Synced -->
    <!-- BEGIN: Record Lip-Sync -->
    <div class="q-mt-sm">
      <custom-label :role="'record'" :desc="'Can you record lip-sync?'" />
      <div class="row justify-start">
        <q-radio v-model="record" label="Yes" val="Yes"></q-radio>
        <q-radio v-model="record" label="No" val="No"></q-radio>
      </div>
    </div>
    <!-- END: Record Lip-Sync -->
    <!-- BEGIN: Home Studio -->
    <div class="q-mt-sm">
      <custom-label :role="'homestudio'" :desc="'Do you have a Home Studio?'" />
      <div class="row justify-start">
        <q-radio v-model="homestudio" label="Yes" val="Yes"></q-radio>
        <q-radio v-model="homestudio" label="No" val="No"></q-radio>
      </div>
    </div>
    <!-- END: Home Studio -->
    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn
        @click="onNext(6)"
        color="primary"
        label="Continue"
        :disabled="vuelidate.$invalid"
      />
      <q-btn @click="setPage(4)" color="grey" label="Back" class="q-ml-sm" />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Voice Acting -->
</template>
<script>
import { ref, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { signupconstants } from "src/assets/constants";
import CustomLabel from "src/components/common/CustomLabel.vue";

export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {
    CustomLabel,
  },
  setup(props) {
    const roleList = signupconstants.roles;
    const interestList = signupconstants.interests;
    const startYearList = signupconstants.startyears;
    const availabilityList = signupconstants.availabilities;
    const voiceList = signupconstants.naturalVoices;
    const timesynced = ref("Yes");
    const record = ref("Yes");
    const homestudio = ref("Yes");
    const voice = ref(null);
    const rules = {
      role: { required },
      interest: { required },
      startYear: { required },
      availability: { required },
    };
    const form = reactive({
      role: "",
      interest: "",
      startYear: "",
      availability: "",
    });
    const vuelidate = useVuelidate(rules, form);
    async function validate() {
      return vuelidate.value.$validate();
    }
    const onNext = async (number) => {
      try {
        const valid = await validate();
        if (!valid) {
          return console.log("Form could not be submitted.");
        }
        props.setPage(number);
      } catch (error) {
        console.error("Login error");
      }
    };
    return {
      vuelidate,
      roleList,
      interestList,
      voice,
      voiceList,
      startYearList,
      availabilityList,
      timesynced,
      record,
      homestudio,
      onNext,
    };
  },
};
</script>
