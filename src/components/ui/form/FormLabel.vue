<script setup>
    const { title, required } = defineProps({
        title: {
            type: String,
            required: true,
        },
        required: {
            type: Boolean,
            default: false,
        },
    });
</script>

<template>
    <label class="font-semibold">
        {{ title }}
        <span v-if="required" class="font-bold text-red-600">*</span>
    </label>
</template>
