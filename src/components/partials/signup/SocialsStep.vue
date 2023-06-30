<template>
  <!-- BEGIN: Socials -->
  <q-step :name="8" title="Socials" prefix="8" :done="step > 8">
    <!-- BEGIN: Twitter -->
    <q-input filled bottom-slots type="url" v-model="twitter" label="Twitter">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="twitter = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <!-- END: Twitter -->
    <!-- BEGIN: Instagram -->
    <q-input
      filled
      bottom-slots
      type="url"
      v-model="instagram"
      label="Instagram"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="instagram = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <!-- END: Instagram -->
    <!-- BEGIN: Facebook -->
    <q-input filled bottom-slots type="url" v-model="facebook" label="Facebook">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="facebook = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <!-- END: Facebook -->
    <!-- BEGIN: LinkedIn -->
    <q-input filled bottom-slots type="url" v-model="linkedin" label="LinkedIn">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="linkedin = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <!-- END: LinkedIn -->
    <!-- BEGIN: SoundCloud -->
    <q-input
      filled
      bottom-slots
      type="url"
      v-model="soundcloud"
      label="SoundCloud"
    >
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="soundcloud = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <!-- END: SoundCloud -->
    <!-- BEGIN: Youtube -->
    <q-input filled bottom-slots type="url" v-model="youtube" label="Youtube">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="youtube = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <!-- END: Youtube -->
    <!-- BEGIN: TikTok -->
    <q-input filled bottom-slots type="url" v-model="tiktok" label="TikTok">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="tiktok = ''" class="cursor-pointer" />
      </template>
    </q-input>
    <!-- END: TikTok -->
    <!-- BEGIN: Next and Back Button Group -->
    <q-stepper-navigation>
      <q-btn @click="setPage(9)" color="primary" label="Continue" />
      <q-btn @click="setPage(7)" color="grey" label="Back" class="q-ml-sm" />
    </q-stepper-navigation>
    <!-- END: Next and Back Button Group -->
  </q-step>
  <!-- END: Socials -->
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    step: Number,
    setPage: Function,
  },
  setup() {
    const twitter = ref(null);
    const instagram = ref(null);
    const facebook = ref(null);
    const linkedin = ref(null);
    const soundcloud = ref(null);
    const youtube = ref(null);
    const tiktok = ref(null);
    return {
      twitter,
      instagram,
      facebook,
      linkedin,
      soundcloud,
      youtube,
      tiktok,
    };
  },
};
</script>
