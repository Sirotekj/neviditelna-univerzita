import { mount } from '@vue/test-utils'
import UserMenu from '@/components/ui/UserMenu.vue'

describe('UserMenu.vue', () => {
  it('se nevykreslí, když modelValue = false', () => {
    const wrapper = mount(UserMenu, {
      props: {
        modelValue: false,
      },
      global: {
        stubs: {
          IconAccountCircle: true,
          IconLoginVariant: true,
        },
      },
    })

    expect(wrapper.find('.user-menu').exists()).toBe(false)
  })

  it('se vykreslí, když modelValue = true', () => {
    const wrapper = mount(UserMenu, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          IconAccountCircle: true,
          IconLoginVariant: true,
        },
      },
    })

    expect(wrapper.find('.user-menu').exists()).toBe(true)
    expect(wrapper.text()).toContain('Jan Musílek')
    expect(wrapper.text()).toContain('Logout')
  })

  it('emitne update:modelValue = false po kliknutí na menu', async () => {
    const wrapper = mount(UserMenu, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          IconAccountCircle: true,
          IconLoginVariant: true,
        },
      },
    })

    await wrapper.find('.user-menu').trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false])
  })

  it('emitne update:modelValue = false po kliknutí na Logout', async () => {
    const wrapper = mount(UserMenu, {
      props: {
        modelValue: true,
      },
      global: {
        stubs: {
          IconAccountCircle: true,
          IconLoginVariant: true,
        },
      },
    })

    await wrapper.find('button.logout').trigger('click')

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')![0]).toEqual([false])
  })
})
