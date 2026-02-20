import { mount } from '@vue/test-utils'
import AppSidebar from '@/components/layout/AppSidebar.vue'

describe('AppSidebar.vue', () => {
  it('vykreslí položky sidebaru', () => {
    const wrapper = mount(AppSidebar, {
      global: {
        stubs: {
          IconEarth: true,
        },
      },
    })

    expect(wrapper.find('.sidebar').exists()).toBe(true)
    expect(wrapper.text()).toContain('Applications')
    expect(wrapper.text()).toContain('Registry')
  })
})
