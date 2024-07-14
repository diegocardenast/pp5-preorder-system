import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/hofpfistereiLogo.png";
import styles from "../styles/Navbar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import axios from "axios";
import useClickOutsideToggle from "../hook/useClickOutsideToggle";


const NavBar = () => {
  // This function renders the Navbar of the App
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const adminIcons = (
    // Options that appear for admin Users
    <>
      <Nav.Link as={Link} to="/manage-products" className={styles.navOptions}>
        <i className="fa-solid fa-pen-to-square"></i>Edit Products
      </Nav.Link>

      <Nav.Link as={Link} to="/account" className={styles.navOptions}>
        <i className="fa-solid fa-circle-user"></i>Account
      </Nav.Link>

      <Nav.Link as={Link} to="/products" className={styles.navOptions}>
        <i className="fa-solid fa-bread-slice"></i>Breads
      </Nav.Link>

      <Nav.Link as={Link} to="/contact" className={styles.navOptions}>
        <i className="fa-solid fa-envelope"></i>Contact
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
  const loggedInIcons = (
    // Options that appear for loggedIn Users
    <>
      <Nav.Link as={Link} to="/account" className={styles.navOptions}>
        <i className="fa-solid fa-circle-user"></i>Account
      </Nav.Link>

      <Nav.Link as={Link} to="/products" className={styles.navOptions}>
        <i className="fa-solid fa-bread-slice"></i>Breads
      </Nav.Link>

      <Nav.Link as={Link} to="/contact" className={styles.navOptions}>
        <i className="fa-solid fa-envelope"></i>Contact
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
    // Options that appear for loggedOut Users
    <>
      <Nav.Link as={Link} to="/login" className={styles.navOptions}>
        <i className="fa-solid fa-right-to-bracket"></i>Login
      </Nav.Link>

      <Nav.Link as={Link} to="/register" className={styles.navOptions}>
        <i className="fa-solid fa-user-plus"></i>Register
      </Nav.Link>

      <Nav.Link as={Link} to="/contact" className={styles.navOptions}>
        <i className="fa-solid fa-envelope"></i>Contact
      </Nav.Link>
    </>
  );

  return (
    <Navbar
      className={styles.navbar}
      expand="md"
      expanded={expanded}
      variant="dark"
    >
      <Container className="container">
        <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/" className={styles.navOptions}>
              <i className="fas fa-home"></i>Home
            </Nav.Link>

            {/* Logic to render the different options depending on the type of user */}
            {currentUser
              ? currentUser.is_staff
                ? adminIcons
                : loggedInIcons
              : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand className={styles.logoBrand}>
          <img
            src={logo}
            alt="Hofpfisterei Logo"
            className={styles.responsive}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
