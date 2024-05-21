import sendRequest from './send-request';
const BASE_URL = '/api/items';

export async function create(newItem) {
    return sendRequest(BASE_URL, 'POST', newItem);
}
export async function deleteItem(itemId) {
    return sendRequest( `${BASE_URL}/${itemId}`, 'DELETE'); 
}
export async function index() {
    return sendRequest(BASE_URL);
}