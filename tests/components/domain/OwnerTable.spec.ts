import { mount } from '@vue/test-utils'
import OwnerTable from '@/components/domain/OwnerTable.vue'
import DataOtherTable from '@/components/ui/DataOtherTable.vue'

describe('OwnerTable.vue', () => {
  const ownerMock = {
    handle: 'OWNER-123',
    name: 'John Doe',
    organization: 'Example Org',
    publish: {
      organization: true,
      name: true,
    },
  }

  const mountComponent = () =>
    mount(OwnerTable, {
      props: {
        owner: ownerMock,
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
    const table = wrapper.findComponent(DataOtherTable)

    expect(table.props('publish')).toBe(true)
    expect(table.props('header')).toBe('Owner:')
  })

  it('vytvoří správné řádky z owner dat', () => {
    const wrapper = mountComponent()
    const table = wrapper.findComponent(DataOtherTable)

    expect(table.props('rows')).toEqual([
      ['Handle', 'OWNER-123'],
      [{ value: 'Organization', publish: true }, 'Example Org'],
      [{ value: 'Name', publish: true }, 'John Doe'],
    ])
  })
})
