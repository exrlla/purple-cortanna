<script setup lang="ts">
import { TodoStatus } from "../types.ts";
import TodoGroup from './TodoGroup.vue'
</script>

<template>
    <div>
        <TodoGroup :status="TodoStatus.Pending"/>
        <TodoGroup :status="TodoStatus.InProgress"/>
        <TodoGroup :status="TodoStatus.Completed"/>
    </div>
</template>