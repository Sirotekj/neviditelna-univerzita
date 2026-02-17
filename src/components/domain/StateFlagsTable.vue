<template>
  <div class="table">
    <div class="head">{{ header }}</div>
    <div v-if="!isVerbose">
      <div class="flags-grid">
        <div class="flags-column">
          <div v-for="(flag, flagIndex) in flagOn" :key="'flag-' + flagIndex" class="flag-item">
            <span v-if="flag.active" class="active-icon">
              <IconCheckCircle size="14" />
            </span>
            <span v-if="!flag.active" class="inactive-icon">
              <IconCloseCircle size="14" />
            </span>
            <span class="text" :class="flag.active ? 'green' : 'red'">
              {{ flag.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flags-grid">
      <div
        v-for="(group, groupIndex) in groupedFlags"
        :key="'group-' + groupIndex"
        class="flags-column"
      >
        <div v-for="flag in group" :key="flag?.name" class="flag-item">
          <span v-if="flag?.active" class="active-icon">
            <IconCheckCircle size="14" />
          </span>
          <span v-else class="inactive-icon">
            <IconCloseCircle size="14" />
          </span>
          <span class="text" :class="flag?.active ? 'green' : 'red'">
            {{ flag?.description }}
          </span>
        </div>
      </div>
      <div v-if="ungroupedFlags.length" class="flags-column">
        <div class="flag-item" v-for="flag in ungroupedFlags" :key="flag.name">
          <span v-if="flag.active" class="active-icon">
            <IconCheckCircle size="14" />
          </span>
          <span v-if="!flag.active" class="inactive-icon">
            <IconCloseCircle size="14" />
          </span>
          <span class="text" :class="flag.active ? 'green' : 'red'">
            {{ flag.description }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import type { StateFlag } from '../../types/types'
import IconCheckCircle from '../icons/IconCheckCircle.vue'
import IconCloseCircle from '../icons/IconCloseCircle.vue'
const props = defineProps<{
  isVerbose: boolean
  header: string
  state_flags: {
    flags: StateFlag[]
    groups: string[][]
  }
}>()
const flagOn = computed(() => {
  const flags: StateFlag[] = props.state_flags.flags
  return flags
    .filter((flag) => flag.active)
    .map((flag) => {
      return { description: flag.description, active: flag.active }
    })
})
const flagMap = computed(() =>
  Object.fromEntries(props.state_flags.flags.map((flag) => [flag.name, flag])),
)
/*const groupedFlags = computed(() => {
  return new Set(props.state_flags.groups.flat().filter((name) => flagMap.value[name]))
})*/
const groupedFlags = computed(() => {
  return props.state_flags.groups.map((group) =>
    group.map((name) => flagMap.value[name]).filter(Boolean),
  )
})
/*const ungroupedFlags = computed(() => {
  return props.state_flags.flags.filter((flag) => !groupedFlags.value.has(flag.name))
})*/
const ungroupedFlags = computed(() => {
  const groupedNames = new Set(props.state_flags.groups.flat())

  return props.state_flags.flags.filter((flag) => !groupedNames.has(flag.name))
})
</script>
<style scope>
.table {
  border-radius: 3px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.head {
  background-color: var(--color-grey);
  padding: 4px 8px;
  font-weight: bold;
}
.flags-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}

.flags-column {
  display: flex;
  flex-direction: column;
}

.flag-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
}

.active-icon {
  display: flex;
  font-size: 10px;
  width: 14px;
  color: var(--color-green);
}
.inactive-icon {
  display: flex;
  font-size: 10px;
  width: 14px;
  color: var(--color-red);
}
.green {
  color: var(--color-green);
}
.red {
  color: var(--color-red);
}
</style>
