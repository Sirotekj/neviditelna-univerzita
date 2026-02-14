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
          <span v-if="typeof cell === 'string'"> {{ cell }}</span>
          <span v-else class="cell-with-icon">
            {{ cell.text }}
            <span v-if="cell.published" class="published-icon"> ● </span>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
defineProps<{ header: string; rows: TableCell[][] }>()
export type TableCell = string | { text: string; published?: boolean }
</script>

<style>
table {
  width: 100%;
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
}
.cell-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.published-icon {
  color: green;
  font-size: 10px;
}
</style>
