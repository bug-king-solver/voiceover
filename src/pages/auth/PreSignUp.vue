<template>
  <div class="q-pa-md items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-white">
        <h6 class="text-black" style="margin: 0">CHOOSE YOUR ROLE</h6>
      </q-card-section>
      <q-separator />
      <div class="q-pa-md" style="padding-top: 0">
        <div class="row">
          <div class="col q-ma-md q-pa-sm roleSelect" align="center">
            <h4>I am a Client, hiring a project</h4>
            <q-radio v-model="role" label="Client" val="client" />
          </div>
          <div class="col q-ma-md q-pa-sm roleSelect" align="center">
            <h4>I am a Artist, looking for work</h4>
            <q-radio v-model="role" label="Artist" val="artist" />
          </div>
        </div>
        <div class="row justify-end q-mt-lg">
          <router-link
            :to="role === 'client' ? '/signup/client' : '/signup/artist'"
          >
            <q-btn label="Next" color="primary" @click="console.log(role)" />
          </router-link>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const role = ref("artist");
    return {
      role,
    };
  },
};
</script>
<style scoped>
.my-card {
  width: 100%;
  max-width: 700px;
  margin: auto;
  margin-top: 50px;
}
.roleSelect {
  border: solid 1px rgb(189, 189, 189);
  border-radius: 10px;
}
</style>
