import {useState, useEffect} from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import Pantry from '../../components/Pantry/Pantry';
import { getItems, create, deleteItem, getPantry, transferItem } from '../../utilities/items-service';
import './MyGroceryPage.css';


export default function MyGroceryPage({user}) {
    const userId = user._id; 
    const [items, setItems] = useState([]);
    const [pantryItems, setPantryItems] = useState([]);

    async function addItem(item){
        await create(item);
        setItems([...items, item]);
    }
    async function handleDeleteItem(itemId){
        await deleteItem(itemId);
        setItems(items.filter(item => item._id !== itemId ))
    }
    async function handleTransferItem(itemId){
        console.log("Transfer Item Id:", itemId);
        await transferItem(itemId);
        const transferredItem = items.find(item => item._id === itemId);
        setItems(items.filter(item => item._id !== itemId ));
        setPantryItems([...pantryItems, transferredItem]);
    }

    useEffect(function () {
        async function getAllItems() {
          const items = await getItems(userId)
          setItems(items)
        }
        getAllItems()
      }, [userId])

    useEffect(function () {
        async function getPantryAllItems() {
            const items = await getPantry(userId)
            setPantryItems(items)
        }
        getPantryAllItems()
      }, [userId])

    return (
        <>
            <div className='grocery-container'>
                <GroceryList items={items} addItem={addItem} handleDeleteItem={handleDeleteItem} handleTransferItem={handleTransferItem} />
                <Pantry pantryItems={pantryItems} handleDeleteItem={handleDeleteItem}/>
            </div>
        </>
    );
}