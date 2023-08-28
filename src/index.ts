import { app } from "app";
import { requireAllSvgFiles } from "shared/lib";

requireAllSvgFiles();
app.mount("#app");