import {useState, useEffect} from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import { getItems, create, deleteItem } from '../../utilities/items-service';

export default function GroceryListPage() {
    const [items, setItems] = useState([]);

    async function addItem(item){
        const post = await create(item);
        setItems([...items, item]);
    }
    async function handleDeleteItem(itemId){
        const delItem = await deleteItem(itemId);
        setItems(items.filter(item => item._id !== itemId ))

    }
    useEffect(function () {
        async function getAllItems() {
          const items = await getItems()
          setItems(items)
        }
        getAllItems()
      }, [])


    return (
        <>
            <h1>GroceryListPage</h1>
            <GroceryList items={items} addItem={addItem} handleDeleteItem={handleDeleteItem} />
        </>
    );
}



// [
//     // { name: "Milk", type: "Dairy", expiration: true, expDate: "2023-06-15" },
//     // { name: "Eggs", type: "Protein", expiration: true, expDate: "2023-06-20" },
//     // { name: "Apples", type: "Fruits", expiration: true, expDate: "2023-06-25" }
// ]