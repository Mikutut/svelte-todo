<script lang="ts">
	import type { ITodo } from "../utils/todoTypes";
	import Todo from "./Todo.svelte";
	import { fade } from "svelte/transition";

	export let todos: ITodo[];
	export let onComplete: (todoKey: string, state: boolean) => void;
	export let onRemove: (todoKey: string) => void;
</script>

{#if todos.length > 0}
	<div class="todos-grid" transition:fade="{{ duration: 200 }}">
		{#each todos as todo (todo.key)}
			<Todo 
				todo={todo}
				onComplete={(state) => onComplete(todo.key, state)}
				onRemove={() => onRemove(todo.key)}
			/>
		{/each}
	</div>
{:else}
	<div class="todos-grid-empty" transition:fade="{{ duration: 200 }}">
		<h1>No todos to show!</h1>
	</div>
{/if}

<style lang="scss">
	.todos-grid-empty {
		height: 100%;
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
		text-align: center;

		& > h1 {
			font-size: 2rem;
			color: #ff9f00;
		}
	}
	.todos-grid {
		flex: 1 1;
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: min-content;
		place-items: center;
	}

	@media screen and (max-width: 768px) {
		.todos-grid {
			grid-template-columns: 1fr;
		}
	}
</style>