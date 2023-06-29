import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem("user")),
    returnUrl: null,
    loggedIn: false,
  }),
  actions: {
    login(username = "", password = "") {
      try {
        // // update pinia state
        // this.user = user;

        // // store user details and jwt in local storage to keep user logged in between page refreshes
        // localStorage.setItem("user", JSON.stringify(user));

        // // redirect to previous url or default to home page
        // router.push(this.returnUrl || "/");
        this.loggedIn = true;
      } catch (error) {}
    },
    logout() {
      this.user = null;
      localStorage.removeItem("user");
      router.push("/account/login");
    },
  },
});
