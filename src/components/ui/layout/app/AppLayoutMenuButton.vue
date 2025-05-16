<template>
    <RouterLink
        class="flex h-12 items-center gap-4 rounded-lg duration-200 leading-none px-2 py-1 font-semibold hover:bg-secondary-200 dark:hover:bg-secondary-700 active:bg-secondary-300 dark:active:bg-secondary-600"
        to=""
    >
        <FontAwesomeIcon v-if="icon" :icon />
        <slot />
    </RouterLink>
</template>
<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    defineProps({
        icon: { type: String, default: '' },
    });
</script>
