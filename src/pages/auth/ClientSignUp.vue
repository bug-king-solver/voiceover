<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-white text-white">
        <div class="text-h6 text-black">SIGN UP</div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <div class="q-pa-md q-panel">
          <q-form @submit="onSubmit" @reset="onReset">
            <!-- BEGIN: Your Email Address -->
            <div class="q-mt-sm">
              <custom-label :role="'email'" :desc="'Email Address'" />
              <q-input
                v-model="vuelidate.email.$model"
                :error="vuelidate.email.$error"
                @blur="vuelidate.email.$touch"
                hide-bottom-space
                filled
                label="Enter your email address *"
                :type="email"
              />
            </div>
            <!-- END: Your Email Address -->
            <!-- BEGIN: Your Confirm Email Address -->
            <div class="q-mt-sm">
              <custom-label
                :role="'confirmemail'"
                :desc="'Confirm Email Address'"
              />
              <q-input
                v-model="vuelidate.confirmemail.$model"
                :error="vuelidate.confirmemail.$error"
                @blur="vuelidate.confirmemail.$touch"
                hide-bottom-space
                filled
                label="Enter your confirm email address *"
                :type="email"
              />
            </div>
            <!-- END: Your Email Address -->
            <!-- BEGIN:  Your Password-->
            <div class="q-mt-sm">
              <custom-label :role="'password'" :desc="'Password'" />
              <q-input
                v-model="vuelidate.password.$model"
                :error="vuelidate.password.$error"
                @blur="vuelidate.password.$touch"
                hide-bottom-space
                filled
                label="Enter your password *"
                :type="isPwd ? 'password' : 'text'"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <!-- END: Your Password -->
            <!-- BEGIN:  Your Confirm Password-->
            <div class="q-mt-sm">
              <custom-label
                :role="'confirmpassword'"
                :desc="'Confirm Password'"
              />
              <q-input
                v-model="vuelidate.confirmpassword.$model"
                :error="vuelidate.confirmpassword.$error"
                @blur="vuelidate.confirmpassword.$touch"
                hide-bottom-space
                filled
                label="Enter your confirm password *"
                :type="isPwd ? 'password' : 'text'"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
            <!-- END: Your Password -->
            <div class="q-pa-md q-gutter-sm text-center">
              <q-btn
                label="Sign Up"
                type="submit"
                color="primary"
                :disabled="vuelidate.$invalid"
              />
              <q-btn
                label="Reset"
                @click="onReset()"
                type="reset"
                color="grey"
              />
            </div>
          </q-form>
        </div>
      </q-card-actions>
    </q-card>
  </div>
</template>
<script>
import { ref, reactive, computed } from "vue";
import useVuelidate from "@vuelidate/core";
import {
  email as emailValidator,
  minLength,
  required,
  sameAs,
} from "@vuelidate/validators";
import CustomLabel from "src/components/common/CustomLabel.vue";
import { Api } from "../../api";
import { apiSearch, registerUrl } from "../../api/auth";
export default {
  name: "SignIn",
  components: {
    CustomLabel,
  },
  setup() {
    const isPwd = ref(true);
    const form = reactive({
      email: "",
      confirmemail: "",
      password: "",
      confirmpassword: "",
    });
    const rules = computed(() => {
      return {
        email: { required, emailValidator },
        confirmemail: {
          required,
          emailValidator,
          sameAsEmail: sameAs(form.email),
        },
        password: { required, minLength: minLength(8) },
        confirmpassword: {
          required,
          minLength: minLength(8),
          sameAsPassword: sameAs(form.password),
        },
      };
    });
    const vuelidate = useVuelidate(rules, form);
    async function validate() {
      return vuelidate.value.$validate();
    }
    async function onSubmit() {
      try {
        const valid = await validate();
        if (!valid) {
          return console.log("Form could not be submitted.");
        }
        const formData = {
          email: form.email,
          password: form.password,
        };
        Api.post(`http://localhost:2001/api/auth/signup`, formData)
          .then(({ data }) => {
            console.log("sss");
            this.$notify({
              group: "userNotification",
              type: "success",
              text: `${data.message.customer} has been added correctly!`,
            });
          })
          .catch(() => {
            this.$notify({
              group: "userNotification",
              type: "danger",
              text: `The user wasn't registered correctly`,
            });
          })
          .finally(() => {});
      } catch (error) {
        console.error("Login error");
      }
    }

    async function onReset() {
      email.value = null;
      password.value = null;
      accept.value = false;
    }
    return {
      isPwd,
      vuelidate,
      onSubmit,
      onReset,
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
