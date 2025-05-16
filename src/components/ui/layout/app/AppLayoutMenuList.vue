<template>
    <section
        class="flex flex-col justify-start gap-8 overflow-y-auto grow no-scrollbar hover:scrollbar"
    >
        <template v-for="item in menuItems" :key="`${item.label}-menu`">
            <AppLayoutMenuButton class="shrink-0" :to="item.route" :icon="item.icon">
                {{ item.label }}
            </AppLayoutMenuButton>
        </template>
    </section>
</template>
<script setup>
    import AppLayoutMenuButton from './AppLayoutMenuButton.vue';
    import menuItems from './menuItems.js';
</script>
