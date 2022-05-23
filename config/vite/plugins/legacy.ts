import legacy from '@vitejs/plugin-legacy';

export function configLegacyPlugin(viteEnv: ViteEnv, isBuild: boolean){

	const { VITE_LEGACY } = viteEnv;

	return VITE_LEGACY && isBuild ? legacy() : []

}
