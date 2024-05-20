import {useState} from 'react';
import GroceryList from '../../components/GroceryList/GroceryList';

export default function GroceryListPage() {
    const [items, setItems] = useState([
        "Milk",
        "Eggs",
        "Apples"
    ]);


    return (
        <>
            <h1>GroceryListPage</h1>
            <GroceryList items={items} />
        </>
    );
}