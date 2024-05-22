import { useState } from 'react';
import EditItemForm from '../EditItemForm/EditItemForm';

export default function PantryList({item, handleDeletePantryItem, handleEditPantryItem}) {
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdateItem = (editedItem) => {
        handleEditPantryItem(editedItem);
        setIsEditing(false);
    };

    return (
        <li>
            {isEditing ? (
                <EditItemForm item={item} handleUpdateItem={handleUpdateItem} />
            ) : (
                <div>
                    <strong>Name:</strong> {item.name}<br />
                    <strong>Type:</strong> {item.type}<br />
                    <strong>Expiration:</strong> {item.expiration ? 'Yes' : 'No'}<br />
                    <strong>Expiration Date:</strong> {item.expDate}<br />
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
            <button onClick={() => handleDeletePantryItem(item._id)}>Delete</button>
        </li>
    );
}
