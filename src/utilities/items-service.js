import * as itemsAPI from './items-api';

export async function create(item) {
    return itemsAPI.create(item);
}
export async function deleteItem(itemId) {
    return itemsAPI.deleteItem(itemId);
}