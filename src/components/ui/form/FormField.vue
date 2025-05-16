<template>
    <FormFieldWrapper>
        <FormLabel :title="label" :for="id" :required="required" />
        <slot />
    </FormFieldWrapper>
</template>
<script setup>
    import FormFieldWrapper from '@/app/components/form/FormFieldWrapper.vue';
    import FormLabel from '@/app/components/form/FormLabel.vue';

    defineProps({
        label: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
            default: false,
        },
    });
</script>
