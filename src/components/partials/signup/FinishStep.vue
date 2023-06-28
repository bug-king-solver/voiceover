<template>
  <!-- BEGIN: Finish -->
  <q-step :name="9" title="Finish" prefix="9" :done="step > 9">
    <!-- BEGIN: Verification -->
    <div class="row justify-between">
      <q-input
        filled
        v-model="verifycode"
        label="Verification Code"
        style="width: 80%"
      />
      <q-btn color="primary" label="Verify" />
    </div>
    <!-- END: Verification -->
    <q-separator color="grey" class="q-mt-md" />

    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn color="primary" label="Complete Registration" />
      <q-btn
        flat
        @click="setPage(8)"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Finish -->
</template>

<script>
export default {
  props: {
    step: Number,
    setPage: Function,
  },
  setup() {},
};
</script>
