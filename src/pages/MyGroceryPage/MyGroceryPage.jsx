import {useState, useEffect} from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import Pantry from '../../components/Pantry/Pantry';
import { getItems, create, deleteItem, getPantry, transferItem, deletePantryItems, editItem } from '../../utilities/items-service';
import './MyGroceryPage.css';


export default function MyGroceryPage({user}) {
    const userId = user._id; 
    const [items, setItems] = useState([]);
    const [pantryItems, setPantryItems] = useState([]);

    async function addItem(item, location){
        console.log("Location:", location);
        await create(item, location);
        if (location === 'pantry'){
            const pantryItems = await getPantry(userId);
            setPantryItems(pantryItems);
        } else {
        const allItems = await getItems(user._id)
        setItems(allItems);
        }
    }
    async function handleDeleteItem(itemId){
        await deleteItem(itemId);
        const updateItems = await getItems(userId);
        setItems(updateItems);
    }
    async function handleTransferItem(itemId){
        console.log("Transfer Item Id:", itemId);
        await transferItem(itemId);
        const transferredItems = await getPantry(userId);
        const updateItems = await getItems(userId);
        setItems(updateItems);
        setPantryItems(transferredItems);
    }

    async function handleDeletePantryItem(itemId){
        await deletePantryItems(itemId, userId);
        const transferredItems = await getPantry(userId);
        setPantryItems(transferredItems);
    }

    async function handleEditPantryItem(editedItem){
        await editItem(editedItem);
        const updatedPantryItems = await getPantry(userId);
        setPantryItems(updatedPantryItems);
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
                <GroceryList items={items} addItem={(item) => addItem(item, 'groceryList')} handleDeleteItem={handleDeleteItem} handleTransferItem={handleTransferItem} />
                <Pantry pantryItems={pantryItems} addItem={(item) => addItem(item, 'pantry')} handleDeletePantryItem={handleDeletePantryItem} handleEditPantryItem={handleEditPantryItem} />
            </div>
        </>
    );
}