export default function PantryList({item, handleDeletePantryItem}) {

    return (
        <>
            <li>
                <strong>Name:</strong> {item.name}<br />
                <strong>Type:</strong> {item.type}<br />
                <strong>Expiration:</strong> {item.expiration ? 'Yes' : 'No'}<br />
                <strong>Expiration Date:</strong> {item.expDate}<br />
            </li>
            <button onClick={() => handleDeletePantryItem(item._id)}>Delete</button>
        </>
    );
}
