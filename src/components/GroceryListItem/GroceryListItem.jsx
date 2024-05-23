import './GroceryListItem.css';

const GroceryListItem = ({ item, handleDeleteItem, handleTransferItem }) => {
    return (
        <li data-type={item.type}>
            {item.name}
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
            <button onClick={() => handleTransferItem(item._id)}>Transfer</button>
        </li>
    );
};

export default GroceryListItem;