import sendRequest from './send-request';
const BASE_URL = '/api/items';

export async function create(newItem) {
    return sendRequest(BASE_URL, 'POST', newItem);
}
export async function deleteItem(itemId) {
    return sendRequest( `${BASE_URL}/${itemId}`, 'DELETE'); 
}
export async function pantryIndex(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}/pantry`);
}
export async function index(userId) {
    return sendRequest(`${BASE_URL}/user/${userId}`);
}
