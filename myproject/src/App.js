import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import ProductGrid from './component/ProductGrid';
import Cart from './component/Cart';
import Profile from './component/Profile';
import ProductManager from './component/ProductManager';
import Logout from './component/Logout';
import Payment from './component/Payment';
import Vendor from './component/Vendor';
import { products } from './component/ProductGrid';
import Login from './component/Login';
import Register from './component/Register';
import AdminDashboard from './component/AdminDashboard';
import AllProducts from './component/AllProducts';
import AllVendors from './component/AllVendors';
import VendorDashboard from './component/VendorDashboard';
import UpdateProduct from './component/UpdateProduct';
import AddressForm from './component/AddressForm';
import CategoryForm from './component/CategoryForm';
import SubCategoryForm from './component/SubCategoryForm';
import ProductForm from './component/ProductForm';

const App = () => {
    const [cart, setCart] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [userRole, setUserRole] = useState('vendor'); // 'vendor' or 'customer'

    const handleAddToCart = (productId) => {
        setCart(prevCart => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0) + 1
        }));
    };

    const handleRemoveFromCart = (productId) => {
        setCart(prevCart => {
            if (prevCart[productId] === 1) {
                const { [productId]: _, ...rest } = prevCart;
                return rest;
            } else {
                return {
                    ...prevCart,
                    [productId]: prevCart[productId] - 1
                };
            }
        });
    };

    const handleBuy = () => {
        alert('Thank you for your purchase!');
        setCart({});
    };

    const location = useLocation();

    // Hide the navbar if the current path is /login, /register, /admindashboard, /products, /addvendor, /allproducts, or /allvendors
    const showNavbar = ![
        '/login', 
        '/register', 
        '/admindashboard', 
        '/products', 
        '/addvendor', 
        '/allproducts', 
        '/allvendors','/addcategory','/addaddressform','/addsubcategory','/vendordashboard'
    ].includes(location.pathname);

    return (
        <>
            {showNavbar && (
                <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ff6347' }}>
                    <div className="container-fluid">
                        <img src='your-logo-url-here' alt='logo' />
                        <Link className="navbar-brand text-white brand-size" to="/">GroceryBuddy</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/cart">Cart ({Object.keys(cart).length})</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/profile">Profile</Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link text-white" to="/logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}

            <Routes>
                <Route 
                    path="/" 
                    element={
                        <ProductGrid 
                            cart={cart} 
                            handleAddToCart={handleAddToCart} 
                            handleRemoveFromCart={handleRemoveFromCart} 
                        />
                    } 
                />
                <Route 
                    path="/cart" 
                    element={
                        <Cart 
                            cart={cart} 
                            products={products} 
                            handleAddToCart={handleAddToCart} 
                            handleRemoveFromCart={handleRemoveFromCart} 
                            handleBuy={handleBuy} 
                        />
                    } 
                />
                <Route 
                    path="/profile" 
                    element={<Profile />} 
                />
                {userRole === 'vendor' && (
                    <>
                        <Route 
                            path="/products" 
                            element={<ProductManager />} 
                        />
                        <Route 
                            path="/addvendor" 
                            element={<Vendor />} 
                        />
                    </>
                )}
                <Route path="/logout" element={<Logout setIsAuthenticated={setIsAuthenticated} />} />
                <Route 
                    path="/payment" 
                    element={<Payment />} 
                />
                <Route 
                    path="/admindashboard" 
                    element={<AdminDashboard />} 
                />
                <Route path="/vendordashboard" element={<VendorDashboard />} />
                <Route path="/updateproduct" element={<UpdateProduct />} />
                <Route path="/addaddressform" element={<AddressForm />} />
                <Route path="/addcategory" element={<CategoryForm />} />
                <Route path="/addsubcategory" element={<SubCategoryForm />} />

                <Route path="/allproducts" element={<AllProducts />} />
                <Route path="/allvendors" element={<AllVendors />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />


                <Route path="products/add" element={<ProductForm />} />
          <Route path="products/update/:productId" element={<ProductForm />} />

            </Routes>
        </>
    );
};

// Wrap App component with Router
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
