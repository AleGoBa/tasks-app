<template>
    <main class="grid grid-cols-1 md:grid-cols-[17rem_1fr] h-screen justify-stretch items-start">
        <transition name="slide-menu">
            <AppLayoutMenu v-show="menuOpen" class="col-span-1 shrink-0">
                <template #closeMenuButton>
                    <Button severity="secondary" @click="menuOpen = false">
                        <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                    </Button>
                </template>
            </AppLayoutMenu>
        </transition>
        <div :class="`${menuOpen ? 'col-span-1' : 'col-span-2'}`">
            <div class="flex items-center bg-secondary-default dark:bg-secondary-900">
                <Button v-show="!menuOpen" severity="secondary" @click="menuOpen = true">
                    <FontAwesomeIcon icon="fa-solid fa-bars" />
                </Button>
                <RouteBreadcrumb class="grow" />
                <Button
                    severity="secondary"
                    class="shrink-0 rounded-full !p-1 mr-2"
                    @click="toggleDarkMode"
                >
                    <FontAwesomeIcon :icon="!darkMode ? 'fa-solid fa-moon' : 'fa-solid fa-sun'" />
                </Button>
            </div>
            <RouterView />
        </div>
        <Toast />
        <ConfirmDialog
            :pt="{
                root: '!p-6 flex flex-col gap-4',
                header: '!hidden',
                content: '!p-0 font-bold',
                footer: '!p-0 [&>*]:!grow',
            }"
        />
    </main>
</template>
<script setup>
    import { ref } from 'vue';
    import AppLayoutMenu from '../components/ui/layout/app/AppLayoutMenu.vue';
    import RouteBreadcrumb from '../components/ui/breadcrumbs/RouteBreadcrumb.vue';
    import useDarkMode from '../composables/useDarkMode.js';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    const { darkMode, toggleDarkMode } = useDarkMode();

    const menuOpen = ref(false);
</script>
<style scoped>
    .slide-menu-enter-active,
    .slide-menu-leave-active {
        transition: all 0.15s ease;
    }
    .slide-menu-enter-from {
        transform: translateX(-100%);
        opacity: 0;
    }
    .slide-menu-enter-to {
        transform: translateX(0);
        opacity: 1;
    }
    .slide-menu-leave-from {
        transform: translateX(0);
        position: absolute;
        opacity: 1;
    }
    .slide-menu-leave-to {
        position: absolute;
        transform: translateX(-100%);
        opacity: 0;
    }
</style>
