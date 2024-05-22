import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage({setUser, type}) {
    return (
        <main>
            {type === "signup" ? 
            <div>
                <h1>Sign Up</h1>
                <SignUpForm setUser={setUser} />
            </div>
            :
            <div>
                <h1>Log In</h1>
                <LoginForm setUser={setUser} />
            </div>
            }
        </main>
    );
}