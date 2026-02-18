<template>
  <div class="user-menu" v-if="props.modelValue" @click="close">
    <div class="user">
      <IconAccountCircle size="32" />
      <div class="user-text"><label>Jan Musílek</label><span>admin</span></div>
    </div>
    <hr />
    <button class="logout" @click="close">
      <IconLoginVariant size="24" /><label>Logout</label>
    </button>
  </div>
</template>
<script setup lang="ts">
import IconAccountCircle from '../icons/IconAccountCircle.vue'
import IconLoginVariant from '../icons/IconLoginVariant.vue'

const props = defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

function close() {
  emit('update:modelValue', false)
}
</script>
<style scoped>
.user-menu {
  position: absolute;
  right: 12px;
  top: 60px;
  min-width: 250px;
  background: var(--color-background);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
.user {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  span {
    color: var(--color-dark-grey);
  }
  svg {
    color: var(--color-dark-grey);
  }
}
.user-text {
  display: flex;
  flex-direction: column;
}
.logout {
  display: flex;
  gap: 16px;
  padding: 8px 16px;
  svg {
    width: 32px;
    color: var(--color-dark-grey);
  }
}
</style>
