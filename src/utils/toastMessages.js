export const customErrorMessage = (
    message = 'Algo salió mal, intente de nuevo.',
    summary = 'Error'
) => ({
    severity: 'error',
    summary: summary,
    detail: message,
    life: 5000,
});

export const customSuccessMessage = (
    message = 'Acción realizada con éxito',
    summary = 'Éxito'
) => ({
    severity: 'success',
    summary: summary,
    detail: message,
    life: 5000,
});
