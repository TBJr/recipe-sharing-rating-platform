import React from "react";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logged Out Successfully!");
                navigate("/login");
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Welcome</h2>
            <p className="mb-4">
                Logged in as: <span className="font-mono">{auth.currentUser?.email}</span>
            </p>
            <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>
    );
};

export default Profile;
