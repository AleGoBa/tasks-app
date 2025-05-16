<template>
    <PopoverMenu :options="options">
        <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
    </PopoverMenu>
</template>
<script setup>
    import PopoverMenu from '../popovers/PopoverMenu.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const options = [
        {
            label: 'Perfil',
            icon: 'fa-solid fa-address-card',
        },
        {
            label: 'Cerrar Sesión',
            icon: 'fa-solid fa-arrow-right-from-bracket',
        },
    ];
</script>
