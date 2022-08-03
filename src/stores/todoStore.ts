import type { TTodoItem } from "src/types";
import { writable } from "svelte/store";

export const todos = writable<TTodoItem[]>([])

export function addTodo(todo: TTodoItem): void {
    todos.update(curr => [...curr, todo]);
}

export function toggleTodo(title: string): void {
    todos.update(curr => {
        const todo = curr.find(t => t.title == title);
        if (!todo) return curr;

        const idx = curr.indexOf(todo);
        curr[idx].completed = !todo.completed;
        return [...curr];
    });
}