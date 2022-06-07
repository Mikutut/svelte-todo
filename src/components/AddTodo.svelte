<script lang="ts">
	import { getContext } from "svelte";
	import type { ITodoStore, ITodoProps } from "../utils/todoTypes";
	import { fade } from "svelte/transition";

	const todos = getContext<ITodoStore>("todosWritable");
	let todoTitle: string;
	let todoDescription: string;
	let showEmptyTodoTitle: boolean = false;
	let showTodoAdded: boolean = false;

	const addTodo = () => {
		if(todoTitle === "") {
			showEmptyTodoTitle = true;
			setTimeout(() => showEmptyTodoTitle = false, 3000);
		} else {
			const todo: ITodoProps = {
				caption: todoTitle,
				description: (todoDescription && todoDescription.length > 0) ? todoDescription : null
			};
			
			todos.add(todo);
			todoTitle = "";
			todoDescription = null;
			showTodoAdded = true;
			setTimeout(() => showTodoAdded = false, 3000);
		}
	}
</script>

<div id="add-todo">
	{#if showEmptyTodoTitle}
		<div id="add-todo-title-empty" class="add-todo-toast" transition:fade="{{ duration: 500 }}">
			Todo title cannot be empty!
		</div>
	{/if}
	{#if showTodoAdded}
		<div id="add-todo-added" class="add-todo-toast" transition:fade="{{ duration: 500 }}">
			Todo added!
		</div>
	{/if}
	<div id="add-todo-title-container">
		<label for="add-todo-title">Title</label>
		<input type="text" id="add-todo-title" bind:value={todoTitle} />
	</div>
	<div id="add-todo-description-container">
		<label for="add-todo-description">Description</label>
		<textarea id="add-todo-description" bind:value={todoDescription} />
	</div>
	<button
		on:click={() => addTodo()}
	>
		<span>Add</span>
	</button>
</div>

<style lang="scss">
	@import "../styles/Button.scss";

	#add-todo {
		min-width: 50%;
		margin-bottom: 2rem;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		color: white;
		font-size: 1.2rem;
		padding: 0.5rem;

		& input, & textarea {
			background-color: inherit;
			color: white;
			border: 1px solid white;
			border-radius: 8px;
			padding: 0.25rem;
			font-size: inherit;
		}
		& > .add-todo-toast {
			width: 100%;
			padding: 0.25rem;
			border-radius: 8px;
			margin: 0.2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 1.2rem;
		}
		& button {
			@include button(1.2rem);
			margin-top: 0.5rem;
		}
	}
	#add-todo-added {
		background-color: limegreen;
	}
	#add-todo-title-empty {
		background-color: red;
	}
	#add-todo-title-container {
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		margin: 0.5rem;
		width: 100%;

		& > input {
			margin-left: 0.5rem;
			flex: 1 1;
		}
	}
	#add-todo-description-container {
		width: 100%;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		margin: 0.25rem;

		& > textarea {
			margin-top: 0.2rem;
			resize: none;
			width: 100%;
			height: 200px;
		}
	}

	@media screen and (max-width: 768px) {
		#add-todo-title-container {
			flex-flow: column nowrap;
		}
	}
</style>