import { shallowMount, createLocalVue } from '@vue/test-utils';
import RedigerTodo from '@/components/RedigerTodo.vue';
import BootstrapVue from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(BootstrapVue);


describe('test af rediger todo', () => {
  it('udskriv html', () => {
      const wrapper = shallowMount(RedigerTodo, {
        localVue,
      });
  });
});
