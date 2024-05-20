import GroceryListItem from '../GroceryListItem/GroceryListItem';

export default function GroceryList({items}) {
    const itemsList = items.map((item, idx) => (
        <GroceryListItem item={item} key={idx} />
    ));

    return (
        <>
            <ul>{itemsList}</ul>
        </>
    );
}