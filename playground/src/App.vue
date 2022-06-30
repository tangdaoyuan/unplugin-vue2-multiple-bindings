<script lang="ts" setup>
import Comp from './Component.vue'
const variable1 = 'variable1'
const variable2 = 'variable2'
</script>
<template>
  Hello World!
  <div>
    <Comp v-model:variable="variable1" type="text" />
  </div>
  <div>
    <Comp v-model:variable="variable2" type="text" />
  </div>
</template>
