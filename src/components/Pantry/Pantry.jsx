import PantryList from '../PantryList/PantryList';

export default function Pantry({items, handleDeleteItem}){
    const itemsList = items?.map((item, idx) => (
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