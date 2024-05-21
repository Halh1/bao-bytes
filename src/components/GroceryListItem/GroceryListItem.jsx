export default function GroceryListItem({item, handleDeleteItem, handleTransferItem}) {

    return (
        <>
            <li>
                <strong>Name:</strong> {item.name}<br />
                <strong>Type:</strong> {item.type}<br />
            </li>
            <button onClick={() => handleTransferItem(item._id)} >Transfer</button>
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
        </>
    );
}