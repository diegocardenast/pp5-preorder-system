import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/hofpfistereiLogo.png";
import styles from "../styles/Navbar.module.css";
import { useCurrentUser, useSetCurrentUser } from "../context/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInIcons = (
    <>
      <Nav.Link as={Link} to={`/account/${currentUser?.id}`} className={styles.navOptions}>
        <i className="fa-solid fa-circle-user"></i>Account
      </Nav.Link>

      <Nav.Link as={Link} to="/orders" className={styles.navOptions}>
        <i className="fa-solid fa-receipt"></i>Your Orders
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/"
        onClick={handleLogOut}
        className={styles.navOptions}
      >
        <i className="fa-solid fa-right-from-bracket"></i>Log Out
      </Nav.Link>

      <span className={styles.userName}>{currentUser?.username}</span>
    </>
  );
  const loggedOutIcons = (
    <>
      <Nav.Link as={Link} to="/login" className={styles.userName}>
        <i className="fa-solid fa-right-to-bracket"></i>Login
      </Nav.Link>

      <Nav.Link as={Link} to="/register" className={styles.navOptions}>
        <i className="fa-solid fa-user-plus"></i>Register
      </Nav.Link>
    </>
  );
  const adminIcons = (
    <>
      <Nav.Link as={Link} to="/manage-products" className={styles.navOptions}>
        <i className="fa-solid fa-pen-to-square"></i>Products
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/manage-selling-points"
        className={styles.navOptions}
      >
        <i className="fa-solid fa-store"></i>Stores
      </Nav.Link>
    </>
  );

  return (
    <Navbar
      className={styles.navbar}
      expand="lg"
    >
    <Container>
      <Navbar.Toggle />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={Link} to="/" className={styles.navOptions}>
            <i className="fas fa-home"></i>Home
          </Nav.Link>

          {currentUser ? loggedInIcons : loggedOutIcons}
          {currentUser ? currentUser.is_staff ? adminIcons : <p></p> : <p></p>}
        </Nav>
      </Navbar.Collapse>

      <Navbar.Brand className={styles.logoBrand}>
        <img src={logo} alt="Hofpfisterei Logo" className={styles.responsive} />
      </Navbar.Brand>
    </Container>
    </Navbar>
  );
};

export default NavBar;
