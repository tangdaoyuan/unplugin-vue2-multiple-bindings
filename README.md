# unplugin-vue2-multiple-bindings

> support multiple `v-model` bindings in vue2

## Install
```bash
npm i unplugin-vue2-multiple-bindings -D
```

## Usage
```ts
import { defineConfig } from 'vite'
import UnpluginVue2MultipleBinding from '../src'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // ...etc
    UnpluginVue2MultipleBinding.vite({
      enable: true
    }),
  ],
  // ...tec
})
```

## Options

### enable

  - Enable plugin works
  - Type: Boolean
  - Default: `true`
