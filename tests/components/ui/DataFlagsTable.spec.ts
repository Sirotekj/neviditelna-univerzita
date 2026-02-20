import { mount } from '@vue/test-utils'
import DataFlagsTable from '@/components/ui/DataFlagsTable.vue'

describe('DataFlagsTable.vue', () => {
  const rows = [
    [
      {
        name: 'flagA',
        active: true,
        description: 'Active flag',
      },
      {
        name: 'flagB',
        active: false,
        description: 'Inactive flag',
      },
    ],
  ]

  const mountTable = () =>
    mount(DataFlagsTable, {
      props: {
        header: 'State flags',
        rows,
      },
      global: {
        stubs: {
          IconCheckCircle: true,
          IconCloseCircle: true,
        },
      },
    })

  it('vykreslí header tabulky', () => {
    const wrapper = mountTable()
    expect(wrapper.find('th').text()).toBe('State flags')
  })

  it('vykreslí hodnoty flagů', () => {
    const wrapper = mountTable()
    expect(wrapper.text()).toContain('Active flag')
    expect(wrapper.text()).toContain('Inactive flag')
  })

  it('zobrazí ikony pro aktivní i neaktivní flagy', () => {
    const wrapper = mountTable()

    const checkIcons = wrapper.findAllComponents({ name: 'IconCheckCircle' })
    const closeIcons = wrapper.findAllComponents({ name: 'IconCloseCircle' })

    expect(checkIcons.length).toBe(1)
    expect(closeIcons.length).toBe(1)
  })
})
