import React from 'react';

const AllProducts = () => {
    const sampleProducts = [
        { id: 1, name: 'Apple', price: '$1.00' },
        { id: 2, name: 'Banana', price: '$0.50' },
        { id: 3, name: 'Carrot', price: '$0.30' },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>All Products</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleProducts.map(product => (
                        <tr key={product.id}>
                            <td style={styles.td}>{product.id}</td>
                            <td style={styles.td}>{product.name}</td>
                            <td style={styles.td}>{product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#ffe4e1',
    borderRadius: '8px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
  },
  heading: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    borderBottom: '2px solid #ddd',
    padding: '8px',
    backgroundColor: '#f2f2f2',
    fontSize: '1rem',
  },
  td: {
    borderBottom: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    fontSize: '0.9rem',
  },
};

export default AllProducts;
