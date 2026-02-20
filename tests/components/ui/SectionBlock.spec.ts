import { mount } from '@vue/test-utils'
import SectionBlock from '@/components/ui/SectionBlock.vue'

describe('SectionBlock.vue', () => {
  it('vykreslí slot', () => {
    const wrapper = mount(SectionBlock, {
      slots: {
        default: '<div class="content">Obsah</div>',
      },
    })

    expect(wrapper.find('.content').text()).toBe('Obsah')
  })
})
