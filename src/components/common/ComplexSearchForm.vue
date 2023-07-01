<template>
  <div class="row justify-around">
    <div class="col-6">
      <select-form
        outlined
        v-model="language"
        :round="true"
        :options="languageList"
        :label="'Select Language/Accent'"
      />
    </div>
    <div class="col-4">
      <select-form
        outlined
        :round="true"
        v-model="gender"
        :options="genderList"
        :label="'Select Gender'"
      />
    </div>
    <div class="col-1 q-pt-sm">
      <q-btn round size="md" icon="search" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { signupconstants } from "src/assets/constants";
import SelectForm from "./SelectForm.vue";
export default {
  components: {
    SelectForm,
  },
  setup() {
    const language = ref(null);
    const languageList = signupconstants.languages;
    const gender = ref(null);
    const genderList = signupconstants.genders;
    return {
      language,
      languageList,
      gender,
      genderList,
    };
  },
};
</script>
