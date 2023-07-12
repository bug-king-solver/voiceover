<template>
  <!-- BEGIN: Introduction Section -->
  <q-step :name="1" title="Welcome to Voiceover" prefix="1" :done="step > 1">
    <div class="intro">
      <p>
        Before proceeding with the sign-up process, please read and accept our
        contract, policy, and terms and conditions. These documents outline the
        expectations, rights, and responsibilities of both parties involved. It
        is essential to understand and agree to these terms before registering
        as a voiceover artist on our website.
      </p>
      <p>
        <a class="text-black" href=""> Contact Us </a>
      </p>
      <p>
        <a class="text-black" href="/assets/pdf/Privacy Policy.pdf">
          Privacy Policy
        </a>
      </p>
      <p>
        <a class="text-black" href="/assets/pdf/Terms and Conditions.pdf">
          Terms and Conditions
        </a>
      </p>

      <q-toggle v-model="isAccept" label="Accept" />
      <q-stepper-navigation>
        <q-btn
          @click="onNext(2)"
          color="primary"
          label="Continue"
          :disabled="isAccept ? false : true"
        />
      </q-stepper-navigation>
    </div>
  </q-step>
  <!-- END: Introduction Section -->
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {},
  setup(props) {
    const isAccept = ref(false);
    const alert = ref(false);
    const onNext = (number) => {
      if (isAccept.value) {
        props.setPage(number);
      } else {
      }
    };

    return { isAccept, alert, onNext };
  },
};
</script>
