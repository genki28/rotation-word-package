# rotation-word

# Gettting
The first step when using rotation-word-component is installing its npm package:
```
$ yarn add rotation-word
```
or
```
$ npm install rotation-word
```

If you want to use it with any component, please refer to the following example to setup it.:
main.ts
```
import { createApp } from "vue";
import App from "./App.vue";
import RotationWord from "rotation-word-package";
import "rotation-word-package/dist/rotation-word.css"

createApp(App)
  .use(RotationWord)
  .mount("#app");
```

App.vue
```
<template>
  <RotationWord
    word="hogehoge"
  />
</template>
```

## 任意の文字を回転させましょう
