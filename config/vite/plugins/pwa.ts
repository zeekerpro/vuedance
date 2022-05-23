/**
 * Zero-config PWA for Vite
 * https://github.com/antfu/vite-plugin-pwa
 */
import { VitePWA } from 'vite-plugin-pwa';

export function configPwaConfig(env: ViteEnv, isBuild: boolean) {
  const { VITE_USE_PWA, VITE_GLOB_APP_TITLE, VITE_GLOB_APP_SHORT_NAME } = env;

	// only work in the production environment
	if(!isBuild || !VITE_USE_PWA) { return [] }

	// vite-plugin-pwa
	const pwaPlugin = VitePWA({
		manifest: {
			name: VITE_GLOB_APP_TITLE,
			short_name: VITE_GLOB_APP_SHORT_NAME,
			icons: [
				{
					src: './resources/icons/pwa/192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: './resources/icons/pwa/512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
			],
		},
	});

	return pwaPlugin;
}

