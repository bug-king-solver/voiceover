import { createPinia } from "pinia";

export default async ({ app }) => {
  app.use(createPinia());
};
