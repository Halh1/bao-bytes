import PantryList from '../PantryList/PantryList';

export default function Pantry({ pantryItems, handleDeletePantryItem}){
    const itemsList = pantryItems?.map((item, idx) => (
        <PantryList item={item} key={idx} handleDeletePantryItem={handleDeletePantryItem} />
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