import api from '../services/api.js';

const moduleURI = 'tasks';

export function getTasks(data, options = {}) {
    return api.get(moduleURI, data, options);
}

export function getTask(taskId, data, options = {}) {
    return api.get(`${moduleURI}/${taskId}`, data, options);
}

export function storeTask(data, options = {}) {
    return api.post(moduleURI, data, options);
}

export function updateTask(taskId, data, options = {}) {
    return api.put(`${moduleURI}/${taskId}`, data, options);
}

export function deleteTask(taskId, data, options = {}) {
    return api.delete(`${moduleURI}/${taskId}`, data, options);
}
