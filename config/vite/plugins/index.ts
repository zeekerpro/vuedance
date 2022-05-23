import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configHtmlPlugin } from './html';
import { configLegacyPlugin } from "./legacy";
import { configCertificate } from "./certificate";
import { configPurgeIcons } from "./purgeIcons";
import { configPwaConfig } from './pwa';
import { configAutoComponentsPlugin } from "./autoComponents";
import { configVisualizerConfig } from './visualizer';
import { configI18nPlugin } from "./i18n";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),

		configCertificate(),

		configI18nPlugin(viteEnv),

		configLegacyPlugin(viteEnv, isBuild),

		configHtmlPlugin(viteEnv, isBuild),

		configAutoComponentsPlugin(),

		configPurgeIcons(),

		configVisualizerConfig(),

		configPwaConfig(viteEnv, isBuild),
  ];

  return vitePlugins;
}
