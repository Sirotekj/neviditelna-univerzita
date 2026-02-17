<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">
          {{ props.header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
          <span class="cell" :class="isActive(cell) ? 'green' : 'red'">
            <span class="active-icon">
              <IconCheckCircle v-if="isActive(cell)" size="14" />
              <IconCloseCircle v-if="!isActive(cell)" size="14" />
            </span>
            <span>
              {{ getCellValue(cell) }}
            </span>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import IconCheckCircle from '../icons/IconCheckCircle.vue'
import IconCloseCircle from '../icons/IconCloseCircle.vue'
const props = defineProps<{ header: string; rows: TableFlagsCell[][] }>()

export type TableFlagsCell = string | { name: string; active: boolean; description: string }

function isActive(cell: TableFlagsCell): boolean {
  return typeof cell === 'object' && cell.active === true
}
function getCellValue(cell: TableFlagsCell): string {
  return typeof cell === 'string' ? cell : cell.description
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
thead {
  background: #eeeeee;
  text-align: left;
}
th,
td {
  padding: 4px 8px;
  white-space: pre-line;
}

.cell {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.green {
  color: var(--color-green);
}
.red {
  color: var(--color-red);
}

.active-icon {
  display: flex;
  font-size: 10px;
  width: 14px;
}
.inactive-icon {
  display: flex;
  font-size: 10px;
  width: 14px;
}
</style>
