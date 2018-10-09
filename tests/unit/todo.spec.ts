import { shallowMount, createLocalVue } from '@vue/test-utils';
import Todo from '@/views/Todo.vue';
import BootstrapVue from 'bootstrap-vue';
jest.mock('@/services/todo.service');

const localVue = createLocalVue();
localVue.use(BootstrapVue);


describe('test af rediger todo', () => {
  it('udskriv html', () => {
      const wrapper = shallowMount(Todo, {
        localVue,
      });

      console.log(wrapper.vm.$data.liste);
  });
});
