<template>
  <header class="header">
    <IconMenu />
    <h1>Ferda</h1>
  </header>
</template>
<script setup lang="ts">
import IconMenu from '../icons/IconMenu.vue'
</script>
<style>
.header {
  height: 70px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: white;
  background: #2196f3;
}
</style>
