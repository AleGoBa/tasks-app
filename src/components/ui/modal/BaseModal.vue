<template>
    <Dialog
        v-model:visible="display"
        modal
        :style="{ width: '50vw' }"
        :breakpoints="{ '960px': '75vw', '641px': '90vw' }"
    >
        <template #header>
            <span v-if="!loading" class="p-dialog-title" data-pc-section="title">{{ header }}</span>
        </template>
        <slot v-if="!loading" />
        <template v-if="!disabled && !loading" #footer>
            <Button class="mt-4" :form="formId" type="submit" label="Guardar cambios  " />
        </template>
        <section v-if="loading" class="w-full h-36 flex justify-center">
            <ProgressSpinner />
        </section>
    </Dialog>
</template>
<script setup>
    const display = defineModel('display', {
        type: Boolean,
        default: false,
    });
    defineProps({
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        header: {
            type: String,
            default: null,
        },
        formId: {
            type: String,
            required: true,
        },
    });
</script>
