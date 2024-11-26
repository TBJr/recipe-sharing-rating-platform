import {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {auth} from "./firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import Footer from "./components/Footer.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Router>
            {/*<Header />*/}
            <main className="max-w-4xl mx-auto mt-8">
                <Routes>
                    {!user ? (
                        <>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="*" element={<Navigate to="/login" replace/>}/>
                        </>
                    ) : (
                        <>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="*" element={<Navigate to="/profile" replace/>}/>
                        </>
                    )}
                </Routes>
            </main>
            {/*<Footer/>*/}
        </Router>
    );
}

export default App;