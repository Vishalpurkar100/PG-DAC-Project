import React, { useState } from 'react';

const SubCategoryForm = ({ categories, addSubCategory }) => {
  const [subCatName, setSubCatName] = useState('');
  const [subCategoryDesc, setSubCategoryDesc] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation checks
    if (!subCatName) newErrors.subCatName = 'Subcategory Name is required';
    if (!subCategoryDesc) newErrors.subCategoryDesc = 'Subcategory Description is required';
    if (!categoryId) newErrors.categoryId = 'Category is required';

    // Set errors and return if any field is invalid
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors and handle form submission logic here
    setErrors({});
    const newSubCategory = { subCatName, subCategoryDesc, categoryId };
    addSubCategory(newSubCategory); // Call the function passed via props
    setSubCatName('');
    setSubCategoryDesc('');
    setCategoryId('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2><center><b>Subcategory Form</b></center></h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="subCatName">Subcategory Name:</label>
            <input
              type="text"
              id="subCatName"
              value={subCatName}
              onChange={(e) => setSubCatName(e.target.value)}
              style={styles.input}
            />
            {errors.subCatName && <p style={styles.error}>{errors.subCatName}</p>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="subCategoryDesc">Subcategory Description:</label>
            <textarea
              id="subCategoryDesc"
              value={subCategoryDesc}
              onChange={(e) => setSubCategoryDesc(e.target.value)}
              style={styles.textarea}
            />
            {errors.subCategoryDesc && <p style={styles.error}>{errors.subCategoryDesc}</p>}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="categoryId">Category:</label>
            <select
              id="categoryId"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              style={styles.select}
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            {errors.categoryId && <p style={styles.error}>{errors.categoryId}</p>}
          </div>
          <div style={styles.buttonContainer}>
            <button type="submit" style={styles.button}>Add Subcategory</button>
          </div>
        </form>
      </div>
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
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
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
  error: {
    color: 'red',
    fontSize: '0.875rem',
    marginTop: '5px',
  },
};

export default SubCategoryForm;
