<template>
    <DatePicker
        v-model="modelCalendar"
        class="w-full"
        date-format="dd/mm/yy"
        :manual-input="false"
        show-icon
        icon-display="input"
    />
</template>
<script setup>
    import { ref, watch } from 'vue';

    const model = defineModel({ type: [Array, String] });
    const modelCalendar = ref(null);
    const { formatter } = defineProps({
        formatter: {
            type: Function,
            required: true,
        },
    });

    watch(modelCalendar, (newVal) => {
        if (Array.isArray(newVal)) {
            let stringDates = newVal.filter((e) => e).map(formatter);
            model.value = stringDates.length > 1 ? stringDates.join(' to ') : stringDates[0];
        } else if (newVal instanceof Date) {
            model.value = formatter(newVal);
        }
    });

    watch(
        () => model.value,
        (value) => {
            if (value !== null) {
                if (value.includes(' to ')) {
                    modelCalendar.value = value.split(' to ').map((e) => new Date(`${e} 00:00`));
                } else {
                    modelCalendar.value = new Date(`${value} 00:00`);
                }
            }
        },
        { immediate: true, once: true }
    );

    watch(
        () => model.value,
        (value) => {
            if (value == null) {
                modelCalendar.value = value;
            }
        },
        { immediate: true }
    );
</script>
