import {useState, useEffect} from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import Pantry from '../../components/Pantry/Pantry';
import { getItems, create, deleteItem } from '../../utilities/items-service';
import './MyGroceryPage.css';


export default function MyGroceryPage({user}) {
    const userId = user._id; 
    const [items, setItems] = useState([]);

    async function addItem(item){
        await create(item);
        setItems([...items, item]);
    }
    async function handleDeleteItem(itemId){
        await deleteItem(itemId);
        setItems(items.filter(item => item._id !== itemId ))

    }
    useEffect(function () {
        async function getAllItems() {
          const items = await getItems(userId)
          setItems(items)
        }
        getAllItems()
      }, [userId])


    return (
        <>
            <div className='grocery-container'>
                <GroceryList items={items} addItem={addItem} handleDeleteItem={handleDeleteItem} />
                <Pantry items={items} handleDeleteItem={handleDeleteItem}/>
            </div>
        </>
    );
}