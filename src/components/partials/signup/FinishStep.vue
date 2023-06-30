<template>
  <!-- BEGIN: Finish -->
  <q-step :name="9" title="Finish" prefix="9" :done="step > 9">
    <!-- BEGIN: Verification -->
    <div class="row justify-between">
      <div class="col-9">
        <q-input
          filled
          v-model="vuelidate.verifycode.$model"
          :error="vuelidate.verifycode.$error"
          @blur="vuelidate.verifycode.$touch"
          label="Verification Code *"
          hide-bottom-space
        />
      </div>
      <div class="col-2" style="margin: auto">
        <q-btn color="primary" label="Verify" :disabled="vuelidate.$invalid" />
      </div>
    </div>
    <!-- END: Verification -->
    <q-separator color="grey" class="q-mt-md" />

    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn
        color="primary"
        label="Complete Registration"
        @submit="onSubmit()"
      />
      <q-btn @click="setPage(8)" color="grey" label="Back" class="q-ml-sm" />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Finish -->
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive } from "vue";
export default {
  props: {
    step: Number,
    setPage: Function,
  },
  setup() {
    const rules = {
      verifycode: { required },
    };
    const form = reactive({
      verifycode: "",
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
    };
  },
};
</script>
