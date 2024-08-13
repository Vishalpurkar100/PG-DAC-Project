import React from 'react';
import { Link } from 'react-router-dom';

// Import CSS for transitions
import './AdminDashboard.css'; 

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading} className="fade-in">Welcome Admin</h1>
      <div style={styles.buttonContainer}>
        <Link to="/products">
          <button style={styles.button} className="button-fade">Add Product</button>
        </Link>
        <Link to="/addvendor">
          <button style={styles.button} className="button-fade">Add Vendor</button>
        </Link>
        <Link to="/allproducts">
          <button style={styles.button} className="button-fade">All Products</button>
        </Link>
        <Link to="/allvendors">
          <button style={styles.button} className="button-fade">All Vendors</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#ffe4e1', // Light background color
    padding: '20px',
    transition: 'opacity 1s ease-in-out', // Fade-in effect for the entire container
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap', // Allows the buttons to wrap if needed
    justifyContent: 'center',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50', // Green background color
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
};

export default AdminDashboard;
