import { useState } from 'react';
import '../EditItemForm/EditItemForm.css';

export default function EditItemForm({item, handleUpdateItem}) {
    const [formData, setFormData] = useState({
        _id: item._id,
        name: item.name,
        type: item.type,
        expiration: item.expiration,
        expDate: item.expDate
    });

    function handleChange(evt) {
        const { name, value, type, checked } = evt.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value,});
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        handleUpdateItem(formData);
    }

    return (
        < main className='parent-container'>
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Edit grocery item"
                        required
                        pattern=".{4,}"
                    />
                    <select name="type" value={formData.type} onChange={handleChange}>
                        <option value="Dairy">Dairy</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Grains">Grains</option>
                        <option value="Protein">Protein</option>
                        <option value="Other">Other</option>
                    </select>
                    <input
                        type="checkbox"
                        name="expiration"
                        checked={formData.expiration}
                        onChange={handleChange}
                    />
                    <label>Expiration</label>
                    { formData.expiration ?
                    <input
                        type="date"
                        name="expDate"
                        value={formData.expDate}
                        onChange={handleChange}
                        required
                    />
                    : null
                    }
                    <button type="submit">Update Grocery Item</button>
                </form>
            </div>
        </main>
    );
}