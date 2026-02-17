<template>
  <table class="auth-table">
    <tbody>
      <!-- ROW 1: AuthInfo -->
      <tr>
        <td class="label">AuthInfo:</td>
        <td class="value">
          <button v-if="!isVisible" @click="showSecret" class="show-btn">SHOW</button>

          <span v-else class="secret">
            {{ secret }}
          </span>
        </td>
      </tr>

      <!-- ROW 2: Expires -->
      <tr>
        <td class="label">Expires at:</td>
        <td class="value">
          {{ formatDate(props.expiresAt) }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { formatDate } from '../utils/utils'

const props = defineProps<{
  expiresAt: string
}>()

const isVisible = ref(false)

const secret = Math.random().toString(36).slice(2, 12)

function showSecret() {
  isVisible.value = true
}
</script>
<style scoped>
table {
  width: 100%;
  margin-block: 24px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  border-spacing: 0;
}
td {
  padding: 4px 8px;
  white-space: pre-line;
}
.auth-table {
  width: 100%;
  border-collapse: collapse;
}

.label {
  font-weight: bold;
  width: 180px;
}

.value {
  padding-left: 8px;
}

.show-btn {
  padding: 4px 10px;
  cursor: pointer;
  color: var(--color-white);
  background: var(--color-blue);
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.secret {
  font-family: monospace;
}
</style>
