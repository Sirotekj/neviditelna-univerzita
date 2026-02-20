import { mount } from '@vue/test-utils'
import DataOtherTable from '@/components/ui/DataOtherTable.vue'

describe('DataOtherTable.vue', () => {
  const rows = [
    ['A', 'B'],
    [
      { value: 'C', publish: true },
      { value: 'D', publish: false },
    ],
  ]

  it('vykreslí header', () => {
    const wrapper = mount(DataOtherTable, {
      props: {
        header: 'Test header',
        rows,
        publish: false,
      },
      global: {
        stubs: {
          IconEyeOutline: true,
          IconEyeOffOutline: true,
        },
      },
    })

    expect(wrapper.find('th').text()).toBe('Test header')
  })

  it('vykreslí hodnoty buněk', () => {
    const wrapper = mount(DataOtherTable, {
      props: {
        header: 'Header',
        rows,
        publish: false,
      },
      global: {
        stubs: {
          IconEyeOutline: true,
          IconEyeOffOutline: true,
        },
      },
    })

    const text = wrapper.text()

    expect(text).toContain('A')
    expect(text).toContain('B')
    expect(text).toContain('C')
    expect(text).toContain('D')
  })

  it('nezobrazuje publish ikony, když publish = false', () => {
    const wrapper = mount(DataOtherTable, {
      props: {
        header: 'Header',
        rows,
        publish: false,
      },
      global: {
        stubs: {
          IconEyeOutline: true,
          IconEyeOffOutline: true,
        },
      },
    })

    expect(wrapper.findComponent({ name: 'IconEyeOutline' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'IconEyeOffOutline' }).exists()).toBe(false)
  })

  it('zobrazuje správné publish ikony, když publish = true', () => {
    const wrapper = mount(DataOtherTable, {
      props: {
        header: 'Header',
        rows,
        publish: true,
      },
      global: {
        stubs: {
          IconEyeOutline: true,
          IconEyeOffOutline: true,
        },
      },
    })

    expect(wrapper.findComponent({ name: 'IconEyeOutline' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'IconEyeOffOutline' }).exists()).toBe(true)
  })
})
