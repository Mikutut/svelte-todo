import type { Readable } from "svelte/store";
import { writable, derived } from "svelte/store";
import { nanoid } from "nanoid";
import type { ITodoProps, ITodo, ITodoStore } from "../utils/todoTypes";

const createTodos = (initVal: ITodo[]): ITodoStore => {
	const todosStore = writable<ITodo[]>(initVal);

	const add = (todoProps: ITodoProps) => todosStore.update(n => { 
		let newTodoKey = nanoid(10);
		while(n.find(v => v.key === newTodoKey) !== undefined)
			newTodoKey = nanoid(10);

		const newTodo: ITodo = {
			key: newTodoKey,
			caption: todoProps.caption,
			description: todoProps.description,
			completed: todoProps.completed ?? false,
			addedAt: parseInt((Date.now() / 1000).toFixed(0)).toString(),
			completedAt: (todoProps.completed !== undefined) ? parseInt((Date.now() / 1000).toFixed(0)).toString() : null
		};
		n.push(newTodo);
		return n;
	});
	const remove = (todoKey: string) => todosStore.update(n => {
		if(n.find(v => v.key === todoKey) !== undefined) {
			return n.filter(v => v.key !== todoKey);
		} else {
			console.warn("Todo with provided key not found! Removing todo from store failed!");
			return n;
		}
	}); 
	const reset = () => todosStore.set([]);
	const setCompleted = (todoKey: string, state: boolean) => todosStore.update(n => {
		if(n.find(v => v.key === todoKey) !== undefined) {
			const newN: ITodo[] = n.map(v => {
				if(v.key === todoKey) {
					v.completed = state;

					if(v.completed === true)
						v.completedAt = parseInt((Date.now() / 1000).toFixed(0), 10).toString();
					else
						v.completedAt = null;
				}
				return v;
			});
			return newN;
		} else {
			console.warn("Todo with provided key not found! Changing completion state failed!");
			return n;
		}
	});
	const changeCaption = (todoKey: string, newCaption: string) => todosStore.update(n => {
		if(n.find(v => v.key === todoKey) !== undefined) {
			return n.map(v => {
				if(v.key === todoKey)
					v.caption = newCaption;
				return v;
			});
		} else {
			console.warn("Todo with provided key not found! Changing title failed!");
			return n;
		}
	});
	const changeDescription = (todoKey: string, newDescription: string | null) => todosStore.update(n => {
		if(n.find(v => v.key === todoKey) !== undefined) {
			return n.map(v => {
				if(v.key === todoKey)
					v.description = newDescription;
				return v;
			});
		} else {
			console.warn("Todo with provided key not found! Changing description failed!");
			return n;
		}
	});

	return {
		subscribe: todosStore.subscribe,
		add,
		remove,
		reset,
		setCompleted,
		changeCaption,
		changeDescription
	};
};

const todos = createTodos([]);
const todosCount = derived(todos, $todos => $todos.length);
const todosCompletedCount = derived(todos, $todos => $todos.filter(v => v.completed === true).length);

export default todos;
export {
	todosCount,
	todosCompletedCount
};