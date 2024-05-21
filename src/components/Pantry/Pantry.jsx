import PantryList from '../PantryList/PantryList';

export default function Pantry({ pantryItems, handleDeleteItem}){
    const itemsList = pantryItems?.map((item, idx) => (
        <PantryList item={item} key={idx} handleDeleteItem={handleDeleteItem} />
    ));
    return (
        <div>
            <h1>Pantry/Fridge Items</h1>
            <ul>
                {itemsList}
            </ul>
        </div>

    );
}