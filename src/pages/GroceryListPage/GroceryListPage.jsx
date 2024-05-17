import { checkToken } from '../../utilities/users-service';

export default function GroceryListPage() {
    async function handleCheckToken(evt) {
        const expDate = await checkToken();
        console.log(expDate);
    }

    return (
        <>
            <h1>GroceryListPage</h1>
            <button
                onClick={handleCheckToken}
            >Check When My Login Expires</button>
        </>
    );
}