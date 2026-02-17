<template>
  <SectionBlock title="Owner">
    <DataOtherTable :publish="true" :header="'Owner:'" :rows="rows"
  /></SectionBlock>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SectionBlock from '@/components/ui/SectionBlock.vue'
import DataOtherTable from '@/components/ui/DataOtherTable.vue'
import type { Contact } from '@/types/types'
import type { TableCell } from '@/components/ui/DataOtherTable.vue'

const props = defineProps<{
  owner: Contact
}>()

const rows = computed<TableCell[][]>(() => {
  const owner = props.owner
  return [
    ['Handle', owner.handle],
    [
      { value: 'Organization', publish: owner.publish.organization ? true : false },
      owner.organization,
    ],
    [{ value: 'Name', publish: owner.publish.organization ? true : false }, owner.name],
  ]
})
</script>
