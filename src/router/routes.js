const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/HomePage.vue") },
      {
        path: "our-services",
        component: () => import("pages/OurServices.vue"),
      },
      {
        path: "terms-conditions",
        component: () => import("pages/TermsConditions.vue"),
      },
      {
        path: "how-work",
        component: () => import("pages/HowWork.vue"),
      },
      {
        path: "translations",
        component: () => import("pages/TranslatorPage.vue"),
      },
      {
        path: "contact-us",
        component: () => import("pages/ContactUs.vue"),
      },
      {
        path: "signin",
        component: () => import("pages/auth/SignIn.vue"),
      },
      {
        path: "signup",
        component: () => import("pages/auth/PreSignUp.vue"),
      },
      {
        path: "/signup/artist",
        component: () => import("src/pages/auth/ArtistSignUp.vue"),
      },
      {
        path: "/signup/client",
        component: () => import("pages/auth/ClientSignUp.vue"),
      },
      {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
      },
    ],
  },
];

export default routes;
