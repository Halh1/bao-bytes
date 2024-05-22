import './App.css';
import { useState } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import MyGroceryPage from '../MyGroceryPage/MyGroceryPage';
import NavBar from '../../components/NavBar/NavBar'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {user ? (
          <>
            <Route path="/home" element={<HomePage user={user} />} />
            <Route path="/grocery" element={<MyGroceryPage user={user} />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<HomePage setUser={setUser} user={user} />} />
            <Route path="/login" element={<AuthPage setUser={setUser} type="login" />} />
            <Route path="/signup" element={<AuthPage setUser={setUser} type="signup" />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>
    </main>
  );
}
