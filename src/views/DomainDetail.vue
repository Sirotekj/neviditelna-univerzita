<template>
  <section>
    <h2 class="domain-name">neviditelna-univerzita.cz</h2>

    <div class="verbose-switch">
      <ToggleSwitch v-model="isVerbose" />
      <span class="label">Verbose view</span>
    </div>

    <!-- BRIEF MODE -->
    <div v-if="!isVerbose" class="brief">
      <p>Basic domain information</p>
      <DataTable :header="'Owner'" :rows="ownerRows" />
    </div>

    <!-- DETAILED MODE -->
    <div v-else class="detailed">
      <p>Extended domain information</p>
      <p>More technical details, history, metadata…</p>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import ToggleSwitch from '@/components/ui/ToggleSwitch.vue'
import DataTable from '@/components/ui/DataTable.vue'
import type { DomainType } from '@/types/types'
import type { TableCell } from '@/components/ui/DataTable.vue'

const props = defineProps<{ domain: DomainType }>()

const isVerbose = ref<boolean>(false)

const ownerRows = computed<TableCell[][]>(() => {
  const owner = props.domain.owner
  return [
    ['Handle', owner.handle],
    ['Organization', { text: owner.organization, published: owner.publish.organization }],
    ['Name', { text: owner.name, published: owner.publish.name }],
  ]
})
//const dnsRows = computed(() => props.domain.nsset.dns.map((dns) => [dns.name, dns.ip_address]))
</script>
<style scoped>
.domain-name {
  margin-bottom: 8px;
}

.verbose-switch {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}

.label {
  font-size: 14px;
  color: #555;
}
</style>
