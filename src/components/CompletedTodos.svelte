<script lang="ts">
	import { getContext } from "svelte";
	import { derived } from "svelte/store";
	import type { ITodoStore } from "../utils/todoTypes";
	import AddTodo from "./AddTodo.svelte";
	import TodosGrid from "./TodosGrid.svelte";

	const todos = getContext<ITodoStore>("todosWritable");
	const completedTodos = derived(todos, $todos => $todos.filter(v => v.completed === true));

	const onRemove = (todoKey: string) => {
		todos.remove(todoKey);
	}
	const onComplete = (todoKey: string, state: boolean) => {
		todos.setCompleted(todoKey, state);
	}
</script>

<TodosGrid 
	todos={$completedTodos}
	onComplete={onComplete}
	onRemove={onRemove}
/>