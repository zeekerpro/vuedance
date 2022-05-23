/**
	* vite-plugin-vue-i18n plugin does i18n resources pre-compilation / optimizations
	*
	* @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
	*/

import { vueI18n } from "@intlify/vite-plugin-vue-i18n";
import path from "path";

export function configI18nPlugin(viteEnv: ViteEnv){

	return vueI18n({
		include: path.resolve(__dirname, `../../../${viteEnv.VITE_I18N_LOCALES}`),
	})

}
