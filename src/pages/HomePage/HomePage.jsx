import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage({user}) {
    return (
        <>
            <h1>Welcome to Bao Bytes!</h1>
            <div className="home-container">
                <div>
                    <h2>What is Bao Bytes?</h2>
                    <p>Bao Bytes is a web application that allows users to keep track of their grocery list and pantry items. Users can add items to their grocery and pantry list, transfer items to their pantry, and delete items from their grocery or pantry list. Users can also view their grocery list and pantry items.</p>
                    { user ? 
                    <Link to="/grocery"><button>Get Started</button></Link>
                    :
                    <div>
                        <Link to="/signup"><button>Sign Up</button></Link>
                        <Link to="/login"><button>Log In</button></Link>
                    </div>
                    }
                </div>
                <div>
                    <img src="https://imageio.forbes.com/specials-images/imageserve/5f8ceed2e11880c542eca6b1/Woman-shopping-at-the-grocery-store-wearing-a-facemask/960x0.jpg?format=jpg&width=960" />
                </div>
            </div>
        </>
    );
}