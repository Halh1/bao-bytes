import { useState } from 'react';

export default function AddItemForm({addItem}) {
    const [newItem, setNewItem] = useState({
        name: '',
        type: 'Other',
        expiration: true,
        expDate: ''
    });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setNewItem({ ...newItem, [name]: value });
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addItem(newItem);
        setNewItem({
            name: '',
            type: 'Other',
            expiration: true,
            expDate: ''
        });
    }

    return (
        <>
            <h1>Add Item Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={newItem.name}
                    onChange={handleChange}
                    placeholder="Add grocery item"
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
                <input
                    type="date"
                    name="expDate"
                    value={newItem.expDate}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Add Grocery Item</button>
            </form>
        </>
    );
}