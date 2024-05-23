import AddItemForm from '../AddItemForm/AddItemForm';
import GroceryListItem from '../GroceryListItem/GroceryListItem';

export default function GroceryList({items, addItem, handleDeleteItem, handleTransferItem}) {
    const itemsList = items?.map((item, idx) => (
        <GroceryListItem item={item} key={idx} handleDeleteItem={handleDeleteItem} handleTransferItem={handleTransferItem} />
    ));

    const exp = false;

    return (
        <div>
            <h1>Grocery List</h1>
            <ul>{itemsList}</ul>

            <AddItemForm addItem={addItem} exp={exp}/>
        </div>
    );
}