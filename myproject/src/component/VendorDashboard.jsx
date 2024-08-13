import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const VendorDashboard = () => {
  const [products, setProducts] = useState([]);
  const [activeSection, setActiveSection] = useState('products');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('products')) {
      setActiveSection('products');
    } else if (location.pathname.includes('profile')) {
      setActiveSection('profile');
    } else if (location.pathname.includes('categories')) {
      setActiveSection('categories');
    }
  }, [location]);

  useEffect(() => {
    if (activeSection === 'products') {
      fetch('http://your-api-url.com/api/products')  // Replace with your API URL
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [activeSection]);

  const handleUpdateProduct = (productId) => {
    navigate(`/vendor/products/update/${productId}`);
  };

  const handleDeleteProduct = (productId) => {
    fetch(`http://your-api-url.com/api/products/${productId}`, {  // Replace with your API URL
      method: 'DELETE'
    })
      .then(() => setProducts(products.filter(product => product.id !== productId)))
      .catch(error => console.error('Error deleting product:', error));
  };

  const handleProductAdded = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const renderProducts = () => (
    <div>
      <h1>Manage Products</h1>
      <div style={styles.buttonContainer}>
        <Link to="add" state={{ addProduct: handleProductAdded }}>
          <button style={styles.button}>Add Product</button>
        </Link>
        <Link to=".">
          <button style={styles.button}>All Products</button>
        </Link>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Category</th>
            <th style={styles.th}>Image</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td style={styles.td}>{product.id}</td>
              <td style={styles.td}>{product.name}</td>
              <td style={styles.td}>{product.description}</td>
              <td style={styles.td}>{product.category}</td>
              <td style={styles.td}>
                <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td style={styles.td}>
                <button style={styles.button} onClick={() => handleUpdateProduct(product.id)}>Update</button>
                <button style={styles.button} onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderProfile = () => (
    <div>
      <h1>Manage Profile</h1>
      {/* Add profile management content here */}
    </div>
  );

  const renderCategories = () => (
    <div>
      <h1>Manage Categories</h1>
      {/* Add categories management content here */}
    </div>
  );

  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2 style={styles.sidebarHeading}>Vendor Dashboard</h2>
        <ul style={styles.sidebarList}>
          <li style={styles.sidebarItem}>
            <Link to="products" style={styles.link} className={activeSection === 'products' ? 'active' : ''}>Manage Products</Link>
          </li>
          <li style={styles.sidebarItem}>
            <Link to="profile" style={styles.link} className={activeSection === 'profile' ? 'active' : ''}>Manage Profile</Link>
          </li>
          <li style={styles.sidebarItem}>
            <Link to="categories" style={styles.link} className={activeSection === 'categories' ? 'active' : ''}>Manage Categories</Link>
          </li>
        </ul>
      </div>
      <div style={styles.mainContent}>
        {activeSection === 'products' && renderProducts()}
        {activeSection === 'profile' && renderProfile()}
        {activeSection === 'categories' && renderCategories()}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    backgroundColor: '#ffe4e1',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f7f7f7',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  sidebarHeading: {
    fontSize: '1.5rem',
    marginBottom: '15px',
  },
  sidebarList: {
    listStyle: 'none',
    padding: '0',
  },
  sidebarItem: {
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
    display: 'block',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    marginLeft: '20px',
  },
  buttonContainer: {
    marginBottom: '20px',
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  },
};

export default VendorDashboard;
