<template>
    <div>
        <PopoverMenu :options="options">
            <FontAwesomeIcon icon="fa-ellipsis-vertical" />
        </PopoverMenu>
    </div>
</template>
<script setup>
    import { useToast } from 'primevue/usetoast';
    import { useConfirm } from 'primevue/useconfirm';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import PopoverMenu from '../../ui/popovers/PopoverMenu.vue';
    import { deleteRecordPopup } from '../../../utils/popup.js';
    import { customSuccessMessage, customErrorMessage } from '../../../utils/toastMessages.js';
    import { deleteTask } from '../../../services/tasks.js';

    const emit = defineEmits(['deleted']);
    const confirm = useConfirm();
    const { task, modal } = defineProps({
        task: {
            type: Object,
            required: true,
        },
        modal: {
            type: Object,
            default: () => {},
        },
    });
    const toast = useToast();

    const beforeDeleteRecord = () => {
        confirm.require(deleteRecordPopup(deleteRecord));
    };
    const deleteRecord = async () => {
        try {
            await deleteTask(task.id);
            toast.add(customSuccessMessage('Tarea eliminada correctamente.'));
            emit('deleted');
        } catch {
            toast.add(customErrorMessage('Hubo un error al eliminar la tarea'));
        }
    };

    const options = [
        {
            label: 'Ver detalles',
            icon: 'fa-regular fa-eye',
            action: () => modal.beforeOpen({ id: task.id, readOnly: true }),
        },
        {
            label: 'Editar',
            icon: 'fa-regular fa-pen-to-square',
            action: () => modal.beforeOpen({ id: task.id }),
        },
        {
            label: 'Eliminar',
            icon: 'fa-regular fa-trash-can',
            action: () => beforeDeleteRecord(),
        },
    ];
</script>
