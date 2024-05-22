import PantryList from '../PantryList/PantryList';

export default function Pantry({ pantryItems, handleDeletePantryItem, handleEditPantryItem}){
    const itemsList = pantryItems?.map((item, idx) => (
        <PantryList item={item} key={idx} handleDeletePantryItem={handleDeletePantryItem} handleEditPantryItem={handleEditPantryItem} />
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