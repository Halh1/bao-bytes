import * as itemsAPI from './items-api';

export async function create(item, location) {
    return itemsAPI.create(item, location);
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
export async function transferItem(itemId) {
    return itemsAPI.transferItem(itemId);
}
export async function deletePantryItems(itemId, userId) {
    return itemsAPI.deletePantryItems(itemId, userId);
}
export async function editItem(item) {
    return itemsAPI.editItem(item);
}