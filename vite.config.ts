import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import { resolve } from 'path'
import { assignEnv } from './config/utils'
import { createServerProxys } from './config/vite/createServerProxys'
import { OUTPUT_DIR } from './config/constants'
import { createVitePlugins } from './config/vite/plugins'
import optimizeDepsConfigs from './config/vite/optimizeDepsConfigs'

function pathResolve(dir: string) {
	return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
	const root = process.cwd()

	const envDir = pathResolve('config/environments/')

	const rawEnv = loadEnv(mode, envDir)

	// The boolean type read by loadEnv is a string. This function can be converted to boolean type
	const env = assignEnv(rawEnv)

	const SILENT = Boolean(process.env.SILENT) ?? false
	const SOURCE_MAP = Boolean(process.env.SOURCE_MAP) ?? false

	const isBuild = command === 'build'

	const { VITE_PORT, VITE_BASE_PATH, VITE_PROXYS, VITE_DROP_CONSOLE, VITE_PUBLIC_DIR } =
		env

	return {
		root,
		base: VITE_BASE_PATH,
		envDir: envDir,
		publicDir: VITE_PUBLIC_DIR,
		logLevel: SILENT ? 'error' : 'info',
		resolve: {
			alias: [
				// /@/xxxx => src/xxxx
				{
					find: /\/@\//,
					replacement: pathResolve('src') + '/',
				},
			],
		},
		server: {
			https: true,
			port: VITE_PORT,
			proxy: createServerProxys(VITE_PROXYS),
		},
		esbuild: {
			pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : [],
		},
		build: {
			sourcemap: SOURCE_MAP,
			brotliSize: !SILENT,
			outDir: OUTPUT_DIR,
		},
		optimizeDeps: optimizeDepsConfigs,
		plugins: createVitePlugins(env, isBuild),
	}
})
