<template>
    <div
        class="bg-secondary-default dark:bg-secondary-900 z-50 dark:text-white h-screen flex flex-col px-4 pb-6 pt-3 fixed inset-0 md:relative md:inset-auto"
    >
        <section class="flex items-center">
            <img alt="logo" :src="Isotype" class="shrink-0 grow h-8 object-contain object-center" />
            <slot name="closeMenuButton" />
        </section>
        <Divider />
        <Button class="shrink-0">
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <p class="grow text-start font-bold">Notificaciones</p>
            <Badge value="2" size="medium" />
        </Button>
        <Divider />
        <AppLayoutMenuList class="shrink-0" />
        <Divider />
        <AuthBriefCard class="shrink-0" />
    </div>
</template>
<script setup>
    import AppLayoutMenuList from '../../layout/app/AppLayoutMenuList.vue';
    import AuthBriefCard from '../../../ui/auth/AuthBriefCard.vue';
    import Isotype from '../../../../assets/images/isotype.png';
</script>
