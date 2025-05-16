<template>
    <div>
        <Button severity="secondary" @click="toggle">
            <slot />
        </Button>
        <Popover ref="op">
            <template #container>
                <div class="">
                    <p class="px-3 py-2 text-sm font-bold text-slate-400 dark:text-secondary-300">
                        Opciones
                    </p>
                    <ul class="w-fit">
                        <template v-if="options.length">
                            <li
                                v-for="option in options"
                                :key="option.label"
                                class="cursor-pointer flex items-center my-1 gap-2 duration-200 px-4 py-1 font-semibold hover:bg-secondary-200 dark:hover:bg-secondary-700 active:bg-secondary-300 dark:active:bg-secondary-600"
                                @click="handleOptionCallback(option, $event)"
                            >
                                <FontAwesomeIcon v-if="option.icon" :icon="option.icon" />
                                <span>{{ option.label }}</span>
                            </li>
                        </template>
                    </ul>
                </div>
            </template>
        </Popover>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const op = ref();
    const router = useRouter();

    defineProps({
        options: {
            type: Array,
            default: () => [],
        },
    });

    const toggle = (event) => {
        op.value.toggle(event);
    };

    const handleOptionCallback = (option, event) => {
        option?.action?.(event);
        option?.redirect?.(router);
    };
</script>
