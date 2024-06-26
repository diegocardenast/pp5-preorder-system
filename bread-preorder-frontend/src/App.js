import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./api/axiosDefaults";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import CustomNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Breads from "./pages/Breads";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PreorderSystem from "./pages/PreorderSystem";
import Account from "./pages/Account";
import ContactUs from "./pages/ContactUs";
import YourOrders from "./pages/YourOrders";
import ManageProducts from "./pages/ManageProducts";
import ManageSellingPoints from "./pages/ManageSellingPoints";

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/breads" element={<Breads />} />
        <Route path="/preorder" element={<PreorderSystem />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/orders" element={<YourOrders />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route
          path="/manage-selling-points"
          element={<ManageSellingPoints />}
        />
        <Route render={() => <p>Page not found!</p>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
