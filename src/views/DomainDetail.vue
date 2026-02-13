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
    </div>

    <!-- DETAILED MODE -->
    <div v-else class="detailed">
      <p>Extended domain information</p>
      <p>More technical details, history, metadata…</p>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import ToggleSwitch from '@/components/ui/ToggleSwitch.vue'
import type { DomainType } from '@/types/types'

defineProps<{ domain: DomainType }>()
export default defineComponent({
  name: 'DomainDetail',
  components: {
    ToggleSwitch,
  },
  setup() {
    const isVerbose = ref<boolean>(false)

    return {
      isVerbose,
    }
  },
})
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
