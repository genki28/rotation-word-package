import { DefineComponent, Plugin } from "vue";

declare const RotationWord: Exclude<Plugin['install'], undefined>;
export default RotationWord;

// eslint-disable-next-line @typescript-eslint/ban-types
export const RotationWordComponent: DefineComponent<{}, {}, any>