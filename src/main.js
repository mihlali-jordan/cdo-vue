import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";

// Styling import
import "./index.css";

const app = createApp(App);
app.use(router);

app.mount("#app");
