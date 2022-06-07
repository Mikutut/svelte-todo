<script lang="ts">
	import { fade } from "svelte/transition";
	import { faCheck, faTrash, faRotateLeft, faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
	import { Icon } from "svelte-awesome";
	import type { ITodo } from "../utils/todoTypes";

	const formatDate = (timestamp: string) => {
		const date = new Date(parseInt(timestamp) * 1000);

		const day = (date.getDate() >= 10) ? date.getDate().toString() : `0${date.getDate()}`;
		const month = (date.getMonth()+1 >= 10) ? (date.getMonth()+1).toString() : `0${date.getMonth()+1}`;
		const year = date.getFullYear();
		const hours = (date.getHours() >= 10) ? date.getHours().toString() : `0${date.getHours()}`;
		const minutes = (date.getMinutes() >= 10) ? date.getMinutes().toString() : `0${date.getMinutes()}`;

		return `${day}.${month}.${year} ${hours}:${minutes}`;
	}

	export let todo: ITodo;
	export let onRemove: () => void;
	export let onComplete: (state: boolean) => void;

	const todoExtendable = todo.description !== null;
	let todoExtended = false;
	let onExtend = () => todoExtended = !todoExtended;
</script>

<div 
	class="todo"
	transition:fade="{{ duration: 200 }}"
>
	<span class="todo-title">{ todo.caption }</span>
	<span class="todo-added-at">Added on: { formatDate(todo.addedAt) }</span>
	{#if todo.completed}
		<span class="todo-completed-at">Completed on: { formatDate(todo.completedAt) }</span>
	{/if}
	{#if todoExtendable && todoExtended}
		<p class="todo-description">{ todo.description }</p>
	{/if}
	<div class="todo-buttons">
		<button 
			class="{`todo-button ${(!todo.completed) ? "todo-complete" : "todo-incomplete"}`}"
			on:click="{() => onComplete(!todo.completed)}"
		>
			<Icon 
				data="{ (todo.completed) ? faRotateLeft : faCheck}"
				scale="{1.5}"
			/>
		</button>
		{#if todoExtendable}
			<button
				class="todo-button todo-extend"
				on:click={() => onExtend()}
			>
				<Icon 
					data="{ (todoExtended) ? faAngleUp : faAngleDown }"
					scale="{1.5}"
				/>
			</button>
		{/if}
		<button 
			class="todo-button todo-remove"
			on:click="{() => onRemove()}"
		>
			<Icon 
				data="{ faTrash }"
				scale="{1.5}"
			/>
		</button>
	</div>
</div>

<style lang="scss">
	:global(.todo) {
		min-width: 350px;
		border-radius: 8px;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		background-color: #001827;
		padding: 0.25rem;
		margin: 0.5rem;
	}
	:global(.todo-title) {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		padding: 0.2rem;
	}
	:global(.todo-added-at, .todo-completed-at) {
		font-size: 0.8rem;
		color: white;
		font-weight: 100;
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 0.2rem;
		padding: 0.1rem;
	}
	:global(.todo-description) {
		width: 100%;
		padding: 0.25rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
		font-size: 1rem;
		color: white;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	:global(.todo-buttons) {
		width: 100%;
		display: flex;
		flex-flow: row nowrap;
		align-items: center;
		justify-content: center;
		margin-top: 0.5rem;
	}
	:global(.todo-button) {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 0.25rem;
		margin-right: 0.25rem;
		font-size: 1.2rem;
		background-color: transparent;
		color: white;
		transition: background-color .2s;
		padding: 0.2rem;
		border-radius: 8px;

		&:hover {
			cursor: pointer;

			&.todo-incomplete {
				background-color: darkorange;
			}
			&.todo-complete {
				background-color: green;
			}
			&.todo-remove {
				background-color: red;
			}
			&.todo-extend {
				background-color: darkcyan;
			}
		}
	}

	@media screen and (max-width: 768px) {
		:global(.todo) {
			width: 100%;
			margin: 0.2rem;
			border-radius: 0;
			flex-flow: column nowrap;
			padding: 0;
		}
		:global(.todo-buttons) {
			padding: 0;
		}
		:global(.todo-button) {
			margin: 0;
			border-radius: 0;

			&.todo-complete {
				background-color: green;
			}
			&.todo-remove {
				background-color: red;
			}
			&.todo-incomplete {
				background-color: darkorange;
			}
			&.todo-extend {
				background-color: darkcyan;
			}
		}
	}
</style>