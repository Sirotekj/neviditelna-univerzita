<template>
  <SectionBlock title="Events">
    <DataEventsTable :publish="true" :header="'Events:'" :rows="rows"
  /></SectionBlock>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SectionBlock from '@/components/ui/SectionBlock.vue'
import DataEventsTable from '@/components/ui/DataEventsTable.vue'
import type { Event } from '@/types/types'
import type { TableCell } from '@/components/ui/DataEventsTable.vue'

const props = defineProps<{
  events: {
    registered: Event
    transferred: Event
    updated: Event
    unregistered: Event | null
  }
}>()

const rows = computed<TableCell[][]>(() => {
  const events = props.events
  const rows: TableCell[][] = [
    ['Create date:', events.registered.timestamp, 'Registrar:', events.registered.registrar_handle],
    ['Update date:', events.updated.timestamp, 'Registrar:', events.updated.registrar_handle],
    [
      'Transfer date:',
      events.transferred.timestamp,
      'Registrar:',
      events.transferred.registrar_handle,
    ],
  ]

  if (events.unregistered) {
    rows.push([
      'Delete date:',
      events.unregistered.timestamp,
      'Registrar:',
      events.unregistered.registrar_handle,
    ])
  }

  return rows
})
</script>
