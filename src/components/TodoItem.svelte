<script lang="ts">
	import { toggleTodo } from '../stores/todoStore';
	import type { TTodoItem } from '../types';

	export let todo: TTodoItem;
</script>

<div
	class="rounded-lg py-4 shadow-lg px-4 flex justify-between"
	class:bg-gray-200={!todo.completed}
	class:bg-green-300={todo.completed}
	class:line-through={todo.completed}
>
	<span>{todo.title}</span>
	<input
		type="checkbox"
		checked={todo.completed}
		on:change={() => toggleTodo(todo.title)}
		class="w-6 shadow-lg"
	/>
</div>
