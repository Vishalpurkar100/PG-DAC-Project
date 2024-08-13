import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    
    // Retrieve addProduct from state
    const { addProduct } = location.state || {};

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && description && category && image) {
            const newProduct = {
                id: Date.now(),
                name,
                description,
                category,
                image: URL.createObjectURL(image),
            };

            if (addProduct) {
                addProduct(newProduct);
            }

            // Optionally send newProduct to API and then navigate
            // fetch('http://your-api-url.com/api/products', {  // Replace with your API URL
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(newProduct),
            // })
            //   .then(response => response.json())
            //   .then(() => navigate('/'))
            //   .catch(error => console.error('Error adding product:', error));

            // For now, navigate after adding the product
            navigate('/');
        }
    };

    return (
        <div style={{ backgroundColor: '#ffe5e5', minHeight: '100vh', padding: '20px' }}>
            <div className="container mt-4" style={{ maxWidth: '600px', margin: 'auto' }}>
                <h3 className="text-center text-dark mb-4" style={{ fontSize: '2rem' }}>Add New Product</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="text-dark" style={{ fontSize: '1.25rem' }}>Product Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                            style={{ fontSize: '1.15rem', padding: '10px' }}
                            placeholder="Enter the Product Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="text-dark" style={{ fontSize: '1.25rem' }}>Description</label>
                        <textarea 
                            className="form-control" 
                            id="description" 
                            rows="3" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required 
                            style={{ fontSize: '1.15rem', padding: '10px' }}
                            placeholder="Enter the Product Description" 
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category" className="text-dark" style={{ fontSize: '1.25rem' }}>Category</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="category" 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            required 
                            style={{ fontSize: '1.15rem', padding: '10px' }}
                            placeholder='Select the Category'
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image" className="text-dark" style={{ fontSize: '1.25rem' }}>Product Image</label>
                        <input 
                            type="file" 
                            className="form-control-file" 
                            id="image" 
                            onChange={(e) => setImage(e.target.files[0])} 
                            required 
                            style={{ fontSize: '1.15rem' }}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3" style={{ fontSize: '1.25rem', padding: '10px' }}>Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default ProductForm;
