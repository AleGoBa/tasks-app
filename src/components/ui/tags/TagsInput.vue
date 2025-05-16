<template>
    <div class="p-textarea p-component flex flex-wrap gap-3">
        <Chip v-for="(tag, index) in tags" :key="`${tag}-${index}-tags`" :label="tag" />
        <InputText
            v-model="tagInput"
            type="input"
            unstyled
            class="focus:outline-none grow"
            :disabled
            @keydown.delete="removeLastTag"
            @keyup.enter.prevent="addTag"
            @keydown.enter.prevent="() => {}"
        />
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    defineProps({
        disabled: {
            type: Boolean,
            default: false,
        },
    });
    const tags = defineModel('tags', {
        type: Array,
        default: () => [],
    });
    const tagInput = ref(null);

    const addTag = () => {
        tags.value.push(tagInput.value);
        tagInput.value = null;
    };

    const removeLastTag = () => {
        if (!tagInput.value) {
            tags.value.pop();
            tags.value = [...tags.value];
        }
    };
</script>
