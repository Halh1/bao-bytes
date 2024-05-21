import * as itemsAPI from './items-api';

export async function create(item) {
    return itemsAPI.create(item);
}
export async function deleteItem(itemId) {
    return itemsAPI.deleteItem(itemId);
}

export async function getItems(userId) {
    return itemsAPI.index(userId);
}
export async function getPantry(userId) {
    return itemsAPI.pantryIndex(userId);
}