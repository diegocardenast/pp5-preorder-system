import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Breads from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import ContactUs from "./pages/ContactUs";
import ManageProducts from "./pages/ManageProducts";


// App function with all the routes to the differen pages
function App() {


  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/manage-products"  render={() => <ManageProducts />} />
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/products" render={() => <Breads />} />
          <Route exact path="/account" render={() => <Account />} />
          <Route exact path="/contact" render={() => <ContactUs />} />
          <Route render={() => <p>Page not found or access not authorized!</p>} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
