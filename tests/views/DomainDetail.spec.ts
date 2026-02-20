import { mount } from '@vue/test-utils'
import DomainDetail from '@/views/DomainDetail.vue'
import ToggleSwitch from '@/components/ui/ToggleSwitch.vue'
import EventsTable from '@/components/domain/EventsTable.vue'
import StateFlagsTable from '@/components/domain/StateFlagsTable.vue'
import AdminContactsTable from '@/components/domain/AdminContactsTable.vue'

describe('DomainDetail.vue', () => {
  const domainMock = {
    expires_at: '2026-01-01',
    events: {
      registered: { timestamp: '2024-01-01', registrar_handle: 'REG-1' },
      updated: { timestamp: '2024-02-01', registrar_handle: 'REG-2' },
      transferred: { timestamp: '2024-03-01', registrar_handle: 'REG-3' },
      unregistered: null,
    },
    state_flags: {
      flags: [
        {
          name: 'flagA',
          active: true,
          description: 'Active flag',
        },
      ],
      groups: [],
    },
    owner: {
      handle: 'OWNER-1',
      name: 'John Doe',
      organization: 'Org',
      publish: { organization: true, name: true },
    },
    administrative_contacts: [],
    nsset: {
      handle: 'NSSET-1',
      registrar: 'REG',
      dns: [],
    },
    keyset: {
      handle: 'KEYSET-1',
      registrar: 'REG',
      dns_keys: [],
    },
    fqdn: 'FQDN',
    sponsoring_registrar: 'Sponsoring Registrar',
  }

  const mountComponent = () =>
    mount(DomainDetail, {
      props: {
        domain: domainMock,
      },
      global: {
        stubs: {
          ToggleSwitch: ToggleSwitch, // reálný v-model
          AuthInfoTable: true,
          EventsTable: true,
          StateFlagsTable: true,
          OwnerTable: true,
          AdminContactsTable: true,
          NssetTable: true,
          KeysetTable: true,
        },
      },
    })

  it('vykreslí název domény', () => {
    const wrapper = mountComponent()

    expect(wrapper.find('h2.domain-name').text()).toBe('neviditelna-univerzita.cz')
  })

  it('má výchozí isVerbose = false', () => {
    const wrapper = mountComponent()

    const eventsTable = wrapper.findComponent(EventsTable)
    expect(eventsTable.exists())
  })

  it('po přepnutí ToggleSwitch nastaví isVerbose = true', async () => {
    const wrapper = mountComponent()

    const toggle = wrapper.findComponent(ToggleSwitch)
    const input = toggle.find('input')

    ;(input.element as HTMLInputElement).checked = true
    await input.trigger('change')

    const eventsTable = wrapper.findComponent(EventsTable)
    const flagsTable = wrapper.findComponent(StateFlagsTable)
    const adminTable = wrapper.findComponent(AdminContactsTable)

    expect(eventsTable.exists())
    expect(flagsTable.props('isVerbose')).toBe(true)
    expect(adminTable.props('isVerbose')).toBe(true)
  })
})
