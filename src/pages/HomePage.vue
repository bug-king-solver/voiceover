<template>
  <q-page>
    <div
      align="center"
      style="max-width: 150vh; margin: auto; padding-top: 50px"
    >
      <!-- BEGIN: Hero Title -->
      <div>
        <h2 class="text-center" style="margin-bottom: 0">
          Welcome to Sarz Recording Studio
        </h2>
        <h5 class="text-center q-my-sm">(An Online Voiceover Agency)</h5>
      </div>
      <!-- END: Hero Title -->
      <!-- BEGIN: Search Box -->
      <div class="q-ma-xl">
        <complex-search-form />
      </div>
      <!-- END: Search Box -->
    </div>
  </q-page>
</template>

<script>
import ComplexSearchForm from "src/components/common/ComplexSearchForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  components: {
    ComplexSearchForm,
  },
  setup() {
    // Option 2: use computed and functions to use the store
  },
});
</script>
