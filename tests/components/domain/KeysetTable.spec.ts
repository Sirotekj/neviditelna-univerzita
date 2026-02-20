import { mount } from '@vue/test-utils'
import KeysetTable from '@/components/domain/KeysetTable.vue'
import DataOtherTable from '@/components/ui/DataOtherTable.vue'

describe('KeysetTable.vue', () => {
  const keysetMock = {
    handle: 'KEYSET-123',
    registrar: 'REG-1',
    dns_keys: ['key1', 'key2'],
  }

  const mountComponent = () =>
    mount(KeysetTable, {
      props: {
        keyset: keysetMock,
      },
      global: {
        stubs: {
          SectionBlock: {
            template: '<section><slot /></section>',
            props: ['title'],
          },
          DataOtherTable: {
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

    const table = wrapper.findComponent(DataOtherTable)

    expect(table.props('publish')).toBe(false)
    expect(table.props('header')).toBe('KeySet:')
  })

  it('vytvoří správné řádky z keyset dat', () => {
    const wrapper = mountComponent()
    const table = wrapper.findComponent(DataOtherTable)

    expect(table.props('rows')).toEqual([
      ['Handle', 'KEYSET-123'],
      ['Registrar', 'REG-1'],
      ['DNS keys', 'key1\nkey2'],
    ])
  })
})
