// store/index.ts
import { createStore } from 'vuex';
import { State, Getters, Mutations, Actions } from './types';
import { Todo } from '@/types/Todo';

export default createStore<State>({
  state: {
    todos: [] as Todo[],
    nextTodoId: 1
  },
  getters: {
    allTodos(state): Todo[] {
      return state.todos;
    },
    completedTodos(state): Todo[] {
      return state.todos.filter(todo => todo.completed);
    },
    activeTodos(state): Todo[] {
      return state.todos.filter(todo => !todo.completed);
    }
  },
  mutations: {
    addTodo(state, text: string) {
      state.todos.push({
        id: state.nextTodoId++,
        text,
        completed: false
      });
    },
    toggleTodoCompletion(state, id: number) {
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, id: number) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    updateTodo(state, updatedTodo: Todo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos[index] = updatedTodo;
      }
    }
  },
  actions: {
    addTodoAsync({ commit }, text: string) {
      if (text.trim()) {
        commit('addTodo', text);
      }
    },
    toggleTodoCompletionAsync({ commit }, id: number) {
      commit('toggleTodoCompletion', id);
    },
    removeTodoAsync({ commit }, id: number) {
      commit('removeTodo', id);
    },
    updateTodoAsync({ commit }, updatedTodo: Todo) {
      commit('updateTodo', updatedTodo);
    }
  }
});
