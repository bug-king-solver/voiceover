<template>
  <q-page>
    <div style="max-width: 150vh; margin: auto; padding-top: 50px">
      <div align="center">
        <h3 style="margin-bottom: 0">Our Services</h3>
        <h5 class="q-my-sm">Voiceover, Translations, Dubbing</h5>
      </div>
      <div class="row justify-around q-pa-md">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-section>
            <div class="text-h6">Business Model</div>
            <div class="text-subtitle2">by Syed</div>
          </q-card-section>
          <q-card-section class="q-pt-none"> {{ lorem }} </q-card-section>
        </q-card>
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-section>
            <div class="text-h6">Business Execution</div>
            <div class="text-subtitle2">by Syed</div>
          </q-card-section>
          <q-card-section class="q-pt-none"> {{ lorem }} </q-card-section>
        </q-card>
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />
          <q-card-section>
            <div class="text-h6">Business Monitoring</div>
            <div class="text-subtitle2">by Syed</div>
          </q-card-section>
          <q-card-section class="q-pt-none"> {{ lorem }} </q-card-section>
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
  max-width: 350px
</style>
