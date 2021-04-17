import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";

// Styling import
import "./index.css";

// Global components import
import AppButton from "./components/shared/AppButton.vue";
import AppInputField from "./components/shared/AppInputField.vue";

const app = createApp(App);
app.use(router);

app.component("app-button", AppButton);
app.component("app-input-field", AppInputField);

app.mount("#app");
