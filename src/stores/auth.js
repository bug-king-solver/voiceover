import { defineStore } from "pinia";
import { getStoreItem, setStoreItem } from "src/services/localstorage.service";
import { ref } from "vue";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
  }),
  getters: {
    loggedIn: (state) => !!state.access_token,
  },
  actions: {
    login(username = "", password = "") {
      try {
        // // update pinia state
        // this.user = user;
        // // store user details and jwt in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify("loggedin"));

        // // redirect to previous url or default to home page
        this.loggedIn = true;
      } catch (error) {}
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      // router.push("/account/login");
    },
  },
});
