<template>
  <div class="q-pa-md items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-white text-white">
        <div class="text-h6 text-black">SIGN UP</div>
      </q-card-section>
      <q-separator />
      <div class="q-pa-md">
        <q-stepper
          class="no-box-shadow"
          v-model="step"
          vertical
          color="primary"
          animated
        >
          <introduction-step :step="step" :setPage="setPage" />
          <account-details-step :step="step" :setPage="setPage" />
          <payment-method :step="step" :setPage="setPage" />
          <!-- <contact-detail-step :step="step" :setPage="setPage" />
          <voice-acting-step :step="step" :setPage="setPage" />
          <studio-recording :step="step" :setPage="setPage" />
          <your-rates-step :step="step" :setPage="setPage" />
          <finish-step :step="step" :setPage="setPage" /> -->
        </q-stepper>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
import IntroductionStep from "src/components/partials/signup/IntroductionStep.vue";
import AccountDetailsStep from "src/components/partials/signup/AccountDetailsStep.vue";
import PaymentMethod from "src/components/partials/signup/PaymentMethod.vue";
import ContactDetailStep from "src/components/partials/signup/ContactDetailStep.vue";
import VoiceActingStep from "src/components/partials/signup/VoiceActingStep.vue";
import StudioRecording from "src/components/partials/signup/StudioRecordingStep.vue";
import YourRatesStep from "src/components/partials/signup/YourRatesStep.vue";
import FinishStep from "src/components/partials/signup/FinishStep.vue";

export default {
  name: "SignUp",
  components: {
    IntroductionStep,
    AccountDetailsStep,
    PaymentMethod,
    // ContactDetailStep,
    // VoiceActingStep,
    // StudioRecording,
    // YourRatesStep,
    // FinishStep,
  },
  setup() {
    const step = ref(3);
    const setPage = (pageNumber) => {
      step.value = pageNumber;
    };
    return {
      step,
      setPage,
    };
  },
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 700px
  margin: auto
  margin-top: 50px
</style>
