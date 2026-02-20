import { mount } from '@vue/test-utils'
import NssetTable from '@/components/domain/NssetTable.vue'

describe('NssetTable.vue', () => {
  const nssetMock = {
    handle: 'NSSET-123',
    registrar: 'REG-1',
    dns: [
      { name: 'ns1.example.cz', ip_address: '192.0.2.1' },
      { name: 'ns2.example.cz', ip_address: '192.0.2.2' },
    ],
  }

  const mountComponent = () =>
    mount(NssetTable, {
      props: {
        nsset: nssetMock,
      },
      global: {
        stubs: {
          SectionBlock: {
            name: 'SectionBlock',
            template: '<section><slot /></section>',
            props: ['title'],
          },
          DataOtherTable: {
            name: 'DataOtherTable',
            template: '<div class="data-table" />',
            props: ['rows', 'header', 'publish'],
          },
        },
      },
    })

  it('vykreslí DataOtherTable', () => {
    const wrapper = mountComponent()

    expect(wrapper.find('.data-table').exists()).toBe(true)
  })

  it('předá správné props do DataOtherTable', () => {
    const wrapper = mountComponent()
    const table = wrapper.findComponent({ name: 'DataOtherTable' })

    expect(table.props('publish')).toBe(false)
    expect(table.props('header')).toBe('NSSet:')
  })

  it('vytvoří správné řádky z nsset dat', () => {
    const wrapper = mountComponent()
    const table = wrapper.findComponent({ name: 'DataOtherTable' })

    expect(table.props('rows')).toEqual([
      ['Handle', 'NSSET-123'],
      ['Registrar', 'REG-1'],
      ['DNS', 'ns1.example.cz (192.0.2.1)\n ns2.example.cz (192.0.2.2)'],
    ])
  })
})
