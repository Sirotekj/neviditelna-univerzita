import { mount } from '@vue/test-utils'
import AppLayout from '@/components/layout/AppLayout.vue'

describe('AppLayout.vue', () => {
  it('vykreslí layout se záhlavím, sidebarem a slotem', () => {
    const wrapper = mount(AppLayout, {
      slots: {
        default: '<div class="slot-content">Obsah stránky</div>',
      },
      global: {
        stubs: {
          AppHeader: true,
          AppSidebar: true,
        },
      },
    })

    // layout existuje
    expect(wrapper.find('.layout').exists()).toBe(true)

    // header a sidebar jsou použity
    expect(wrapper.findComponent({ name: 'AppHeader' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'AppSidebar' }).exists()).toBe(true)

    // slot se vyrenderoval
    expect(wrapper.find('.slot-content').text()).toBe('Obsah stránky')
  })
})
