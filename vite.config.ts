import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default ({mode}) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

	return defineConfig({
		base:
			process.env.NODE_ENV !== "production" ? "/" :
			process.env.BUILD_TO_PROJECTS_SUBDOMAIN === "true" ? "/svelte-todo/" : "/playground/svelte-todo/",
		plugins: [svelte()]
	});
}