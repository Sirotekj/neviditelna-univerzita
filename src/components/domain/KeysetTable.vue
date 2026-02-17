<template>
  <SectionBlock title="KeySet">
    <DataOtherTable :publish="false" :header="'KeySet:'" :rows="rows"
  /></SectionBlock>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SectionBlock from '@/components/ui/SectionBlock.vue'
import DataOtherTable from '@/components/ui/DataOtherTable.vue'
import type { Keyset } from '@/types/types'
import type { TableCell } from '@/components/ui/DataOtherTable.vue'

const props = defineProps<{
  keyset: Keyset
}>()

const rows = computed<TableCell[][]>(() => {
  const keyset = props.keyset
  return [
    ['Handle', keyset.handle],
    ['Registrar', keyset.registrar],
    ['DNS keys', keyset.dns_keys.join('\n')],
  ]
})
</script>
