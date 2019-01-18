import { shallowMount, mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App.vue', () => {
  it('renders a bootstrap component', async() => {
    const wrapper = mount(App, {
      stubs:[
        'HelloWorld',
      ],
    });

    let modal = wrapper.find('div#modal');

    //when the app initially loads, expect the modal to be hidden
    expect(modal.element.style.display).toEqual('none');

    await wrapper.vm.$nextTick();

    modal = wrapper.find('div#modal');

    //when the modal is shown onMounted, display is set to nothing (eg ''), so it's falsy
    expect(modal.element.style.display).toBeFalsy();
  });
});
