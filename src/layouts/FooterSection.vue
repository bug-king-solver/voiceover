<template>
  <q-footer class="myFooter absolute">
    <div class="row">
      <div class="col">
        <div>
          <router-link to="/">
            <button class="myBrand">
              <img src="../assets/img/lightlogo.png" style="width: 42px" />
            </button>
          </router-link>
        </div>
        <div>
          <p class="text-black">
            The better way to rent. Explore clear profiles. Book viewings
            instantly. Simple from search to move-in.
          </p>
        </div>
        <div></div>
      </div>
      <div class="col">this is</div>
      <div class="col">this is</div>
      <div class="col">this is</div>
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
<style scoped>
.myFooter {
  position: relative;
  background-color: rgb(223, 223, 223);
}
</style>
