import { createUnplugin } from 'unplugin'
import MagicString from 'magic-string'
import { defaultOptions } from './options'
import type { GeneralOptions, Options } from './types'

const REGEX = /\sv\-model\:(?<variable>[a-z0-9A-Z_]+)\s{0,1}/g

export function transform(code: string, _options: GeneralOptions) {
  const magicstring = new MagicString(code)
  for (const matcher of code.matchAll(REGEX)) {
    const match = matcher as RegExpMatchArray
    const str = match[0]
    if (!match.groups?.variable)
      continue

    const transformed = ` :${match.groups.variable}.sync`
    magicstring.overwrite(match.index!, match.index! + str.length, transformed)
  }

  return {
    code: magicstring.toString(),
    map: magicstring.generateMap({ hires: true }),
  }
}

export default createUnplugin<GeneralOptions>((_options, _meta) => {
  const options = { ...defaultOptions, ..._options } as Options
  if (!options.enable) {
    return {
      name: 'unplugin-vue2-multiple-bindings',
    }
  }
  return {
    enforce: 'pre',
    name: 'unplugin-vue2-multiple-bindings',
    transformInclude(id: string) {
      return id.endsWith('.vue')
    },
    transform(_code: string, _id: string) {
      return transform(_code, options)
    },
  }
})
