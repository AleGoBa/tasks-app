<template>
    <BaseModal
        v-model:display="display"
        :style="{ width: '30vw' }"
        form-id="tasks_form_modal"
        :loading
        :header
        :disabled
    >
        <FormContainer id="tasks_form_modal" class="p-2 text-left w-full" @submit.prevent="submit">
            <FormFieldWrapper>
                <FormLabel title="Título" for="title" :required="true" />
                <InputText id="name" v-model="task.title" name="title" :disabled required />
            </FormFieldWrapper>
            <FormFieldWrapper>
                <FormLabel title="Marcar cómo:" for="title" :required="true" />
                <SelectButton
                    v-model="task.is_completed"
                    :options="taskStatus"
                    option-label="label"
                    option-value="value"
                    class="[&>*]:grow"
                    :disabled
                />
            </FormFieldWrapper>
            <FormFieldWrapper>
                <FormLabel title="Fecha" for="due_date" :required="true" />
                <StringCalendar
                    id="due_date"
                    v-model="task.due_date"
                    :formatter="toDatabaseDateFormat"
                    name="due_date"
                    :disabled
                    required
                />
            </FormFieldWrapper>
            <FormFieldWrapper>
                <FormLabel title="Comentarios" for="comments" />
                <Textarea id="comments" v-model="task.comments" name="comments" :disabled />
            </FormFieldWrapper>
            <FormFieldWrapper>
                <FormLabel title="Descripción" for="description" />
                <Textarea
                    id="description"
                    v-model="task.description"
                    name="description"
                    :disabled
                />
            </FormFieldWrapper>
            <FormFieldWrapper>
                <FormLabel title="Tags" for="tags" />
                <TagsInput id="tags" v-model:tags="task.tags" name="tags" :disabled />
            </FormFieldWrapper>
        </FormContainer>
    </BaseModal>
</template>

<script setup>
    import { ref } from 'vue';
    import { useToast } from 'primevue/usetoast';
    import { getTask, storeTask, updateTask } from '../../../services/tasks.js';
    import BaseModal from '../../ui/modal/BaseModal.vue';
    import FormFieldWrapper from '../../ui/form/FormFieldWrapper.vue';
    import FormLabel from '../../ui/form/FormLabel.vue';
    import FormContainer from '../../ui/form/FormContainer.vue';
    import { customErrorMessage, customSuccessMessage } from '../../../utils/toastMessages.js';
    import { taskToken } from '../../../utils/consts.js';
    import StringCalendar from '../../ui/dates/StringCalendar.vue';
    import { toDatabaseDateFormat } from '../../../utils/dateFormat.js';
    import TagsInput from '../../ui/tags/TagsInput.vue';

    const defaultValues = {
        token: taskToken,
        title: null,
        comments: null,
        is_completed: false,
        description: null,
        due_date: null,
        tags: [],
    };
    const toast = useToast();
    const loading = ref(true);
    const display = ref(false);
    const disabled = ref(false);
    const task = ref({ ...defaultValues });
    const header = ref('Nueva Tarea');
    const taskStatus = [
        { label: 'Pendiente', value: false },
        { label: 'Completado', value: true },
    ];
    let action = (data) => storeTask(data);

    /**
     * Cleans and parses a comma-separated string into an array of tags.
     *
     * - Trims whitespace from the input string.
     * - Splits the string by commas.
     * - Trims each individual tag.
     * - Filters out any empty tags.
     *
     * @param {string} input - A comma-separated string of tags.
     * @returns {string[]} An array of cleaned, non-empty tags.
     *
     * @example
     * cleanTags('  task1,  task2 , ,task3  ')
     * // Returns: ['task1', 'task2', 'task3']
     */
    const cleanTags = (input) => {
        return input?.trim()
            ? input
                  .split(',')
                  .map((tag) => tag.trim())
                  .filter((tag) => tag !== '')
            : [];
    };

    const emit = defineEmits(['done']);

    const beforeOpen = async (props) => {
        setDefaults();
        if (props?.id) {
            action = (data) => updateTask(props.id, data);
            disabled.value = props?.readOnly || false;
            header.value = disabled.value ? 'Detalles' : 'Editar Tarea';
            let [data] = await getTask(props.id);
            task.value = {
                ...data,
                is_completed: data.is_completed === '1',
                tags: cleanTags(data?.tags),
            };
        } else {
            task.value.is_completed = props?.is_completed || false;
        }
        loading.value = false;
    };

    const setDefaults = () => {
        loading.value = true;
        disabled.value = false;
        task.value = { ...defaultValues };
        display.value = true;
        header.value = 'Nueva Tarea';
        action = (data) => storeTask(data);
    };

    const getFormattedTaskData = () => {
        return {
            ...task.value,
            is_completed: task.value.is_completed ? 1 : 0,
            tags: task.value.tags.join(', '),
        };
    };

    const submit = async () => {
        try {
            loading.value = true;
            const data = await action(getFormattedTaskData());
            if (data?.detail?.includes('success')) {
                toast.add(customSuccessMessage('Tarea creada correctamente.'));
                emit('done');
                display.value = false;
            } else {
                toast.add(customErrorMessage(data.detail));
            }
            loading.value = false;
        } catch {
            toast.add(customErrorMessage('Hubo un error al crear la tarea'));
        }
    };

    defineExpose({ beforeOpen });
</script>
