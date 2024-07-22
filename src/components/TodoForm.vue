<template>
  <div class="todo-form">
    <form @submit.prevent="addTodo" class="d-flex">
      <input
        v-model="newTodoText"
        placeholder="Add a new todo"
        class="form-control me-2"
      />
      <button type="submit" class="btn btn-primary">Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { State } from '@/store/types';

export default defineComponent({
  name: 'TodoForm',
  setup() {
    const store = useStore<State>();
    const newTodoText = ref('');

    const addTodo = () => {
      if (newTodoText.value.trim()) {
        store.dispatch('addTodoAsync', newTodoText.value);
        newTodoText.value = '';
      }
    };

    return {
      newTodoText,
      addTodo
    };
  }
});
</script>

<style scoped>
.todo-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.todo-form form {
  display: flex;
  align-items: center;
}

.todo-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 16px;
}

.todo-form button {
  margin-left: 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.todo-form button:hover {
  background-color: #20e28c;
}
</style>
