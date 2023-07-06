<template>
  <!-- BEGIN: About You Section -->
  <q-step :name="3" title="About You" prefix="3" :done="step > 3">
    <q-form autofocus>
      <!-- BEGIN: Title -->
      <div class="q-mt-sm">
        <custom-label :desc="'Title'" />
        <q-select
          filled
          v-model="vuelidate.title.$model"
          :options="titleList"
        />
      </div>
      <!-- END: Title -->
      <!-- BEGIN: Your First Name and Last Name -->
      <div class="q-mt-sm">
        <custom-label :role="'firstname'" :desc="'First Name'" />
        <q-input
          filled
          v-model="vuelidate.firstname.$model"
          :error="vuelidate.firstname.$error"
          @blur="vuelidate.firstname.$touch"
          label="Enter your first name *"
          hide-bottom-space
        />
      </div>
      <div class="q-mt-sm">
        <custom-label :desc="'Last Name'" />
        <q-input
          filled
          v-model="vuelidate.lastname.$model"
          :error="vuelidate.lastname.$error"
          @blur="vuelidate.lastname.$touch"
          label="Enter your last name *"
          hide-bottom-space
        />
      </div>
      <!-- END: Your First Name and Last Name -->
      <!-- BEGIN: Gender -->
      <div class="q-mt-sm">
        <custom-label :desc="'Gender'" />
        <q-select
          filled
          v-model="vuelidate.gender.$model"
          :error="vuelidate.gender.$error"
          @blur="vuelidate.gender.$touch"
          :options="genderList"
          hide-bottom-space
        />
      </div>
      <!-- END: Gender -->
      <!-- BEGIN: Your Born Year -->
      <div class="q-mt-sm">
        <custom-label :desc="'Your Birthday'" />
        <q-input
          filled
          v-model="vuelidate.date.$model"
          :error="vuelidate.date.$error"
          @blur="vuelidate.date.$touch"
          mask="####.##.##"
          label="yyyy.mm.dd"
          hide-bottom-space
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date
                  v-model="vuelidate.date.$model"
                  :error="vuelidate.date.$error"
                  @blur="vuelidate.date.$touch"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <!-- END: Your Born Year -->
      <!-- BEGIN: Your Alias/ Stage Name/ Pseudonym -->
      <div class="q-mt-sm">
        <custom-label :desc="'Alias/ Stage Name/ Pseudonym (optional)'" />
        <q-input
          filled
          v-model="alias"
          label="Enter your alias/stage name/pseudonym"
        ></q-input>
      </div>
      <!-- END: Your Alias/ Stage Name/ Pseudonym -->
      <!-- BEGIN: Native Country -->
      <div class="q-mt-sm">
        <label for="nativecountry"></label>
        <custom-label :desc="'Native Country (Natural accent)'" />
        <q-select
          filled
          v-model="vuelidate.country.$model"
          :error="vuelidate.country.$error"
          @blur="vuelidate.country.$touch"
          :options="countryList"
          label="Select your native country *"
          hide-bottom-space
        />
      </div>
      <!-- END: Native Country -->
      <!-- BEGIN: Primary Language -->
      <div class="q-mt-sm">
        <custom-label :desc="'Primary (Native) Language'" />
        <q-select
          filled
          v-model="vuelidate.language.$model"
          :error="vuelidate.language.$error"
          @blur="vuelidate.language.$touch"
          :options="languageList"
          label="Select your primary language *"
          hide-bottom-space
        />
      </div>
      <!-- END: Primary Language -->
      <!-- BEGIN: Next and Back Button Group -->
      <q-stepper-navigation>
        <q-btn
          @click="onNext(4)"
          color="primary"
          label="Continue"
          :disabled="vuelidate.$invalid"
        />
        <q-btn @click="setPage(2)" color="grey" label="Back" class="q-ml-sm" />
      </q-stepper-navigation>
      <!-- END: Next and Back Button Group -->
    </q-form>
  </q-step>
  <!-- END: About You Section -->
</template>
<script>
import { ref, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { signupconstants } from "assets/constants";
import CustomLabel from "src/components/common/CustomLabel.vue";

export default {
  props: {
    step: Number,
    setPage: Function,
  },
  components: {
    CustomLabel,
  },
  setup(props) {
    const titleList = signupconstants.titles;
    signupconstants.genders.pop();
    const genderList = signupconstants.genders;
    const alias = ref(null);
    const countryList = signupconstants.countries;
    const languageList = signupconstants.languages;
    const rules = {
      title: { required },
      firstname: { required },
      lastname: { required },
      gender: { required },
      date: { required },
      country: { required },
      language: { required },
    };
    const form = reactive({
      title: "Mr",
      firstname: "",
      lastname: "",
      gender: "",
      date: "",
      country: "",
      language: "",
    });

    // const loggedIn = computed(() => user.value);
    const vuelidate = useVuelidate(rules, form);
    async function validate() {
      return vuelidate.value.$validate();
    }
    async function onNext() {
      try {
        const valid = await validate();
        if (!valid) {
          return console.log("Form could not be submitted.");
        }
        props.setPage(4);
      } catch (error) {
        console.error("Login error");
      }
    }
    return {
      titleList,
      genderList,
      countryList,
      alias,
      languageList,
      vuelidate,
      onNext,
    };
  },
};
</script>
