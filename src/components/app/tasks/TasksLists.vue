<template>
    <div class="flex flex-col gap-12 w-full">
        <TaskList
            title="Pendientes"
            :tasks="tasks.pending"
            :loading
            :is-completed="false"
            @reload-data="loadData"
        >
            <template #indicator>
                <div class="rounded-full bg-secondary-400 h-4 w-4" />
            </template>
        </TaskList>
        <TaskList
            title="Completadas"
            :tasks="tasks.completed"
            :loading
            :collapsed="true"
            :is-completed="true"
            @reload-data="loadData"
        >
            <template #indicator>
                <div class="rounded-full bg-green-400 h-4 w-4" />
            </template>
        </TaskList>
    </div>
</template>
<script setup>
    import { ref } from 'vue';
    import { getTasks } from '../../../services/tasks.js';
    import TaskList from './TaskList.vue';

    const tasks = ref({
        pending: [],
        completed: [],
    });
    const loading = ref(true);

    const groupTasks = (data) => {
        return Object.groupBy(data, ({ is_completed }) => (is_completed ? 'completed' : 'pending'));
    };

    const loadData = async () => {
        loading.value = true;
        const data = await getTasks();
        const { pending, completed } = groupTasks(data);
        tasks.value.pending = pending || [];
        tasks.value.completed = completed || [];
        loading.value = false;
    };
    loadData();
</script>
