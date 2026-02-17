<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiEarth } from '@mdi/js'

const path = mdiEarth
</script>
