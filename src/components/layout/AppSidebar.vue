<template>
  <aside class="sidebar">
    <!-- menu / placeholder -->
    <div class="applications">Applications</div>
    <div class="registry"><IconEarth />Registry</div>
  </aside>
</template>

<script setup lang="ts">
import IconEarth from '../icons/IconEarth.vue'
</script>
<style>
.sidebar {
  width: 250px;
  border-right: 1px solid #e2e2e2;
}
.applications {
  padding: 12px;
  color: #827b83;
  text-transform: uppercase;
}
.registry {
  padding: 12px;
  background: #ffc107;
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
