export default function GroceryListItem({item, handleDeleteItem}) {
    


    return (
        <>
            <li>
                <strong>Name:</strong> {item.name}<br />
                <strong>Type:</strong> {item.type}<br />
                <strong>Expiration:</strong> {item.expiration ? 'Yes' : 'No'}<br />
                <strong>Expiration Date:</strong> {item.expDate}<br />
                <p>{item._id}</p>
            </li>
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
        </>
    );
}