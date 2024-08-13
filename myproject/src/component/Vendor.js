import React, { useState } from 'react';

const Vendor = () => {
    const [vendorDetails, setVendorDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setVendorDetails(prevDetails => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Vendor Details:', vendorDetails);
        // Perform actions like API call to save vendor details
    };

    return (
        <div style={{ backgroundColor: '#ffe5e5', minHeight: '100vh', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="vendor-card" style={{ backgroundColor: '#ffadad', borderRadius: '15px', padding: '20px', maxWidth: '500px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                <h2 className="vendor-title" style={{ fontSize: '2rem', marginBottom: '20px', textAlign: 'center', color: '#fff' }}>Vendor Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName" style={{ color: '#fff', fontSize: '1.25rem' }}>First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            name="firstName" 
                            value={vendorDetails.firstName} 
                            onChange={handleChange} 
                            style={{ fontSize: '1.25rem', padding: '10px' }}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" style={{ color: '#fff', fontSize: '1.25rem' }}>Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            name="lastName" 
                            value={vendorDetails.lastName} 
                            onChange={handleChange} 
                            style={{ fontSize: '1.25rem', padding: '10px' }}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" style={{ color: '#fff', fontSize: '1.25rem' }}>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            name="email" 
                            value={vendorDetails.email} 
                            onChange={handleChange} 
                            style={{ fontSize: '1.25rem', padding: '10px' }}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{ color: '#fff', fontSize: '1.25rem' }}>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            name="password" 
                            value={vendorDetails.password} 
                            onChange={handleChange} 
                            style={{ fontSize: '1.25rem', padding: '10px' }}
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile" style={{ color: '#fff', fontSize: '1.25rem' }}>Mobile No.</label>
                        <input 
                            type="tel" 
                            className="form-control" 
                            id="mobile" 
                            name="mobile" 
                            value={vendorDetails.mobile} 
                            onChange={handleChange} 
                            style={{ fontSize: '1.25rem', padding: '10px' }}
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary mt-4" style={{ width: '100%', fontSize: '1.25rem', padding: '10px' }}>Save</button>
                </form>
            </div>
        </div>
    );
};

export default Vendor;
