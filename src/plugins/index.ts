import { bootstrap } from '/@/bootstrap'

export type VuedanceAppContext = Awaited<ReturnType<typeof bootstrap>>

export type VuedancePlugin = (vuedance: VuedanceAppContext) => void | Promise<void>

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: VuedancePlugin) {
	return plugin
}

export async function registerPlugins(vuedance: VuedanceAppContext) {
	const plugins = import.meta.glob('./modules/*.ts')
	for (const path in plugins) {
		try {
			const { default: plugin } = await plugins[path]()
			await plugin(vuedance)
		} catch (error) {
			console.error(`Error while loading plugin "${path}".`)
			console.error(error)
		}
	}
}
