<template>
  <!-- BEGIN: Voice Acting -->
  <q-step :name="5" title="Voice Acting" prefix="5" :done="step > 5">
    <!-- BEGIN: Your Role -->
    <select-form
      :for="'role'"
      :desc="'How do you refer to yourself?'"
      filled
      v-model="role"
      :options="roleList"
    />
    <!-- END: Your Role -->
    <!-- BEGIN: Work Interest -->
    <select-form
      :for="'interest'"
      :desc="'Work Interest Job types you perform (or are seeking)'"
      filled
      v-model="interest"
      :options="interestList"
    />
    <!-- END: Work Interest -->
    <!-- BEGIN: Natural Voice -->
    <div>
      <label for="natulalvoice"
        >Choose three characteristic keywords that best describe your natural
        voice</label
      >
      <q-select
        filled
        v-model="voice"
        multiple
        :options="voiceList"
        counter
        max-values="3"
      />
    </div>
    <!-- END: Natural Voice -->
    <!-- BEGIN: Start Year -->
    <select-form
      :for="'startyear'"
      :desc="'Year Started Performing'"
      filled
      v-model="startYear"
      :options="startYearList"
    />
    <!-- END: Start Year -->
    <!-- BEGIN: availability -->
    <select-form
      :for="'availability'"
      :desc="`Availability Average notice required for booking`"
      filled
      v-model="availability"
      :options="availabilityList"
    />
    <!-- END: availability -->
    <!-- BEGIN: Time Synced -->
    <!-- <div>
      <label for="timesynced">Can you record time synced to picture?</label>
      <div class="row justify-start">
        <q-radio v-model="timesynced" label="Yes" val="Yes"></q-radio>
        <q-radio v-model="timesynced" label="No" val="No"></q-radio>
      </div>
    </div> -->
    <radio-group-form
      :desc="'Can you record time synced to picture?'"
      v-model="timesynced"
      :radiodesc="['Yes', 'No']"
      :readioval="['Yes', 'No']"
    />
    <!-- END: Time Synced -->
    <!-- BEGIN: Record Lip-Sync -->
    <div>
      <label for="record">Can you record lip-sync?</label>
      <div class="row justify-start">
        <q-radio v-model="record" label="Yes" val="Yes"></q-radio>
        <q-radio v-model="record" label="No" val="No"></q-radio>
      </div>
    </div>
    <!-- END: Record Lip-Sync -->
    <!-- BEGIN: Home Studio -->
    <div>
      <label for="homestudio">Do you have a Home Studio?</label>
      <div class="row justify-start">
        <q-radio v-model="homestudio" label="Yes" val="Yes"></q-radio>
        <q-radio v-model="homestudio" label="No" val="No"></q-radio>
      </div>
    </div>
    <!-- END: Home Studio -->
    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn @click="setPage(6)" color="primary" label="Continue" />
      <q-btn
        flat
        @click="setPage(4)"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Voice Acting -->
</template>
<script>
import { ref } from "vue";
import { signupconstants } from "src/assets/constants";
import SelectForm from "src/components/common/SelectForm.vue";
import RadioGroupForm from "src/components/common/RadioGroupForm.vue";

export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {
    SelectForm,
    RadioGroupForm,
  },
  setup() {
    const role = ref("Voice actor");
    const roleList = signupconstants.roles;
    const interest = ref("All");
    const interestList = signupconstants.interests;
    const startYear = ref(null);
    const startYearList = signupconstants.startyears;
    const availability = ref("< 12hours");
    const availabilityList = signupconstants.availabilities;
    const timesynced = ref("Yes");
    const record = ref("Yes");
    const homestudio = ref("Yes");
    return {
      role,
      roleList,
      interest,
      interestList,
      startYear,
      startYearList,
      availability,
      availabilityList,
      timesynced,
      record,
      homestudio,
    };
  },
};
</script>
