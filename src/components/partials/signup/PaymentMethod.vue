<template>
  <!-- BEGIN: Preferred payment method details Section -->
  <q-step
    :name="3"
    title="Preferred payment method details"
    prefix="3"
    :done="step > 3"
  >
    <q-form autofocus>
      <!-- BEGIN: PayPal -->
      <div class="q-mt-sm">
        <custom-label :desc="'PayPal'" :role="'paypal'" />
        <q-input
          v-model="vuelidate.paypal.$model"
          :error="vuelidate.paypal.$error"
          @blur="vuelidate.paypal.$touch"
          filled
          label="Enter PayPal email address *"
          hide-bottom-space
        />
      </div>
      <!-- END: PayPal -->
      <!-- BEGIN: Bank -->
      <div class="q-mt-sm">
        <custom-label :desc="'Bank Account Details'" :role="'bankAccount'" />
      </div>
      <div class="q-mt-sm">
        <q-input
          v-model="vuelidate.bankName.$model"
          :error="vuelidate.bankName.$error"
          @blur="vuelidate.bankName.$touch"
          filled
          label="Enter bank name *"
          hide-bottom-space
        />
      </div>

      <div class="q-mt-sm">
        <q-input
          v-model="vuelidate.accountName.$model"
          :error="vuelidate.accountName.$error"
          @blur="vuelidate.accountName.$touch"
          filled
          label="Enter account holder name *"
          hide-bottom-space
        />
      </div>

      <div class="q-mt-sm">
        <q-input
          v-model="vuelidate.accountAddress.$model"
          :error="vuelidate.accountAddress.$error"
          @blur="vuelidate.accountAddress.$touch"
          filled
          label="Enter account holder address *"
          hide-bottom-space
        />
      </div>

      <div class="q-mt-sm">
        <q-input
          v-model="vuelidate.accountNumber.$model"
          :error="vuelidate.accountNumber.$error"
          @blur="vuelidate.accountNumber.$touch"
          filled
          label="Enter account number *"
          hide-bottom-space
        />
      </div>

      <div class="q-mt-sm">
        <q-input
          v-model="vuelidate.routingSort.$model"
          :error="vuelidate.routingSort.$error"
          @blur="vuelidate.routingSort.$touch"
          filled
          label="Enter routing/sort code (if applicable)"
          hide-bottom-space
        />
      </div>

      <div class="q-mt-sm">
        <q-input
          v-model="vuelidate.bacs.$model"
          :error="vuelidate.bacs.$error"
          @blur="vuelidate.bacs.$touch"
          filled
          label="Enter BACS *"
          hide-bottom-space
        />
      </div>
      <div class="q-mt-sm">
        <q-input
          v-model="vuelidate.iban.$model"
          :error="vuelidate.iban.$error"
          @blur="vuelidate.iban.$touch"
          filled
          label="Enter IBAN *"
          hide-bottom-space
        />
      </div>
      <!-- END: Bank -->
      <!-- BEGIN: Next and Back Button Group -->
      <q-stepper-navigation>
        <q-btn
          @click="onNext(4)"
          color="primary"
          label="Continue"
          :disabled="vuelidate.$invalid"
        />
        <q-btn @click="setPage(2)" color="grey" label="Back" class="q-ml-sm" />
      </q-stepper-navigation>
      <!-- END: Next and Back Button Group -->
    </q-form>
  </q-step>
  <!-- END: Preferred payment method details Section -->
</template>
<script>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import CustomLabel from "src/components/common/CustomLabel.vue";
import {
  email as emailValidator,
  required,
  integer,
} from "@vuelidate/validators";

export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {
    CustomLabel,
  },
  setup(props) {
    const rules = {
      paypal: { required, emailValidator },
      bankName: { required },
      accountName: { required },
      accountAddress: { required, emailValidator },
      accountNumber: { required, integer },
      routingSort: {},
      bacs: { required },
      iban: { required },
    };
    const form = reactive({
      paypal: "",
      bankName: "",
      accountName: "",
      accountAddress: "",
      accountNumber: "",
      routingSort: "",
      bacs: "",
      iban: "",
    });
    // const loggedIn = computed(() => user.value);
    const vuelidate = useVuelidate(rules, form);
    async function validate() {
      return vuelidate.value.$validate();
    }
    async function onNext(value) {
      try {
        const valid = await validate();
        if (!valid) {
          return console.log("Form could not be submitted.");
        }
        props.setPage(value);
      } catch (error) {
        console.error("Login error");
      }
    }
    return {
      vuelidate,
      onNext,
    };
  },
};
</script>
