<template>
  <div class="row justify-between" style="justify-content: center">
    <div class="q-mx-sm col-5">
      <select-form
        outlined
        v-model="language"
        :round="true"
        :options="languageList"
        :label="'Select Language/Accent'"
      />
    </div>
    <div class="q-ml-lg col-5">
      <select-form
        outlined
        :round="true"
        v-model="gender"
        :options="genderList"
        :label="'Select Gneder'"
      />
    </div>
    <div class="q-my-auto col-1">
      <q-btn round>
        <q-avatar size="42px">
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </q-btn>
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
