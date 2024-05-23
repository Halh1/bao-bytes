import './GroceryListItem.css';

const GroceryListItem = ({ item, handleDeleteItem, handleTransferItem }) => {
    return (
        <li data-type={item.type}>
            {item.name}
            <div className='btn-container'>
                <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
                <button onClick={() => handleTransferItem(item._id)}>Transfer</button>
            </div>
        </li>
    );
};

export default GroceryListItem;