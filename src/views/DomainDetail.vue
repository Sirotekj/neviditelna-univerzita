<template>
  <section>
    <h2 class="domain-name">neviditelna-univerzita.cz</h2>

    <div class="verbose-switch">
      <ToggleSwitch v-model="isVerbose" />
      <span class="label">Verbose view</span>
    </div>

    <div class="full-container">
      <div class="left-container">
        <AuthInfoTable :expiresAt="domain.expires_at" />
        <EventsTable :isVerbose="isVerbose" :events="domain.events" />
        <StateFlagsTable
          :isVerbose="isVerbose"
          :header="'State flags'"
          :state_flags="domain.state_flags"
        />
      </div>
      <div class="right-container">
        <OwnerTable :owner="domain.owner" />
        <AdminContactsTable
          :isVerbose="isVerbose"
          :admin_contacts="domain.administrative_contacts"
        />
        <NssetTable :nsset="domain.nsset" />
        <KeysetTable :keyset="domain.keyset" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ToggleSwitch from '@/components/ui/ToggleSwitch.vue'

import AuthInfoTable from '@/components/domain/AuthInfoTable.vue'
import EventsTable from '@/components/domain/EventsTable.vue'
import StateFlagsTable from '@/components/domain/StateFlagsTable.vue'

import OwnerTable from '@/components/domain/OwnerTable.vue'
import AdminContactsTable from '@/components/domain/AdminContactsTable.vue'
import NssetTable from '@/components/domain/NssetTable.vue'
import KeysetTable from '@/components/domain/KeysetTable.vue'

import type { DomainType } from '@/types/types'

defineProps<{ domain: DomainType }>()

const isVerbose = ref<boolean>(false)
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
.full-container {
  display: flex;
  width: 100%;
  gap: 48px;
  @media (max-width: 1444px) {
    display: block;
  }
}
.left-container {
  width: 60%;
  @media (max-width: 1444px) {
    width: 100%;
  }
}
.right-container {
  width: 40%;
  @media (max-width: 1444px) {
    width: 100%;
  }
}
</style>
