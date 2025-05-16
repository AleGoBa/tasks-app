<template>
    <main class="px-7 flex flex-col items-start gap-6">
        <div class="w-full flex flex-col gap-2 py-6">
            <h1 class="text-2xl font-semibold grow shrink-0">Tareas</h1>
            <p class="text-gray-500 font-medium">
                Organiza y lleva el control de tus tareas fácilmente
            </p>
        </div>
        <TasksLists />
    </main>
</template>
<script setup>
    import TasksLists from '../../../components/app/tasks/TasksLists.vue';
</script>
