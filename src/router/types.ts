import { Todo } from '@/types/Todo';

export interface State {
  todos: Todo[];
  nextTodoId: number;
}

export interface Getters {
  allTodos: Todo[];
  completedTodos: Todo[];
  activeTodos: Todo[];
}

export interface Mutations {
  addTodo: (text: string) => void;
  toggleTodoCompletion: (id: number) => void;
  removeTodo: (id: number) => void;
}

export interface Actions {
  addTodoAsync: (text: string) => void;
  toggleTodoCompletionAsync: (id: number) => void;
  removeTodoAsync: (id: number) => void;
}
