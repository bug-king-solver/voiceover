<template>
  <!-- BEGIN: Your Rates -->
  <q-step :name="7" title="Your Rates" prefix="7" :done="step > 7">
    <!-- BEGIN: Hour Rate -->
    <div>
      <p class="q-mb-sm">BSF (Basic Session Fee) Value</p>
      <label for="houlyrate"
        >Please enter a number (typically your per-hour rate)</label
      >
      <div class="row">
        <q-select filled v-model="currency" :options="currencyList" />
        <q-input
          filled
          class="q-ml-lg"
          type="number"
          v-model="houlyRate"
          style="width: 80%"
        />
      </div>
    </div>
    <!-- END: Hour Rate -->
    <!-- BEGIN: Fee Unit -->
    <select-form
      v-model="feeunit"
      :options="feeunitList"
      filled
      :desc="'Fee Unit of Measure (optional)'"
    />
    <!-- END: Fee Unit -->
    <!-- BEGIN: Fee Negotiable -->
    <div>
      <p class="q-mb-sm">Are your fees negotiable?</p>
      <radio-group-form
        v-model="feenegotiable"
        :desc="'Select Yes if you still want us to contact you about lower rate jobs as well.'"
      />
    </div>
    <!-- END: Fee Negotiable -->
    <!-- BEGIN: Additional Information -->
    <div>
      <p class="q-mb-sm">Additional Information (optional)</p>
      <label for="additionalinfor"
        >Anything else that would be useful to casting directors, producers,
        clients etc (for example: theatre experience, awards, previous
        work)</label
      >
      <q-input v-model="additionalInfor" filled type="textarea" />
    </div>
    <!-- END: Additional Information -->
    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn @click="setPage(8)" color="primary" label="Continue" />
      <q-btn
        flat
        @click="setPage(6)"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Your Rates -->
</template>
<script>
import { ref } from "vue";
import { signupconstants } from "src/assets/constants";
import SelectForm from "src/components/common/SelectForm.vue";
import RadioGroupForm from "src/components/common/RadioGroupForm.vue";

export default {
  components: { SelectForm, RadioGroupForm },
  props: {
    step: Number,
    setPage: Function,
  },
  setup() {
    const currency = ref("OMR");
    const currencyList = signupconstants.currencies;
    const houlyRate = ref(null);
    const feeunit = ref("per hour");
    const feeunitList = signupconstants.feeunits;
    const feenegotiable = ref("Yes");
    const additionalInfor = ref(null);
    return {
      currency,
      currencyList,
      houlyRate,
      feeunit,
      feeunitList,
      feenegotiable,
      additionalInfor,
    };
  },
};
</script>
