<script lang="ts">
	import type { TTodoItem } from '../types';
	import TodoItem from './TodoItem.svelte';

	export let todos: TTodoItem[];
</script>

{#each todos as todo}
	<TodoItem {todo} />
{/each}
