import React from 'react';
//we need to delete this data 
const AllVendors = () => {
    const sampleVendors = [
        { id: 1, name: 'Vendor A', location: 'New York' },
        { id: 2, name: 'Vendor B', location: 'Los Angeles' },
        { id: 3, name: 'Vendor C', location: 'Chicago' },
    ];

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>All Vendors</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>ID</th>
                        <th style={styles.th}>Name</th>
                        <th style={styles.th}>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {sampleVendors.map(vendor => (
                        <tr key={vendor.id}>
                            <td style={styles.td}>{vendor.id}</td>
                            <td style={styles.td}>{vendor.name}</td>
                            <td style={styles.td}>{vendor.location}</td>
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
    backgroundColor:''
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

export default AllVendors;
