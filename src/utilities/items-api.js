import sendRequest from './send-request';
const BASE_URL = '/api/items';

export async function create(newItem) {
    return sendRequest(BASE_URL, 'POST', newItem);
}
