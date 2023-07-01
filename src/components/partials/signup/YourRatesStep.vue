<template>
  <!-- BEGIN: Your Rates -->
  <q-step :name="7" title="Your Rates" prefix="7" :done="step > 7">
    <!-- BEGIN: Hour Rate -->
    <div class="q-mt-sm">
      <custom-label
        :role="'houlyrate'"
        :desc="'BSF (Basic Session Fee) Value'"
      />
      <div class="row justify-between">
        <q-select
          class="col-2"
          filled
          v-model="currency"
          :options="currencyList"
          hide-bottom-space
        />
        <q-input
          filled
          class="col-9"
          type="number"
          v-model="vuelidate.houlyRate.$model"
          :error="vuelidate.houlyRate.$error"
          @blur="vuelidate.houlyRate.$touch"
          label="Please enter a number (typically your per-hour rate) *"
          hide-bottom-space
        />
      </div>
    </div>
    <!-- END: Hour Rate -->
    <!-- BEGIN: Fee Unit -->
    <div class="q-mt-sm">
      <custom-label
        :role="'feeunit'"
        :desc="'Fee Unit of Measure (optional)'"
      />
      <select-form
        v-model="feeunit"
        :options="feeunitList"
        filled
        :desc="'per hour'"
      />
    </div>
    <!-- END: Fee Unit -->
    <!-- BEGIN: Fee Negotiable -->
    <div class="q-mt-sm">
      <custom-label
        :role="'feenegotiable'"
        :desc="'Are your fees negotiable?'"
      />
      <p class="q-mb-none">
        Select Yes if you still want us to contact you about lower rate jobs as
        well.
      </p>
      <div class="row justify-start">
        <q-radio v-model="feenegotiable" label="Yes" val="yes"></q-radio>
        <q-radio v-model="feenegotiable" label="No" val="no"></q-radio>
      </div>
    </div>
    <!-- END: Fee Negotiable -->
    <!-- BEGIN: Additional Information -->
    <div class="q-mt-sm">
      <custom-label
        :role="'additionalinfor'"
        :desc="'Additional Information (optional)'"
      />
      <q-input
        v-model="additionalInfor"
        filled
        type="textarea"
        :placeholder="`Anything else that would be useful to casting directors, producers, clients etc (for example: theatre experience, awards, previous work)`"
      />
    </div>
    <!-- END: Additional Information -->
    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn
        @click="onNext(8)"
        color="primary"
        label="Continue"
        :disabled="vuelidate.$invalid"
      />
      <q-btn @click="setPage(6)" color="grey" label="Back" class="q-ml-sm" />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Your Rates -->
</template>
<script>
import { ref, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { signupconstants } from "src/assets/constants";
import SelectForm from "src/components/common/SelectForm.vue";
import CustomLabel from "src/components/common/CustomLabel.vue";

export default {
  components: {
    SelectForm,
    CustomLabel,
  },
  props: {
    step: Number,
    setPage: Function,
  },
  setup(props) {
    const currency = ref("OMR");
    const currencyList = signupconstants.currencies;
    const feeunit = ref("per hour");
    const feeunitList = signupconstants.feeunits;
    const feenegotiable = ref("yes");
    const additionalInfor = ref(null);
    const rules = {
      houlyRate: { required },
    };
    const form = reactive({
      houlyRate: "",
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
      currency,
      currencyList,
      feeunit,
      feeunitList,
      feenegotiable,
      additionalInfor,
      vuelidate,
      onNext,
    };
  },
};
</script>
