<template>
    <Breadcrumb :home="home" :model="items">
        <template #item="{ item }">
            <router-link v-if="item.route" :to="item.route">
                <FontAwesomeIcon v-if="item.icon" :icon="item.icon" />
                <span v-if="item.label" class="font-semibold">{{ item.label }}</span>
            </router-link>
            <p v-else class="font-medium">
                {{ item.label }}
            </p>
        </template>
    </Breadcrumb>
</template>
<script setup>
    import { computed, ref } from 'vue';
    import { useRoute } from 'vue-router';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const route = useRoute();
    const home = ref({
        icon: 'fa-solid fa-house',
        route: { name: 'root' },
    });
    const items = computed(() => {
        let routeFullPath = route.fullPath.split('/');
        routeFullPath.splice(0, 2);
        return routeFullPath.map((item) => ({
            label: item[0].toUpperCase() + item.slice(1),
        }));
    });
</script>
