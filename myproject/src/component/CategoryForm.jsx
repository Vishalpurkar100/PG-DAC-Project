import React, { useState } from 'react';
import SubCategoryForm from './SubCategoryForm';

const Category = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Grocery' },
    { id: 2, name: 'Beverages' },
    { id: 3, name: 'Snacks' },
    { id: 4, name: 'Household Essentials' },
  ]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryDesc, setNewCategoryDesc] = useState('');

  const addCategory = (event) => {
    event.preventDefault();
    if (newCategoryName && newCategoryDesc) {
      const newCategory = {
        id: categories.length + 1,
        name: newCategoryName,
        description: newCategoryDesc,
      };
      setCategories([...categories, newCategory]);
      setNewCategoryName('');
      setNewCategoryDesc('');
    }
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.formWrapper}>
          <h2><center><b>Category Form</b></center></h2>
          <form onSubmit={addCategory}>
            <div style={styles.formGroup}>
              <label htmlFor="categoryName">Category Name:</label>
              <input
                type="text"
                id="categoryName"
                value={newCategoryName}
                onChange={(e) => setNewCategoryName(e.target.value)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="categoryDesc">Category Description:</label>
              <textarea
                id="categoryDesc"
                value={newCategoryDesc}
                onChange={(e) => setNewCategoryDesc(e.target.value)}
                style={styles.textarea}
              />
            </div>
            <div style={styles.buttonContainer}>
              <button type="submit" style={styles.button}>Add Category</button>
            </div>
          </form>
        </div>
      </div>
      <SubCategoryForm categories={categories} />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#F4C9C1', // Faint strawberry color
    padding: '20px',
  },
  formWrapper: {
    padding: '20px',
    backgroundColor: '#fff', // White background for form
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%', // Ensure the form takes up full width within container
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '100px',
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
  buttonContainer: {
    textAlign: 'center', // Center the button
    marginTop: '20px',
  },
};

export default Category;
