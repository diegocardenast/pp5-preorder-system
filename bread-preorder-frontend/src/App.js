import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PreorderSystem from './pages/PreorderSystem';
import Account from './pages/Account';
import YourOrders from './pages/YourOrders';
import ManageProducts from './pages/ManageProducts';
import ManageSellingPoints from './pages/ManageSellingPoints';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <Router>
            <CustomNavbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login setIsAuthenticated={isAuthenticated} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/preorder" element={<PreorderSystem />} />
                <Route path="/account" element={<Account />} />
                <Route path="/orders" element={<YourOrders />} />
                <Route path="/manage-products" element={<ManageProducts />} />
                <Route path="/manage-selling-points" element={<ManageSellingPoints />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;