import { Todo } from '@/types/Todo';

export interface State {
  todos: Todo[];
  nextTodoId: number;
}

export type Getters = {
  completedTodos: (state: State) => Todo[];
  activeTodos: (state: State) => Todo[];
};

export type Mutations = {
  ADD_TODO: (state: State, todo: Todo) => void;
  UPDATE_TODO: (state: State, updatedTodo: Todo) => void;
  REMOVE_TODO: (state: State, id: number) => void;
  TOGGLE_TODO_COMPLETION: (state: State, id: number) => void;
};

export type Actions = {
  addTodoAsync: (context: { commit: (mutation: keyof Mutations, payload: any) => void }, todo: Todo) => void;
  updateTodoAsync: (context: { commit: (mutation: keyof Mutations, payload: any) => void }, updatedTodo: Todo) => void;
  removeTodoAsync: (context: { commit: (mutation: keyof Mutations, payload: any) => void }, id: number) => void;
  toggleTodoCompletionAsync: (context: { commit: (mutation: keyof Mutations, payload: any) => void }, id: number) => void;
};
