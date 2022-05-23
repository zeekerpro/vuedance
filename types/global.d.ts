// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html#global-modifying-modules

declare global {

  declare type Nullable<T> = T | null;

  declare type NonNullable<T> = T extends null | undefined ? never : T;

  declare type Recordable<T = any> = Record<string, T>;

  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T;
  };

  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
  };

  declare type TimeoutHandle = ReturnType<typeof setTimeout>;

  declare type IntervalHandle = ReturnType<typeof setInterval>;

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement;
  }

  declare interface WheelEvent {
    path?: EventTarget[];
  }

  interface ImportMetaEnv extends ViteEnv {
    __: unknown;
  }

  declare interface ViteEnv {
    VITE_PORT: number;
		// mock 先注释，后面用到再说, 是不是和json-server冲突待判断
    // VITE_USE_MOCK: boolean;
    VITE_USE_PWA: boolean;
    VITE_BASE_PATH: string;
		VITE_PUBLIC_DIR: string;
    VITE_PROXYS: [string, string][];
    VITE_GLOB_APP_TITLE: string;
    VITE_GLOB_APP_SHORT_NAME: string;
    VITE_USE_CDN: boolean;
    VITE_DROP_CONSOLE: boolean;
    VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none';
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean;
    VITE_LEGACY: boolean;
    VITE_USE_IMAGEMIN: boolean;
    VITE_GENERATE_UI: string;
		VITE_I18N_LOCALES: string;
  }
}

export {}
