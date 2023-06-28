<template>
  <div class="q-pa-md items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-white">
        <div class="text-h6 text-black">CHOOSE YOUR ROLE</div>
      </q-card-section>
      <q-separator />
      <div class="q-pa-md">
        <div class="row">
          <div class="col">
            <p>I am a Client, hiring a project</p>
            <q-radio v-model="role" label="Client" val="client" />
          </div>
          <div class="col">
            <p>I am a Artist, looking for work</p>
            <q-radio v-model="role" label="Artist" val="artist" />
          </div>
        </div>
        <div class="">
          <q-btn label="Next" color="primary" />
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const role = ref("");
    return {
      role,
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
