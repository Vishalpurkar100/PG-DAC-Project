import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication state or token
        setIsAuthenticated(false);
        // Redirect to home page
        navigate('/login');
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center">Logout</h3>
            <div className="text-center mt-4">
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Logout;
