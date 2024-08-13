import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/login', { username, password });
            const { token, role } = response.data;

            // Store the token in localStorage or context
            localStorage.setItem('token', token);

            // Redirect based on role
            if (role === 'admin') {
                navigate('/admindashboard'); // Redirect to admin dashboard
            } else if (role === 'vendor') {
                navigate('/vendordashboard'); // Redirect to vendor dashboard
            } else {
                navigate('/'); // Redirect to user dashboard
            }
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-page">
            <div className="background-overlay">
                <div className="login-container">
                    <h1 className="brand-title">GroceryBuddy</h1>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        {error && <p className="error">{error}</p>}
                        <button type="submit">Login</button>
                    </form>
                    <div className="register-link">
                        <p>New user? <button onClick={() => navigate('/register')}>Register here</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
