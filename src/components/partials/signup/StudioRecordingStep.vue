<template>
  <!-- BEGIN: Studio Recording -->
  <q-step :name="6" title="Studio Recording" prefix="6" :done="step > 6">
    <!-- BEGIN: Website URL -->
    <div>
      <label for="website"
        >Website URL (nearest venue for on-location sessions) (optional)</label
      >
      <q-input
        filled
        v-model="websiteUrl"
        label="e.g. website, facebook, instagram, email or telegram number"
      />
    </div>
    <!-- END: Website URL -->
    <!-- BEGIN: Willing To Travel -->
    <radio-group-form :desc="'Are you willing to travel?'" v-model="travel" />
    <!-- END: Willing To Travel -->
    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn @click="setPage(7)" color="primary" label="Continue" />
      <q-btn
        flat
        @click="setPage(5)"
        color="primary"
        label="Back"
        class="q-ml-sm"
      />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Studio Recording -->
</template>
<script>
import { ref } from "vue";
import RadioGroupForm from "src/components/common/RadioGroupForm.vue";

export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {
    RadioGroupForm,
  },
  setup() {
    const websiteUrl = ref(null);
    const travel = ref("Yes");
    return {
      websiteUrl,
      travel,
    };
  },
};
</script>
