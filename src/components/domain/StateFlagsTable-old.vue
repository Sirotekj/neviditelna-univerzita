<template>
  <SectionBlock title="State flags:">
    <FlagsOtherTable :header="'State flags'" :rows="rows"
  /></SectionBlock>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SectionBlock from '@/components/ui/SectionBlock.vue'
import FlagsOtherTable from '@/components/ui/DataFlagsTable.vue'
import type { StateFlag } from '@/types/types'
import type { TableFlagsCell } from '@/components/ui/DataFlagsTable.vue'

const props = defineProps<{
  isVerbose: boolean
  state_flags: {
    flags: StateFlag[]
    groups: string[][]
  }
}>()

const rows = computed<TableFlagsCell[][]>(() => {
  //const flags = props.state_flags.flags
  const filteredFlags = props.isVerbose
    ? props.state_flags.flags.map((flag) => [
        { name: flag.name, active: flag.active, description: flag.description },
      ])
    : props.state_flags.flags
        .filter((flag) => flag.active)
        .map((flag) => [{ name: flag.name, active: flag.active, description: flag.description }])

  return filteredFlags
})
</script>
