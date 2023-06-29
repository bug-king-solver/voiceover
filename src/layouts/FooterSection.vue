<template>
  <q-footer
    class="q-pa-lg"
    bordered
    style="background-color: white; position: relative"
  >
    <div class="myFooter row q-gutter-lg" align="left">
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
          <div class="q-gutter-sm">
            <q-btn
              size="1em"
              padding="none"
              square
              color="brown-5"
              icon="directions"
            />
            <q-btn
              size="1em"
              padding="none"
              square
              color="deep-orange"
              icon="edit_location"
            />
            <q-btn
              size="1em"
              padding="none"
              square
              color="purple"
              glossy
              icon="local_grocery_store"
            />
            <q-btn
              size="1em"
              padding="none"
              square
              color="black"
              icon="my_location"
            />
          </div>
          <p>Member of</p>
        </div>
      </div>
      <div class="col">
        <div class="text-h5 text-black">Contact us</div>
      </div>
      <div class="col">
        <div class="text-h5 text-black">Our Services</div>
        <div>
          <router-link to="/agents">
            <p class="text-black">Agents</p>
          </router-link>
          <div class="row">
            <router-link to="/let"> <p class="text-black">Let</p> </router-link>
            &nbsp;&nbsp;
            <p class="text-black">|</p>
            &nbsp;&nbsp;
            <router-link to="/sell">
              <p class="text-black">Sell</p>
            </router-link>
          </div>
          <router-link to="/flexible-rent">
            <p class="text-black">Flexible Rents</p>
          </router-link>
          <router-link to="/no-deposit">
            <p class="text-black">No Deposit</p>
          </router-link>
          <router-link to="/refer">
            <p class="text-black">Refer</p>
          </router-link>
        </div>
      </div>
      <div class="col">
        <div class="text-h5 text-black">Information</div>
        <p class="text-black">Privacy Policy</p>
        <p class="text-black">Terms of Service</p>
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
<style scoped>
.myBrand {
  border: none;
  background: transparent;
}
.myFooter {
  max-width: 150vh;
  margin: auto;
}
</style>
