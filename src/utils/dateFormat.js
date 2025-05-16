export function toDate(date) {
    return new Date(date + ' 00:00').toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
}

export function toDatabaseDateFormat(date) {
    return new Date(date).toLocaleString('sv').split(' ')[0];
}
