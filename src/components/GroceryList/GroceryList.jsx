import AddItemForm from '../AddItemForm/AddItemForm';
import GroceryListItem from '../GroceryListItem/GroceryListItem';

export default function GroceryList({items, addItem}) {
    const itemsList = items.map((item, idx) => (
        <GroceryListItem item={item} key={idx} />
    ));

    return (
        <>
            <ul>
            {items.map((item, index) => (
                <li key={index}>
                    <strong>Name:</strong> {item.name}<br />
                    <strong>Type:</strong> {item.type}<br />
                    <strong>Expiration:</strong> {item.expiration ? 'Yes' : 'No'}<br />
                    <strong>Expiration Date:</strong> {item.expDate}<br />
                </li>
            ))}
        </ul>
            <AddItemForm addItem={addItem}/>
        </>
    );
}