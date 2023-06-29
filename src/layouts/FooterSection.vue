<template>
  <q-footer class="bg-white">
    <div class="footer">
      <div class="row">
        <div class="col"></div>
        <div class="col">
          <div class="text-h5 text-black">Contact Us</div>
          <div>
            <q-icon name="fa-solid fa-ambulance" />
          </div>
        </div>
        <div class="col"></div>
        <div class="col">This is our services part.</div>
      </div>
    </div>
  </q-footer>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterSection",
  setup() {
    return {};
  },
});
</script>
