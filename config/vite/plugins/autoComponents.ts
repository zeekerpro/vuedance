import Components from "unplugin-vue-components/vite";

/**
	* unplugin-vue-components plugin is responsible of autoloading components
	* documentation and md file are loaded for elements and components sections
	*
	* @see https://github.com/antfu/unplugin-vue-components
	*/
export function configAutoComponentsPlugin(){
	return Components({
		dirs: ['documentation', 'src/components', 'src/layouts'],
		extensions: ['vue', 'md'],
		dts: true,
		include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
	})
}
