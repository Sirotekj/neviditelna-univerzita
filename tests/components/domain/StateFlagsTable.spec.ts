import { mount } from '@vue/test-utils'
import StateFlagsTable from '@/components/domain/StateFlagsTable.vue'

describe('StateFlagsTable.vue', () => {
  const stateFlagsMock = {
    flags: [
      {
        name: 'flagA',
        active: true,
        description: 'Active flag A',
      },
      {
        name: 'flagB',
        active: false,
        description: 'Inactive flag B',
      },
      {
        name: 'flagC',
        active: true,
        description: 'Active flag C',
      },
    ],
    groups: [['flagA', 'flagB']],
  }

  const mountComponent = (isVerbose: boolean) =>
    mount(StateFlagsTable, {
      props: {
        header: 'State flags',
        isVerbose,
        state_flags: stateFlagsMock,
      },
      global: {
        stubs: {
          IconCheckCircle: true,
          IconCloseCircle: true,
        },
      },
    })

  it('při isVerbose = false zobrazí pouze aktivní flagy', () => {
    const wrapper = mountComponent(false)

    const text = wrapper.text()

    expect(text).toContain('Active flag A')
    expect(text).toContain('Active flag C')
    expect(text).not.toContain('Inactive flag B')
  })

  it('při isVerbose = true zobrazí groupované i negroupované flagy', () => {
    const wrapper = mountComponent(true)

    const text = wrapper.text()

    expect(text).toContain('Active flag A')
    expect(text).toContain('Inactive flag B')
    expect(text).toContain('Active flag C')
  })

  it('vykreslí hlavičku', () => {
    const wrapper = mountComponent(false)

    expect(wrapper.find('.head').text()).toBe('State flags')
  })
})
