import { shallowMount, createLocalVue } from '@vue/test-utils';
import Todo from '@/views/Todo.vue';
import BootstrapVue from 'bootstrap-vue';
import { todoService } from '@/services/todo.service';

const localVue = createLocalVue();
localVue.use(BootstrapVue);

const liste = ["Mock data", "Mock data 2"];


describe('test af rediger todo', () => {




  it('udskriv html', () => {
    spyOn(todoService, 'hentListen').and.returnValue(liste);
    const wrapper = shallowMount(Todo, {
      localVue,
    });

    console.log(wrapper.vm.$data.liste);
  });
});
