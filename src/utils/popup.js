export const deleteRecordPopup = (acceptCb) => ({
    message: '¿Quieres borrar este registro?',
    icon: 'pi pi-info-circle',
    rejectProps: {
        label: 'NO',
        severity: 'secondary',
        outlined: true,
    },
    acceptProps: {
        label: 'SI, BORRAR',
        severity: 'danger',
    },
    accept: acceptCb,
});
