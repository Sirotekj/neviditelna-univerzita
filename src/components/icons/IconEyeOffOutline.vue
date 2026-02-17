<template>
  <svg-icon type="mdi" :path="path"></svg-icon>
</template>

<script setup lang="ts">
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiEyeOffOutline } from '@mdi/js'

const path = mdiEyeOffOutline
</script>
