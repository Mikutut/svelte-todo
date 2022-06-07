import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app-root")
});

console.log(import.meta.env.MODE);

export default app;
