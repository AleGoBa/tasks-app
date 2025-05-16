import ky from 'ky';
import getEnv from '../../utils/getEnv.js';
import { taskToken } from '../../utils/consts.js';

export default ky.create({
    prefixUrl: getEnv('VITE_API_BASE_URL'),
    searchParams: {
        token: taskToken,
    },
    headers: {
        Authorization: `Bearer ${getEnv('VITE_API_TOKEN')}`,
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
    },
});
