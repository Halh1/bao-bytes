import PantryList from '../PantryList/PantryList';
import AddItemForm from '../AddItemForm/AddItemForm';

export default function Pantry({ pantryItems, addItem, handleDeletePantryItem, handleEditPantryItem}){
    const exp = true;
    const itemsList = pantryItems?.map((item, idx) => (
        <PantryList item={item} key={idx} handleDeletePantryItem={handleDeletePantryItem} handleEditPantryItem={handleEditPantryItem} />
    ));
    return (
        <div>
            <h1>Pantry & Fridge Items</h1>
            <ul>
                {itemsList}
            </ul>
            <AddItemForm addItem={(item) => addItem(item, 'pantry')} exp={exp} />
        </div> 
    );
}