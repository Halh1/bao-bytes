import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            <Link to="/home"><img src="/baoBytesLogo.png" alt="" /></Link>
            <div className='nav-left'>
                <Link to="/home">Home</Link>
                &nbsp;&nbsp;
                {user ? 
                <Link to="/grocery">My Groceries</Link>
                : null
                }
            </div>
            <div className='nav-right'>
                { user ?
                <>
                    <span>Welcome back, {user.name}</span>
                    &ensp;
                    <Link to="" onClick={handleLogOut}><button>Log Out</button></Link>
                </>
                :
                <div>
                    <Link to='/login'><button>Log In</button></Link>
                </div>
                }
                
            </div>
        </nav>
    );
}