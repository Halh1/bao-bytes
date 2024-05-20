import {useState} from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';
import { create } from '../../utilities/items-service';

export default function GroceryListPage() {
    const [items, setItems] = useState([
        { name: "Milk", type: "Dairy", expiration: true, expDate: "2023-06-15" },
        { name: "Eggs", type: "Protein", expiration: true, expDate: "2023-06-20" },
        { name: "Apples", type: "Fruits", expiration: true, expDate: "2023-06-25" }
    ]);

    async function addItem(item){
        const post = await create(item);
        setItems([...items, item]);
    }

    return (
        <>
            <h1>GroceryListPage</h1>
            <GroceryList items={items} addItem={addItem} />
        </>
    );
}