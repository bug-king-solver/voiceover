<template>
  <q-page>
    <div style="max-width: 150vh; margin: auto; padding-top: 50px">
      <div align="center">
        <h3 style="margin-bottom: 0">Contact Us</h3>
        <h5 class="q-my-sm">This is contact us section</h5>
      </div>
      <div class="q-pa-md">
        <q-card class="my-card" flat>
          <q-card-section horizontal>
            <q-img
              src="https://cdn.quasar.dev/img/mountains.jpg"
              style="border-radius: 5px"
            />
            <q-card-actions
              class="q-px-md"
              style="padding-top: 0; padding-bottom: 0; width: 100%"
            >
              <q-form
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                "
                class="q-pl-md"
                @submit="onSubmit()"
              >
                <div>
                  <div>
                    <div class="text-h4 vertical-top" style="margin: 0">
                      Reach Out
                    </div>
                    <p>We look forward to hearing from you.</p>
                  </div>
                  <div class="row q-gutter-x-md">
                    <div class="col">
                      <custom-label :role="'firstname'" :desc="'FirstName'" />
                      <q-input
                        filled
                        v-model="vulidate.firstname.$model"
                        :error="vulidate.firstname.$error"
                        @blur="vulidate.firstname.$touch"
                        label="FirstName *"
                      />
                    </div>
                    <div class="col">
                      <custom-label :role="'lastname'" :desc="'LastName'" />
                      <q-input
                        filled
                        v-model="vulidate.lastname.$model"
                        :error="vulidate.lastname.$error"
                        @blur="vulidate.lastname.$touch"
                        label="LastName *"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-x-md">
                    <div class="col">
                      <custom-label
                        :role="'companyname'"
                        :desc="'Company name'"
                      />
                      <q-input
                        filled
                        v-model="companyName"
                        label="Company name"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-x-md">
                    <div class="col q-mt-sm">
                      <custom-label :role="'email'" :desc="'Email'" />
                      <q-input
                        filled
                        v-model="vulidate.email.$model"
                        :error="vulidate.email.$error"
                        @blur="vulidate.email.$touch"
                        type="email"
                        label="Email *"
                      />
                    </div>
                    <div class="col q-mt-sm">
                      <custom-label :role="'phone'" :desc="'Phone'" />
                      <q-input
                        filled
                        v-model="vulidate.phone.$model"
                        :error="vulidate.phone.$error"
                        @blur="vulidate.phone.$touch"
                        type="tel"
                        label="Phone *"
                      />
                    </div>
                  </div>
                  <div class="row q-gutter-x-md">
                    <div class="col q-mt-sm">
                      <custom-label :role="'country'" :desc="'Country'" />
                      <q-input
                        filled
                        v-model="vulidate.country.$model"
                        :error="vulidate.country.$error"
                        @blur="vulidate.country.$touch"
                        label="Country *"
                      />
                    </div>
                    <div class="col q-mt-sm">
                      <custom-label
                        :role="'howfind'"
                        :desc="'How did you find us?'"
                      />
                      <select-form
                        filled
                        v-model="vulidate.howFind.$model"
                        :error="vulidate.howFind.$error"
                        @blur="vulidate.howFind.$touch"
                        :label="'Please select *'"
                        :options="howFindList"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col q-mt-sm">
                      <custom-label
                        :role="'question'"
                        :desc="'What is your question about?'"
                      />
                      <select-form
                        filled
                        v-model="vulidate.questionType.$model"
                        :error="vulidate.questionType.$error"
                        @blur="vulidate.questionType.$touch"
                        :label="'Please select *'"
                        :options="questionTypeList"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col q-mt-sm">
                      <custom-label
                        :role="'question'"
                        :desc="'Ask your question here'"
                      />
                      <q-input
                        filled
                        v-model="vulidate.question.$model"
                        :error="vulidate.question.$error"
                        @blur="vulidate.question.$touch"
                        label="Your question... *"
                        type="textarea"
                      />
                    </div>
                  </div>
                  <div class="row justify-end">
                    <q-btn
                      class="q-mt-lg"
                      label="Send"
                      color="primary"
                      type="submit"
                    />
                  </div>
                </div>
              </q-form>
            </q-card-actions>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { reactive, ref } from "vue";
import SelectForm from "src/components/common/SelectForm.vue";
import CustomLabel from "src/components/common/CustomLabel.vue";
import { contactusconstants } from "src/assets/constants";
import {
  required,
  email as emailValidator,
  integer,
} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
export default {
  components: {
    SelectForm,
    CustomLabel,
  },
  setup() {
    const companyName = ref(null);
    const howFindList = contactusconstants.howFinds;
    const questionTypeList = contactusconstants.questions;
    const form = reactive({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      howFind: "",
      question: "",
    });
    const rules = {
      firstname: { required },
      lastname: { required },
      email: { required, emailValidator },
      phone: { required, integer },
      country: { required },
      howFind: { required },
      questionType: { required },
      question: { required },
    };
    const vulidate = useVuelidate(rules, form);
    async function validate() {
      return vulidate.value.$validate();
    }
    async function onSubmit() {
      try {
        const valid = await validate();
        if (!valid) {
          return window.alert("errors");
        }
      } catch (error) {
        console.log(error);
      }
    }
    return {
      companyName,
      howFindList,
      questionTypeList,
      vulidate,
      onSubmit,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>
<style lang="sass" scoped>
.my-card
  margin: 30px 0 0 0
  width: 100%
</style>
