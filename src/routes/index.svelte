<script lang="ts">
	import { todos } from '../stores/todoStore';
	import TodoList from '../components/TodoList.svelte';
	import TodoForm from '../components/TodoForm.svelte';
</script>

<h1 class="text-4xl font-bold text-white text-center">My todos</h1>

<TodoForm />
<hr />
<TodoList todos={$todos} />
