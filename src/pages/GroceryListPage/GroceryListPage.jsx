import {useState} from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';

export default function GroceryListPage() {
    const [items, setItems] = useState([
        "Milk",
        "Eggs",
        "Apples"
    ]);

    function addItem(item){
        setItems([...items, item]);
    }

    return (
        <>
            <h1>GroceryListPage</h1>
            <GroceryList items={items} addItem={addItem} />
        </>
    );
}