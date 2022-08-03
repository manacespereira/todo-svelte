<script lang="ts">
	import { addTodo } from '../stores/todoStore';

	let title: string;

	function handleSubmit() {
		if (!title?.trim()) {
			title = '';
			alert('Title is required');
			return;
		}

		addTodo({
			title,
			completed: false
		});

		title = '';
	}
</script>

<form class="flex flex-col space-y-2" on:submit|preventDefault={handleSubmit}>
	<label for="title" class="text-lg uppercase font-bold">New todo</label>
	<input
		type="text"
		name="title"
		bind:value={title}
		placeholder="Todo title here..."
		class="rounded-lg px-2 py-3"
	/>
	<button class="py-3 bg-gray-300 rounded-lg uppercase hover:bg-gray-200" type="submit">Save</button
	>
</form>
