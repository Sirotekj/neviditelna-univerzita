import { mount } from '@vue/test-utils'
import EventsTable from '@/components/domain/EventsTable.vue'
import DataEventsTable from '@/components/ui/DataEventsTable.vue'

describe('EventsTable.vue', () => {
  const baseEvents = {
    registered: {
      timestamp: '2024-01-01',
      registrar_handle: 'REG-1',
    },
    updated: {
      timestamp: '2024-02-01',
      registrar_handle: 'REG-2',
    },
    transferred: {
      timestamp: '2024-03-01',
      registrar_handle: 'REG-3',
    },
  }

  const mountComponent = (withUnregistered: boolean) =>
    mount(EventsTable, {
      props: {
        events: {
          ...baseEvents,
          unregistered: withUnregistered
            ? {
                timestamp: '2024-04-01',
                registrar_handle: 'REG-4',
              }
            : null,
        },
      },
      global: {
        stubs: {
          SectionBlock: {
            template: '<section><slot /></section>',
            props: ['title'],
          },
          DataEventsTable: {
            template: '<div class="events-table" />',
            props: ['rows', 'header', 'publish'],
          },
        },
      },
    })

  it('vždy vykreslí DataEventsTable', () => {
    const wrapper = mountComponent(false)

    expect(wrapper.find('.events-table').exists()).toBe(true)
  })

  it('předá správné props do DataEventsTable', () => {
    const wrapper = mountComponent(false)

    const table = wrapper.findComponent(DataEventsTable)
    expect(table.props('publish')).toBe(true)
    expect(table.props('header')).toBe('Events:')
  })

  it('bez unregistered vytvoří 3 řádky', () => {
    const wrapper = mountComponent(false)

    const table = wrapper.findComponent(DataEventsTable)
    expect(table.props('rows')).toHaveLength(3)
  })

  it('s unregistered vytvoří 4 řádky', () => {
    const wrapper = mountComponent(true)

    const table = wrapper.findComponent(DataEventsTable)
    expect(table.props('rows')).toHaveLength(4)
  })
})
