import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { registerPlugins } from './plugins'

export async function bootstrap() {
	const app = createApp(App)

	const vuedance = {
		app,
		router,
	}

	// app level provide
	// @see: https://vuejs.org/guide/components/provide-inject.html#app-level-provide
	app.provide('vuedance', vuedance)

	// register plugins
	registerPlugins(vuedance)

	// use router after plugins registration, so we can register navigation guards
	app.use(vuedance.router)

	return vuedance
}
