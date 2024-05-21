export default function PantryList({item, handleDeleteItem}) {

    return (
        <>
            <li>
                <strong>Name:</strong> {item.name}<br />
                <strong>Type:</strong> {item.type}<br />
                <strong>Expiration:</strong> {item.expiration ? 'Yes' : 'No'}<br />
                <strong>Expiration Date:</strong> {item.expDate}<br />
            </li>
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
        </>
    );
}
