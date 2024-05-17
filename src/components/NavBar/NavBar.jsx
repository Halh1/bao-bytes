import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/home">Home</Link>
            &nbsp; | &nbsp;
            <Link to="/grocery">Grocery List</Link>
            &emsp;
            <span>Welcome back, {user.name}</span>
            &ensp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    );
}