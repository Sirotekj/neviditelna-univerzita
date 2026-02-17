<template>
  <table>
    <thead>
      <tr>
        <th colspan="2">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
          <span class="cell">
            <span v-if="publish" class="published-icon">
              <IconEyeOutline v-if="hasOnIcon(cell)" size="14" class="green" />
              <IconEyeOffOutline v-if="hasOffIcon(cell)" size="14" class="red" />
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
import IconEyeOutline from '../icons/IconEyeOutline.vue'
import IconEyeOffOutline from '../icons/IconEyeOffOutline.vue'
defineProps<{ publish: boolean; header: string; rows: TableCell[][] }>()

export type TableCell = string | { value: string; publish?: boolean }

function hasOnIcon(cell: TableCell): boolean {
  return typeof cell === 'object' && cell.publish === true
}
function hasOffIcon(cell: TableCell): boolean {
  return typeof cell === 'object' && cell.publish === false
}
function getCellValue(cell: TableCell): string {
  return typeof cell === 'string' ? cell : cell.value
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
td:first-child span {
  font-weight: bold;
}
.cell {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.published-icon {
  display: flex;
  font-size: 10px;
  width: 14px;
}
.unpublished-icon {
  display: flex;
  font-size: 10px;
  width: 14px;
}
.green {
  color: var(--color-green);
}
.red {
  color: var(--color-red);
}
</style>
