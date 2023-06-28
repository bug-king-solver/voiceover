<template>
  <!-- BEGIN: Introduction Section -->
  <q-step :name="1" title="Welcome to Voiceover" prefix="1" :done="step > 1">
    <div class="intro">
      <p>
        For each ad campaign that you create, you can control how much you're
        willing to spend on clicks and conversions, which networks and
        geographical locations you want your ads to show on, and more. For each
        ad campaign that you create, you can control how much you're willing to
        spend on clicks and conversions, which networks and geographical
        locations you want your ads to show on, and more. For each ad campaign
        that you create, you can control how much you're willing to spend on
        clicks and conversions, which networks and geographical locations you
        want your ads to show on, and more. For each ad campaign that you
        create, you can control how much you're willing to spend on clicks and
        conversions, which networks and geographical locations you want your ads
        to show on, and more.
      </p>
      <q-toggle v-model="isAccept" label="Agree with our Policy." />

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
