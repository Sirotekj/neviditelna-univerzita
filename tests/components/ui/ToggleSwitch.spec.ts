import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import ToggleSwitch from '@/components/ui/ToggleSwitch.vue'

describe('ToggleSwitch.vue', () => {
  it('respektuje modelValue', async () => {
    const wrapper = mount(ToggleSwitch, {
      props: { modelValue: true },
    })

    const input = wrapper.find('input')
    await nextTick()

    expect((input.element as HTMLInputElement).checked).toBe(true)
  })

  it('funguje jako v-model input', async () => {
    const wrapper = mount(ToggleSwitch, {
      props: { modelValue: false },
    })

    const input = wrapper.find('input')
    ;(input.element as HTMLInputElement).checked = true

    await input.trigger('change')

    expect(wrapper.emitted('update:modelValue')![0]).toEqual([true])
  })
})
