<template>
  <SectionBlock title="Nsset">
    <DataOtherTable :publish="false" :header="'NSSet:'" :rows="rows"
  /></SectionBlock>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SectionBlock from '@/components/ui/SectionBlock.vue'
import DataOtherTable from '@/components/ui/DataOtherTable.vue'
import type { Nsset } from '@/types/types'
import type { TableCell } from '@/components/ui/DataOtherTable.vue'

const props = defineProps<{
  nsset: Nsset
}>()

const rows = computed<TableCell[][]>(() => {
  const nsset = props.nsset
  return [
    ['Handle', nsset.handle],
    ['Registrar', nsset.registrar],
    ['DNS', nsset.dns.map((dns) => `${dns.name} (${dns.ip_address})`).join('\n ')],
  ]
})
</script>
