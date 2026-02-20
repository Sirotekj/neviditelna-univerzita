import { mount } from '@vue/test-utils'
import AppHeader from '@/components/layout/AppHeader.vue'

describe('AppHeader.vue', () => {
  it('vykreslí název aplikace a uživatele', () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          IconMenu: true,
          IconAccountCircle: true,
          UserMenu: true,
        },
      },
    })

    expect(wrapper.find('h1').text()).toBe('Ferda')
    expect(wrapper.find('label').text()).toBe('Jan Musílek')
  })

  it('otevře UserMenu po kliknutí na tlačítko', async () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          IconMenu: true,
          IconAccountCircle: true,
          UserMenu: true,
        },
      },
    })

    // výchozí stav
    const userMenu = wrapper.findComponent({ name: 'UserMenu' })
    expect(userMenu.props('modelValue')).toBe(false)

    // klik na tlačítko
    await wrapper.find('button.icon-button').trigger('click')

    // UserMenu dostane true přes v-model
    expect(userMenu.props('modelValue')).toBe(true)
  })
})
