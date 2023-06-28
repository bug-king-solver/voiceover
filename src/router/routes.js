const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("src/pages/HomePage.vue") }],
  },
  {
    path: "/our-services",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/OurServices.vue") }],
  },
  {
    path: "/terms-conditions",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/TermsConditions.vue") },
    ],
  },
  {
    path: "/how-work",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/HowWork.vue") }],
  },
  {
    path: "/contact-us",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ContactUs.vue") }],
  },
  {
    path: "/signin",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/auth/SignIn.vue") }],
  },
  {
    path: "/presignup",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/auth/PreSignUp.vue") },
    ],
  },
  {
    path: "/signup",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/auth/SignUp.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
