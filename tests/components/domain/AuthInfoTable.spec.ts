import { mount } from '@vue/test-utils'
import AuthInfoTable from '@/components/domain/AuthInfoTable.vue'

// mock util funkce
jest.mock('@/components/utils/utils', () => ({
  formatDate: (value: string) => `formatted-${value}`,
}))

describe('AuthInfoTable.vue', () => {
  const mountTable = () =>
    mount(AuthInfoTable, {
      props: {
        expiresAt: '2026-01-01',
      },
    })

  it('ve výchozím stavu zobrazuje tlačítko SHOW', () => {
    const wrapper = mountTable()

    expect(wrapper.find('button.show-btn').exists()).toBe(true)
    expect(wrapper.find('.secret').exists()).toBe(false)
  })

  it('po kliknutí na SHOW zobrazí secret', async () => {
    const wrapper = mountTable()

    await wrapper.find('button.show-btn').trigger('click')

    const secret = wrapper.find('.secret')
    expect(secret.exists()).toBe(true)
    expect(secret.text().length).toBeGreaterThan(0)
  })

  it('zobrazuje formátované datum expirace', () => {
    const wrapper = mountTable()

    expect(wrapper.text()).toContain('formatted-2026-01-01')
  })
})
