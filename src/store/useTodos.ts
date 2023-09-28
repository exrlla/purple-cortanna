import { computed, reactive } from "vue";
import  { type Todo, TodoStatus } from "../types.ts"

interface TodoStore {
    [TodoStatus.Pending]: Todo[];
    [TodoStatus.InProgress]: Todo[];
    [TodoStatus.Completed]: Todo[];
}

const defaultVal = {
    [TodoStatus.Pending]: [
        {
            id: 1,
            title: "Learn Vue 3",
            description: "Learn Vue 3 in an hour",
            status: TodoStatus.Pending,
        },
    ],
    [TodoStatus.InProgress]: [],
    [TodoStatus.Completed]: [],
}
const todoStore = reactive<TodoStore>(defaultVal);

export default () => {
    const getTodosByStatus = (TodoStatus: TodoStatus) => {
        return computed(() => todoStore[TodoStatus]);
    };

    return { getTodosByStatus};
};