<template>
  <table>
    <thead>
      <tr>
        <th colspan="4">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
          <span class="cell">
            {{ getCellValue(cell) }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { formatDate, isIsoDateString } from '../utils/utils'
defineProps<{ publish: boolean; header: string; rows: TableCell[][] }>()

export type TableCell = string

function getCellValue(cell: TableCell): string {
  return isIsoDateString(cell) ? formatDate(cell) : cell
  //return typeof cell === 'string' ? cell : cell.value
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

th:first-child {
  font-weight: bold;
}
td:nth-child(odd) span {
  font-weight: bold;
}
.cell {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.published-icon {
  display: flex;
  color: var(--color-green);
  font-size: 10px;
  width: 14px;
}
</style>
