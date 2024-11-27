import {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {auth} from "./firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import Header from "./components/Header.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import WelcomePage from "./components/WelcomePage.jsx";
import Profile from "./components/Profile.jsx";
import RecipeSubmission from "./components/RecipeSubmission.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current User:", currentUser); // Debug
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Router>
            {/* Header only visible when logged in */}
            {user && <Header user={user} />}

            <main className="max-w-4xl mx-auto mt-8">
                <Routes>
                    {/* Public Routes */}
                    {!user && (
                        <>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="*" element={<Navigate to="/login" replace/>}/>
                        </>
                    )}

                    {/* Private Routes */}
                    {user && (
                        <>
                            <Route path="/" element={<WelcomePage />} />
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/submit-recipe" element={<RecipeSubmission/>}/>
                            <Route path="*" element={<Navigate to="/" replace/>}/>
                        </>
                    )}
                </Routes>
            </main>


            {/* Footer only visible when logged in */}
            {user && <Footer />}

            <ToastContainer />
        </Router>
    );
}

export default App;