import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {
      isAuthenticated: false,
      email: null,
      token: null,
    },
  }),

  actions: {
    initStore() {
      this.user.isAuthenticated = false;

      if (localStorage.getItem("user_token")) {
        this.user.token = localStorage.getItem("user_token");
        this.user.email = localStorage.getItem("user_email");
        this.user.isAuthenticated = true;

        console.log("Initalized user:", this.user);
      }
    },
    setToken(token, email) {
      console.log("setToken", token, email);

      this.user.token = token;
      this.user.email = email;
      this.user.isAuthenticated = true;

      localStorage.setItem("user_token", token);
      localStorage.setItem("user_email", email);
    },
    removeToken() {
      console.log("removeToken");

      this.user.token = null;
      this.user.email = null;
      this.user.isAuthenticated = false;

      localStorage.removeItem("user_token");
      localStorage.setItem("user_email");
    },
  },
});
