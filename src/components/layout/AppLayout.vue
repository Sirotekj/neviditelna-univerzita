<script setup lang="ts">
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />

    <div class="layout-body">
      <AppSidebar />

      <main class="content">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
.layout {
  height: 100vh;
}

.layout-body {
  display: flex;
  height: calc(100vh - 70px);
}

.content {
  flex: 1;
  padding: 32px;
}
</style>
