import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/hofpfistereiLogo.png";
import styles from "../styles/Navbar.module.css";
import { useCurrentUser } from "../context/CurrentUserContext";

const CustomNavbar = () => {
  const currentUser = useCurrentUser();

  const loggedInIcons = (
    <>
      <Nav.Link as={Link} to="/account" className={styles.navOptions}>
        <i class="fa-solid fa-circle-user"></i>Account
      </Nav.Link>

      {/* For Phase 2 of the project */}
      {/* <Nav.Link as={Link} to="/orders" className={styles.navOptions}>
        <i class="fa-solid fa-receipt"></i>Your Orders
      </Nav.Link> */}

      <Nav.Link as={Link} to="/orders" className={styles.navOptions}>
        <i class="fa-solid fa-bread-slice"></i>Breads
      </Nav.Link>

      <Nav.Link as={Link} to="/contact" className={styles.navOptions}>
        <i class="fa-solid fa-envelope"></i>Contact
      </Nav.Link>
      <Nav.Link
        as={Link}
        to="/"
        onClick={useCurrentUser(null)}
        className={styles.navOptions}
      >
        <i class="fa-solid fa-right-from-bracket"></i>Log Out
      </Nav.Link>

      <span className={styles.userName}>{currentUser?.username}</span>
    </>
  );
  const loggedOutIcons = (
    <>
      <Nav.Link as={Link} to="/login" className={styles.navOptions}>
        <i class="fa-solid fa-right-to-bracket"></i>Login
      </Nav.Link>

      <Nav.Link as={Link} to="/register" className={styles.navOptions}>
        <i class="fa-solid fa-user-plus"></i>Register
      </Nav.Link>

      <Nav.Link as={Link} to="/contact" className={styles.navOptions}>
        <i class="fa-solid fa-envelope"></i>Contact
      </Nav.Link>
    </>
  );
  const adminIcons = (
    <>
      <Nav.Link as={Link} to="/manage-products" className={styles.navOptions}>
        <i class="fa-solid fa-pen-to-square"></i>Products
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/manage-selling-points"
        className={styles.navOptions}
      >
        <i class="fa-solid fa-store"></i>Stores
      </Nav.Link>
    </>
  );

  return (
    <Navbar
      className={styles.navbar}
      bg="primary"
      variant="dark"
      expand="lg"
      style={{ backgroundColor: "#596eb1" }}
    >
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
    </Navbar>
  );
};

export default CustomNavbar;
