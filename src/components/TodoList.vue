<template>
  <div class="todo-list">
    <div class="container">
      <!-- Filters -->
      <div class="filters">
        <button 
          :class="{ active: currentFilter === 'all' }" 
          @click="currentFilter = 'all'"
        >
          All
        </button>
        <button 
          :class="{ active: currentFilter === 'active' }" 
          @click="currentFilter = 'active'"
        >
          Active
        </button>
        <button 
          :class="{ active: currentFilter === 'completed' }" 
          @click="currentFilter = 'completed'"
        >
          Completed
        </button>
      </div>

      <!-- Empty Message -->
      <div v-if="filteredTodos.length === 0" class="empty-message">
        No tasks available. Please add some tasks.
      </div>

      <!-- Todo List -->
      <ul v-else class="list-group">
        <li
          v-for="todo in filteredTodos"
          :key="todo.id"
          class="list-group-item d-flex justify-content-between align-items-center todo-item"
        >
          <div class="d-flex align-items-center">
            <input
              type="checkbox"
              :checked="todo.completed"
              @change="toggleCompletion(todo.id)"
              class="form-check-input me-2"
            />
            <input
              v-if="todo.isEditing"
              v-model="todo.editText"
              @keyup.enter="updateTodo(todo)"
              @blur="updateTodo(todo)"
              class="form-control me-2 edit-input"
              placeholder="Edit task"
            />
            <span 
              v-else 
              :class="{ completed: todo.completed }" 
              @dblclick="editTodo(todo)"
            >
              {{ todo.text }}
            </span>
          </div>
          <div class="btn-group">
            <button 
              v-if="!todo.isEditing"
              @click="editTodo(todo)" 
              class="btn btn-icon"
              aria-label="Edit task"
            >
              <img class="icon" src="https://icons.veryicon.com/png/o/miscellaneous/linear-small-icon/edit-246.png" />
            </button>
            <button 
              @click="removeTodo(todo.id)" 
              class="btn btn-icon"
              aria-label="Remove task"
            >
              <img class="icon" src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store/types';
import { Todo as BaseTodo } from '@/types/Todo';

interface Todo extends BaseTodo {
  isEditing?: boolean;
  editText?: string;
}

export default defineComponent({
  name: 'TodoList',
  setup() {
    const store = useStore<State>();
    const todos = computed(() => store.getters.allTodos as Todo[]);
    const currentFilter = ref<'all' | 'active' | 'completed'>('all');

    const filteredTodos = computed(() => {
      switch (currentFilter.value) {
        case 'completed':
          return todos.value.filter(todo => todo.completed);
        case 'active':
          return todos.value.filter(todo => !todo.completed);
        default:
          return todos.value;
      }
    });

    const editTodo = (todo: Todo) => {
      todo.isEditing = true;
      todo.editText = todo.text;
    };

    const updateTodo = (todo: Todo) => {
      if (todo.editText?.trim()) {
        todo.text = todo.editText;
        todo.isEditing = false;
        store.dispatch('updateTodoAsync', todo);
      } else {
        todo.isEditing = false; // Cancel editing if text is empty
      }
    };

    const toggleCompletion = (id: number) => {
      store.dispatch('toggleTodoCompletionAsync', id);
    };

    const removeTodo = (id: number) => {
      store.dispatch('removeTodoAsync', id);
    };

    return {
      todos,
      filteredTodos,
      currentFilter,
      editTodo,
      updateTodo,
      toggleCompletion,
      removeTodo
    };
  }
});
</script>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 0 auto;
}

.container {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.filters {
  margin-bottom: 20px;
  text-align: center;
}

.filters button {
  background: #20e28c;
  border: 1px solid #dee2e6;
  color: white;
  margin: 0 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.filters button.active {
  background-color: #00ad60;
  color: white;
}

.filters button:hover {
  background-color: #5ef1b0;
}

.empty-message {
  text-align: center;
  color: #6c757d;
  font-size: 1.2em;
}

.list-group {
  list-style: none;
  padding: 0;
  margin: 0;
}

.list-group-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 4px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.list-group-item:hover {
  background-color: #f1f1f1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.todo-item .form-check-input {
  margin-right: 10px;
}

.todo-item .completed {
  text-decoration: line-through;
  color: #6c757d;
}

.edit-input {
  flex: 1;
  margin-right: 10px;
}

.btn-group {
  display: flex;
}

.btn-icon {
  background: none;
  border: none;
  cursor: pointer;
}

.btn-icon:hover {
  opacity: 0.8;
}

.icon {
  width: 30px;
  height: 30px;
}
</style>
