import VitePluginCertificate from 'vite-plugin-mkcert';

export function configCertificate(){

	return VitePluginCertificate({
		source: 'coding',
	})

}
