import { mount } from '@vue/test-utils'
import DataEventsTable from '@/components/ui/DataEventsTable.vue'

// 👇 mock util funkcí
jest.mock('@/components/utils/utils', () => ({
  isIsoDateString: (value: string) => value === '2024-01-01',
  formatDate: (value: string) => `formatted-${value}`,
}))

describe('DataEventsTable.vue', () => {
  const rows = [
    ['Normal value'],
    ['2024-01-01'], // bude formátováno
  ]

  const mountTable = () =>
    mount(DataEventsTable, {
      props: {
        header: 'Events',
        publish: false,
        rows,
      },
    })

  it('vykreslí header', () => {
    const wrapper = mountTable()
    expect(wrapper.find('th').text()).toBe('Events')
  })

  it('vykreslí běžnou hodnotu bez úpravy', () => {
    const wrapper = mountTable()
    expect(wrapper.text()).toContain('Normal value')
  })

  it('použije formatDate pro ISO datum', () => {
    const wrapper = mountTable()
    expect(wrapper.text()).toContain('formatted-2024-01-01')
  })
})
