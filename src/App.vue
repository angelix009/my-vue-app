<template>
  <div id="app">
    <header>
      <h1>Todo List</h1>
      <nav>
        <router-link to="/">Home</router-link> | 
        <router-link to="/add">Add Todo</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #333;
  margin-top: 60px;
}

header {
  padding: 20px;
  background-color: #f4f4f4;
}

nav {
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #42b983;
  margin: 0 10px;
}

nav a.router-link-active {
  font-weight: bold;
}

main {
  padding: 20px;
}
</style>
