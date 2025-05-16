<template>
    <Panel :header="title" :collapsed toggleable>
        <DataTable
            ref="list"
            v-model:filters="filters"
            :value="tasks"
            table-style="min-width: 50rem"
            class="w-full"
            :loading
            removable-sort
            data-key="id"
            filter-display="row"
        >
            <template #empty> No se encontraron resultados </template>
            <template #header>
                <section class="flex flex-wrap items-center gap-2">
                    <slot name="indicator" />
                    <h1 class="grow font-semibold">
                        {{ title }}
                        <Badge severity="secondary" :value="tasks.length" />
                    </h1>
                    <ButtonGroup>
                        <Button severity="secondary" @click="$emit('reloadData')">
                            <i class="pi pi-sync" />
                            <span class="hidden md:inline">Recargar</span>
                        </Button>
                        <Button severity="secondary" @click="clearFilters">
                            <i class="pi pi-filter-slash" />
                            <span class="hidden md:inline">Limpiar filtros</span>
                        </Button>
                        <Button severity="secondary" @click="list.exportCSV()">
                            <i class="pi pi-file-export" />
                            <span class="hidden md:inline">Exportar</span>
                        </Button>
                        <Button @click="modal.beforeOpen({ is_completed: isCompleted })">
                            <i class="pi pi-plus" />
                            <span class="hidden md:inline">Agregar</span>
                        </Button>
                    </ButtonGroup>
                </section>
            </template>
            <Column
                v-for="col in columns"
                :key="col.field"
                :field="col.field"
                :header="col.header"
                :sortable="col.sortable || false"
            >
                <template v-if="col.isTag" #body="{ data }">
                    <Tag v-if="data[col.field]" :value="data[col.field]" />
                </template>
                <template #filter="{ filterModel, filterCallback }">
                    <InputText
                        v-model="filterModel.value"
                        type="text"
                        class="w-full"
                        :placeholder="col.placeholder"
                        @input="filterCallback()"
                    />
                </template>
            </Column>
            <Column field="actions" header="Acciones">
                <template #body="{ data }">
                    <TaskActions :modal="modal" :task="data" @deleted="$emit('reloadData')" />
                </template>
            </Column>
        </DataTable>
    </Panel>
    <TasksModal ref="modal" @done="$emit('reloadData')" />
</template>
<script setup>
    import TaskActions from './TaskActions.vue';
    import TasksModal from './TasksModal.vue';
    import { FilterMatchMode } from '@primevue/core/api';
    import { ref } from 'vue';

    const filters = ref();
    const modal = ref();
    const list = ref();
    const columns = [
        { field: 'id', header: 'ID', placeholder: 'Buscar por ID', sortable: true },
        { field: 'title', header: 'Título', placeholder: 'Buscar por título' },
        {
            field: 'due_date',
            header: 'Fecha de entrega',
            placeholder: 'Buscar por fecha',
            isTag: true,
        },
    ];

    defineEmits(['reloadData']);

    defineProps({
        tasks: {
            type: Array,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        loading: {
            type: Boolean,
            required: true,
        },
        isCompleted: {
            type: Boolean,
            required: true,
        },
        collapsed: {
            type: Boolean,
            default: false,
        },
    });

    const initFilters = () => {
        filters.value = {
            title: { value: null, matchMode: FilterMatchMode.CONTAINS },
            due_date: { value: null, matchMode: FilterMatchMode.CONTAINS },
            id: { value: null, matchMode: FilterMatchMode.CONTAINS },
        };
    };

    initFilters();

    const clearFilters = () => {
        initFilters();
    };
</script>
