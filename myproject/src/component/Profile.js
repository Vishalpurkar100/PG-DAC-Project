import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap'; // Ensure Bootstrap modal is installed

const Profile = ({ user }) => {
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [modalContent, setModalContent] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleOrderClick = (order) => {
        setSelectedOrder(order);
    };

    const handleOpenModal = (content) => {
        setModalContent(content);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent(null);
    };

    const handleAcceptTerms = () => {
        setTermsAccepted(true);
        handleCloseModal();
    };

    if (!user) return <div>Loading...</div>;

    // Determine the profile sections based on user role
    const renderProfileSections = () => {
        if (user.role === 'admin') {
            return (
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/admin/dashboard" className="text-dark">Admin Dashboard</Link></li>
                    <li className="list-group-item"><Link to="/admin/users" className="text-dark">Manage Users</Link></li>
                    <li className="list-group-item"><Link to="/admin/reports" className="text-dark">Reports</Link></li>
                </ul>
            );
        } else if (user.role === 'customer') {
            return (
                <ul className="list-group">
                    <li className="list-group-item"><Link to="/profile/orders" className="text-dark">Your Orders</Link></li>
                    <li className="list-group-item"><Link to="/profile/wallet" className="text-dark">Wallet</Link></li>
                    <li className="list-group-item"><Link to="/profile/support" className="text-dark">Support</Link></li>
                    <li className="list-group-item"><Link to="/profile/payment" className="text-dark">Payment</Link></li>
                    <li className="list-group-item"><Link to="/profile/address" className="text-dark">Address Book</Link></li>
                    <li className="list-group-item"><Link to="/profile/coupons" className="text-dark">Collected Coupons</Link></li>
                    <li className="list-group-item"><Link to="#" onClick={() => handleOpenModal('Share App')} className="text-dark">Share App</Link></li>
                    <li className="list-group-item"><Link to="#" onClick={() => handleOpenModal('About Us')} className="text-dark">About Us</Link></li>
                    <li className="list-group-item"><Link to="#" onClick={() => handleOpenModal('Privacy Policy')} className="text-dark">Privacy Policy</Link></li>
                    <li className="list-group-item"><Link to="#" onClick={() => handleOpenModal('Terms & Conditions')} className="text-dark">Terms & Conditions</Link></li>
                </ul>
            );
        } else {
            return <ul className="list-group"><li className="list-group-item">No profile sections available.</li></ul>;
        }
    };

    return (
        <div style={{ backgroundColor: '#ffe5e5', minHeight: '100vh', padding: '20px' }}>
            <div className="container mt-4">
                <h3 className="text-center text-dark mb-4">User Profile</h3>
                <div className="row">
                    <div className="col-12 col-md-8 mx-auto">
                        <div className="card p-4" style={{ backgroundColor: '#f7e9dd', borderRadius: '15px' }}>
                            <h5 className="card-title text-primary">{user.name}</h5>
                            <p className="card-text text-dark">Email: {user.email}</p>
                            <p className="card-text text-dark">Address: {user.address}</p>
                            <p className="card-text text-dark">Login Time: {new Date(user.loginTime).toLocaleString()}</p>
                            <p className="card-text text-dark">Account Balance: Rs.{user.accountBalance.toFixed(2)}</p>

                            <h6 className="text-primary mt-4">Profile Sections</h6>
                            {renderProfileSections()}

                            {selectedOrder && (
                                <div className="mt-4">
                                    <h6 className="text-primary">Order Details</h6>
                                    <div className="card" style={{ backgroundColor: '#f7e9dd', borderRadius: '15px' }}>
                                        <div className="card-body">
                                            <h5 className="card-title">Order #{selectedOrder.id}</h5>
                                            <p className="card-text">Date: {new Date(selectedOrder.date).toLocaleDateString()}</p>
                                            <h6>Items:</h6>
                                            <ul className="list-group mb-3">
                                                {selectedOrder.items.map(item => (
                                                    <li key={item.id} className="list-group-item">
                                                        {item.name} - Quantity: {item.quantity} - Price: Rs.{item.price.toFixed(2)}
                                                    </li>
                                                ))}
                                            </ul>
                                            <p className="card-text text-danger">Total Amount: Rs.{selectedOrder.totalAmount.toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {termsAccepted && (
                                <div className="alert alert-success mt-4" role="alert">
                                    Thank you for accepting the Terms and Conditions.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal for displaying detailed information */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalContent}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{modalContent === 'Terms & Conditions' ? 'All parts of Official are subjected to Student.Sunbeam. Any part of the website use in any form is prohibited.' : ''}</p>
                    <p>{modalContent === 'Privacy Policy' ? 'Your data is safe and not transferable, so allow to see contacts, photos, and location for official purposes only.' : ''}</p>
                    <p>{modalContent === 'About Us' ? 'Student of Sunbeam Infotech trying to change the world.' : ''}</p>
                    <p>{modalContent === 'Share App' ? 'Share the app with your friends on Facebook, Instagram, YouTube, and many more social media sites.' : ''}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    {modalContent === 'Terms & Conditions' && <Button variant="primary" onClick={handleAcceptTerms}>Accept</Button>}
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Profile;
