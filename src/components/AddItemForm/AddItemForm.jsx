import { useState } from 'react';

export default function AddItemForm({addItem, exp}) {
    const [newItem, setNewItem] = useState({
        name: '',
        type: 'Other',
        expiration: false,
        expDate: ''
    });

    const btnWord = exp ? 'Add Pantry Item' : 'Add Grocery Item';

    function handleChange(evt) {
        const { name, value, type, checked } = evt.target;
        setNewItem({ ...newItem, [name]: type === 'checkbox' ? checked : value,});
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addItem(newItem);
        setNewItem({
            name: '',
            type: 'Other',
            expiration: false,
            expDate: ''
        });
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newItem.name}
                    onChange={handleChange}
                    placeholder="Add item"
                    required
                    pattern=".{4,}"
                />
                <select name="type" value={newItem.type} onChange={handleChange}>
                    <option value="Dairy">Dairy</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Grains">Grains</option>
                    <option value="Protein">Protein</option>
                    <option value="Other">Other</option>
                </select>
                { exp ?
                <>
                    <input
                        type="checkbox"
                        name="expiration"
                        checked={newItem.expiration}
                        onChange={handleChange}
                    />
                    <label>Expiration</label>
                    { newItem.expiration ?
                    <input
                        type="date"
                        name="expDate"
                        value={newItem.expDate}
                        onChange={handleChange}
                        required
                    />
                    : null
                    }
                </>
                : null
                }
                <button type="submit">{btnWord}</button>
            </form>
        </>
    );
}