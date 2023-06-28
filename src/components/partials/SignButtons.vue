<template>
  <router-link to="/signin">
    <q-btn flat color="white" label="SIGN IN"
  /></router-link>

  <q-btn flat color="white" label="SIGN UP" @click="radio = true" />
  <q-dialog v-model="radio" persistent>
    <q-card style="min-width: 500px">
      <q-card-section>
        <div class="text-h6">Join as a client or arist</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <q-radio v-model="role" label="I am a artist." val="artist"></q-radio>
        <q-radio v-model="role" label="I am a client." val="client"></q-radio>
      </q-card-section>
      <q-card-actions align="right" class="text-primary">
        <q-btn flat color="red" label="Cancel" v-close-popup />
        <router-link to="/signup">
          <q-btn flat color="primary" label="Create" v-close-popup
        /></router-link>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const radio = ref(false);
    const role = ref("artist");
    return {
      radio,
      role,
    };
  },
};
</script>
