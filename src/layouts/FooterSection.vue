<template>
  <q-footer bordered style="background-color: white; position: relative">
    <div class="myFooter q-pa-md">
      <div class="row q-gutter-x-md">
        <div class="col myFooterSections">
          <router-link to="/">
            <img class="logo" src="../assets/img/logo.png" />
          </router-link>
          <div>
            <p class="text-black">
              Online Voiceover Agency - Connecting clients with the best
              voiceover artists. Simplifying the selection process for a perfect
              match.
            </p>
            <div class="row q-gutter-x-sm">
              <div class="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"
                  ></path>
                </svg>
              </div>
              <div class="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  ></path>
                </svg>
              </div>
              <div class="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </div>
              <div class="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Medium</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.237 4.999-5 5zm.97-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"
                  ></path>
                </svg>
              </div>
            </div>
            <p class="text-black q-mt-sm">Registered Company in the UK</p>
          </div>
        </div>
        <div class="col myFooterSections">
          <h6 class="myFooterTitle text-black">Contact us</h6>
          <div>
            <div class="icon" style="display: flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                ></path>
              </svg>
              <a
                href="mailto:info@sarzrecordingstudio.com"
                style="margin-left: 10px"
                class="text-black"
                ><p>info@sarzrecordingstudio.com</p></a
              >
            </div>
            <p class="text-black">For Non-UK Customers: +447774647962</p>
            <p class="text-black">UK Customers: 07774647962</p>
          </div>
        </div>
        <div class="col myFooterSections">
          <h6 class="myFooterTitle text-black">Our Services</h6>
          <div>
            <router-link to="/" style="color: black">
              <p class="text-black">Voiceovers</p>
            </router-link>
            <div class="row">
              <router-link to="/translations" style="color: black">
                <p class="text-black">Translations</p>
              </router-link>
            </div>
            <router-link to="/contact-us" style="color: black">
              <p class="text-black">Quick Auditions (Post Your Script)</p>
            </router-link>
          </div>
        </div>
        <div class="col myFooterSections">
          <h6 class="myFooterTitle text-black">Information</h6>
          <p><a class="text-black" href="">Privacy Policy</a></p>
          <p><a class="text-black" href="">Terms and Conditions</a></p>
        </div>
      </div>
      <div class="row q-mt-lg justify-bottom">
        <p class="text-black" style="margin-bottom: 0">
          Limited company registered in England and Wales number 14198314.
        </p>
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
.myBrand img {
  width: 42px;
}
.myFooter {
  max-width: 150vh;
  margin: auto;
}
.icon svg {
  fill: #000;
}
.myFooterTitle {
  height: 50px;
  margin-top: 0;
  margin-bottom: 0;
}
.myFooterSections {
  min-width: 30vh;
}
</style>
