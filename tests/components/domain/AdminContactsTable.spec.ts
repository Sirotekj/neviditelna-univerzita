import { mount } from '@vue/test-utils'
import AdminContactsTable from '@/components/domain/AdminContactsTable.vue'

describe('AdminContactsTable.vue', () => {
  const contactsMock = [
    {
      handle: 'CONTACT-1',
      name: 'John Doe',
      organization: 'Org A',
      publish: {
        organization: true,
        name: true,
      },
    },
    {
      handle: 'CONTACT-2',
      name: 'Jane Smith',
      organization: 'Org B',
      publish: {
        organization: false,
        name: false,
      },
    },
  ]

  const mountComponent = (isVerbose: boolean) =>
    mount(AdminContactsTable, {
      props: {
        isVerbose,
        admin_contacts: contactsMock,
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

  it('vykreslí sekci s nadpisem', () => {
    const wrapper = mountComponent(false)

    expect(wrapper.find('section').exists()).toBe(true)
  })

  it('při isVerbose = false vykreslí jednu tabulku', () => {
    const wrapper = mountComponent(false)

    expect(wrapper.findAll('.data-table')).toHaveLength(1)
  })

  it('při isVerbose = true vykreslí tabulku pro každý kontakt', () => {
    const wrapper = mountComponent(true)

    expect(wrapper.findAll('.data-table')).toHaveLength(contactsMock.length)
  })
})
