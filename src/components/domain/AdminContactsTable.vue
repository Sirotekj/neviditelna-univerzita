<template>
  <SectionBlock title="Administrative contacts">
    <DataOtherTable
      v-if="!isVerbose"
      :publish="isVerbose"
      :header="'Administrative contacts:'"
      :rows="rowsOne"
    />
    <div v-else>
      <DataOtherTable
        v-for="(rows, rowsIndex) in rowsMore"
        :key="'contact-' + rowsIndex"
        :publish="isVerbose"
        header="Administrative contact:"
        :rows="rows"
      />
    </div>
  </SectionBlock>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SectionBlock from '@/components/ui/SectionBlock.vue'
import DataOtherTable from '@/components/ui/DataOtherTable.vue'
import type { Contact } from '@/types/types'
import type { TableCell } from '@/components/ui/DataOtherTable.vue'

const props = defineProps<{
  isVerbose: boolean
  admin_contacts: Contact[]
}>()

const rowsOne = computed<TableCell[][]>(() => {
  const admin_contacts = props.admin_contacts
  return admin_contacts.map((contact) => {
    return [contact.name, contact.handle]
  })
})
const rowsMore = computed<TableCell[][][]>(() => {
  const admin_contacts = props.admin_contacts
  return admin_contacts.map((contact) => {
    return [
      ['Handle', contact.name],
      [
        { value: 'Organization', publish: contact.publish.organization ? true : false },
        contact.organization,
      ],
      [{ value: 'Name', publish: contact.publish.organization ? true : false }, contact.name],
    ]
  })
})
</script>
