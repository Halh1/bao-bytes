import AddItemForm from '../AddItemForm/AddItemForm';
import GroceryListItem from '../GroceryListItem/GroceryListItem';


export default function GroceryList({items, addItem, handleDeleteItem}) {
    const itemsList = items.map((item, idx) => (
        <GroceryListItem item={item} key={idx} handleDeleteItem={handleDeleteItem} />
    ));

    return (
        <>
            <ul>{itemsList}</ul>

            <AddItemForm addItem={addItem}/>
        </>
    );
}