<template>
    <section class="bg-white flex rounded-lg py-3 px-2 gap-2 items-center dark:bg-secondary-800">
        <Avatar :image="DefaultProfileImage" class="shrink-0" size="normal" shape="circle" />
        <div class="leading-none flex flex-col w-1/2 grow item-center">
            <p class="whitespace-nowrap font-bold w-full truncate">Guest User</p>
            <small
                class="whitespace-nowrap text-sm font-semibold text-secondary-400 w-full truncate"
            >
                guestuser@email.com
            </small>
        </div>
        <AuthBriefCardMenu />
    </section>
</template>
<script setup>
    import AuthBriefCardMenu from './AuthBriefCardMenu.vue';
    import DefaultProfileImage from '../../../assets/images/default_profile.png';
</script>
