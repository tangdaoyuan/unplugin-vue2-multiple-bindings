import { expect, it } from 'vitest'
import { transform } from '@'

const _vue = `
<script lang="ts" setup>
import Comp from './Component.vue'
const variable1 = '1'
const variable2 = '2'
</script>
<template>
  Hello World!
  <img alt="RequiredLogo" :src="require('./assets/favicon.ico')">
  <Comp type="text" v-model:variable="variable1">variable1</Comp>
  <Comp type="text" v-model:variable="variable2">variable2</Comp>
</template>
`

it('should pass', () => {
  const { code } = transform(_vue, {})
  expect(code).toMatchInlineSnapshot(`
    "
    <script lang=\\"ts\\" setup>
    import Comp from './Component.vue'
    const variable1 = '1'
    const variable2 = '2'
    </script>
    <template>
      Hello World!
      <img alt=\\"RequiredLogo\\" :src=\\"require('./assets/favicon.ico')\\">
      <Comp type=\\"text\\" :variable.sync=\\"variable1\\">variable1</Comp>
      <Comp type=\\"text\\" :variable.sync=\\"variable2\\">variable2</Comp>
    </template>
    "
  `)
})
