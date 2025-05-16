import ky from '../config/ky/ky.js';
import toFormEncoded from '../utils/toFormEncoded.js';

const handleRequest = async (method, uri, data, options) => {
    try {
        return await ky[method](uri, {
            ...(data ? { body: toFormEncoded(data) } : {}),
            ...options,
        }).json();
    } catch (error) {
        if (error.response?.json) {
            throw await error.response.json();
        } else {
            throw error;
        }
    }
};

export default {
    get(url, data, options = {}) {
        return handleRequest('get', url, data, options);
    },
    post(url, data, options = {}) {
        return handleRequest('post', url, data, options);
    },
    put(url, data, options = {}) {
        return handleRequest('put', url, data, options);
    },
    delete(url, data, options = {}) {
        return handleRequest('delete', url, data, options);
    },
};
