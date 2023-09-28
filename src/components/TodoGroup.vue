<script setup lang="ts">
import { TodoStatus } from "../types.ts";
import { computed, defineProps } from "vue";
import useTodos from "../store/useTodos.ts"

interface Props {
    status: TodoStatus;
}

const props = defineProps<Props>();

const { getTodosByStatus } = useTodos();
const todoList = getTodosByStatus(props.status);

const groupLabel = computed(() => {
    switch (props.status) {
        case TodoStatus.Pending:
            return "Pending";
        case TodoStatus.InProgress:
            return "In Progress";
        case TodoStatus.Completed:
            return "Completed";
        default:
            return "All";
    }
});
</script>
<template>
    <div>
        <h3>{{ groupLabel }}</h3>
        <ul>
            <li v-for="todo in todoList" :key="todo.id">
                {{ todo.title }}
            </li>
        </ul>
    </div>
</template>