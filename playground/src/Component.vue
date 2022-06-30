<script lang="ts" setup>
const props = defineProps({
  variable: String,
})
</script>
<template>
  {{
    props.variable
  }}
</template>
