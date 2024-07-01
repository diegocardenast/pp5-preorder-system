import { Route, Switch } from 'react-router-dom';
import './api/axiosDefaults';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PreorderSystem from './pages/PreorderSystem';
import Account from './pages/Account';
import ContactUs from './pages/ContactUs';
import YourOrders from './pages/YourOrders';
import ManageProducts from './pages/ManageProducts';
import ManageSellingPoints from './pages/ManageSellingPoints';


function App() {
    return (
        <div className={styles.App}>
            <NavBar />
                <Container>
                    <Switch>        
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/preorder" element={<PreorderSystem />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/orders" element={<YourOrders />} />
                        <Route path="/manage-products" element={<ManageProducts />} />
                        <Route path="/manage-selling-points" element={<ManageSellingPoints />} />
                        <Route render={() => <p>Page not found!</p>} />
                    </Switch>
                </Container>
            <Footer />
        </div>
    );
};

export default App;