<template>
  <label class="toggle">
    <input type="checkbox" :checked="modelValue" @change="onChange" />
    <span class="slider"></span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToggleSwitch',
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const onChange = (event: Event) => {
      const target = event.target as HTMLInputElement
      emit('update:modelValue', target.checked)
    }

    return {
      onChange,
    }
  },
})
</script>
<style scoped>
.toggle {
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #ccc;
  border-radius: 20px;
  transition: 0.2s;
}

.slider::before {
  content: '';
  position: absolute;
  height: 14px;
  width: 14px;
  left: 3px;
  top: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.2s;
}

input:checked + .slider {
  background-color: #42b883;
}

input:checked + .slider::before {
  transform: translateX(16px);
}
</style>
