import { createUnplugin } from 'unplugin'
import type { GeneralOptions } from './types'

export default createUnplugin<GeneralOptions>((_options, _meta) => {
  return {
    name: 'unplugin-vue2-multiple-bindings',
    transformInclude(id: string) {
      return id.endsWith('.vue')
    },
    transform(_code: string, _id: string) {
      return null
    },
  }
})
