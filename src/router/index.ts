import { createRouter, createWebHistory } from 'vue-router';
import TodoList from '@/components/TodoList.vue';
import TodoForm from '@/components/TodoForm.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TodoList
  },
  {
    path: '/add',
    name: 'AddTodo',
    component: TodoForm
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
