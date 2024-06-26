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
                    <strong>Name:</strong> {item.name.charAt(0).toUpperCase() + item.name.slice(1)}<br />
                    <strong>Type:</strong> {item.type}<br />
                    
                        {item.expiration ? 
                            <>
                            <strong>Expiration Date: </strong> {new Date(new Date(item.expDate).getTime() + new Date(item.expDate).getTimezoneOffset() * 60000).toDateString()}<br />
                            </>
                        : null 
                        }
                   
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
            <button onClick={() => handleDeletePantryItem(item._id)}>Delete</button>
        </li>
    );
}
