import { mount } from '@vue/test-utils';
import TodoForm from '@/components/TodoForm.vue';
import { createStore } from 'vuex';
import { State } from '@/store/types';

// Mock pour le store Vuex
const store = createStore<State>({
  state: {
    todos: [],
    nextTodoId: 1,
  },
  actions: {
    addTodoAsync: jest.fn(), 
  },
});

describe('TodoForm.vue', () => {
  it('should render the form with an input and a button', () => {
    const wrapper = mount(TodoForm, { global: { plugins: [store] } });

    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);

    const button = wrapper.find('button');
    expect(button.exists()).toBe(true);
  });
});
