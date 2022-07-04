import { bootstrap } from './bootstrap'

bootstrap().then(async (vuedance) => {
	// wait for the app to be ready
	await vuedance.router.isReady()

	// finally mount the app to the dom
	vuedance.app.mount('#app')
})
