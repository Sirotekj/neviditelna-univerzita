<template>
  <header class="header">
    <div class="left">
      <IconMenu />
      <h1>Ferda</h1>
    </div>
    <div class="right">
      <button class="icon-button">
        <IconAccountCircle size="24" />
      </button>
      <label>Jan Musílek</label>
    </div>
  </header>
</template>
<script setup lang="ts">
import IconMenu from '../icons/IconMenu.vue'
import IconAccountCircle from '../icons/IconAccountCircle.vue'
</script>
<style scoped>
.header {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  color: white;
  background: #2196f3;
}
.header div {
  display: flex;
  align-items: center;
}
.left {
  gap: 24px;
}
.right {
  gap: 12px;
  text-transform: uppercase;
}
.icon-button {
  padding: 4px;
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
