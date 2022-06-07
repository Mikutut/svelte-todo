import type { Readable } from "svelte/store";

interface ITodoProps {
	caption: string;
	description: string | null;
	completed?: boolean;
	completedAt?: string;
};
interface ITodo {
	key: string;
	caption: string;
	description: string | null;
	completed: boolean;
	addedAt: string;
	completedAt: string | null;
}
interface ITodoStore extends Readable<ITodo[]> {
	add: (todoProps: ITodoProps) => void,
	remove: (todoKey: string) => void,
	reset: () => void,
	setCompleted: (todoKey: string, state: boolean) => void,
	changeCaption: (todoKey: string, newCaption: string) => void,
	changeDescription: (todoKey: string, newDescription: string | null) => void,
};

export type {
	ITodoProps,
	ITodo,
	ITodoStore
};