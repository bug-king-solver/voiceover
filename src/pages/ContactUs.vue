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
              >
                <div>
                  <div class="text-h4 vertical-top" style="margin: 0">
                    Reach Out
                  </div>
                  <p>We look forward to hearing from you.</p>
                  <q-input
                    class="q-mb-md"
                    v-model="name"
                    filled
                    label="Name"
                    autofocus
                  />
                  <q-input
                    class="q-mb-md"
                    v-model="email"
                    filled
                    label="Email"
                  />
                  <q-input
                    class="q-mb-md"
                    v-model="message"
                    filled
                    type="textarea"
                    label="Type your message..."
                  />
                </div>
                <div class="row justify-end">
                  <q-btn color="primary" label="Send" />
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
export default {
  setup() {
    return {
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
