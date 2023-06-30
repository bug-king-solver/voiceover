<template>
  <!-- BEGIN: Studio Recording -->
  <q-step :name="6" title="Studio Recording" prefix="6" :done="step > 6">
    <!-- BEGIN: Website URL -->
    <div class="q-mt-sm">
      <custom-label
        :role="'website'"
        :desc="'Website URL (nearest venue for on-location sessions) (optional)'"
      />
      <q-input
        filled
        v-model="websiteUrl"
        label="e.g. website, facebook, instagram, email or telegram number"
      />
    </div>
    <!-- END: Website URL -->
    <!-- BEGIN: Willing To Travel -->
    <div class="q-mt-sm">
      <custom-label :role="'travel'" :desc="'Are you willing to travel?'" />
      <div class="row justify-start">
        <q-radio v-model="travel" label="Yes" val="yes"></q-radio>
        <q-radio v-model="travel" label="No" val="no"></q-radio>
      </div>
    </div>
    <!-- END: Willing To Travel -->
    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn @click="setPage(7)" color="primary" label="Continue" />
      <q-btn @click="setPage(5)" color="grey" label="Back" class="q-ml-sm" />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Studio Recording -->
</template>
<script>
import { ref } from "vue";
import CustomLabel from "src/components/common/CustomLabel.vue";

export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {
    CustomLabel,
  },
  setup() {
    const websiteUrl = ref(null);
    const travel = ref("yes");
    return {
      websiteUrl,
      travel,
    };
  },
};
</script>
