import { useState } from 'react';

export default function AddItemForm({addItem}) {
    const [newItem, setNewItem] = useState('');

    function handleItem(evt){
        evt.preventDefault();
        addItem(newItem);
        setNewItem('');
   }

    return (
        <>
            <h1>Add Item Form</h1>
            <form onSubmit= {handleItem}>
                <input type="text"
                value={newItem}
                onChange={(evt) => setNewItem(evt.target.value)}
                placeholder='add grocery item'
                required
                pattern='.{4,}'
                />
                <button onclick={handleItem} type="submit">Add Grocery Item</button>
            </form>
        </>
    );
}