<template>
  <AppLayout>
    <DomainDetail v-if="domain" :domain="domain" />
    <p v-if="domain">{{ domain.fqdn }}</p>
    <p v-else>Loading…</p>
  </AppLayout>
</template>

<style scoped></style>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import AppLayout from './components/layout/AppLayout.vue'
import DomainDetail from './views/DomainDetail.vue'
import type { DomainType } from '@/types/types'

export default defineComponent({
  components: {
    AppLayout,
    DomainDetail,
  },
  setup() {
    const domain = ref<DomainType | null>(null)
    onMounted(async () => {
      const response = await fetch('/data/domain-detail.json')
      const data = (await response.json()) as DomainType
      domain.value = data
    })
    return {
      domain,
    }
  },
})
</script>
