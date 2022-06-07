<script lang="ts">
	import { setContext, onMount } from "svelte";
	import todos from "../stores/todos";
	import { todosCount, todosCompletedCount } from "../stores/todos";
	import type { ITodoStore, ITodo } from "../utils/todoTypes";

	setContext("todosReadonly", {
		getTodos: $todos,
		getTodosCount: $todosCount,
		getTodosCompletedCount: $todosCompletedCount
	});
	setContext<ITodoStore>("todosWritable", todos);

	onMount(() => {
		if(localStorage.getItem("todos") !== null) {
			const localTodos: ITodo[] = JSON.parse(localStorage.getItem("todos"));

			for(const lt of localTodos) {
				todos.add({
					caption: lt.caption,
					description: lt.description,
					completed: lt.completed,
					completedAt: lt.completedAt
				});
			}
		}
	});

	window.addEventListener("beforeunload", (event) => {
		localStorage.setItem("todos", JSON.stringify($todos));
	});
</script>

<slot />