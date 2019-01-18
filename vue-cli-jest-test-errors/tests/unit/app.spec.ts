import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders a bootstrap component', () => {
    const msg = 'new message';
    const wrapper = mount(App, {
      propsData: { msg },
      stubs:[
        'HelloWorld',
      ],
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
