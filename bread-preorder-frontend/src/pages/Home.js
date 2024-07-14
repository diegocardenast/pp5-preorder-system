import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import indexImage from "../assets/indexImage.jpg";
import styles from "../styles/Home.module.css";
import { useCurrentUser } from "../context/CurrentUserContext";


//Homepage
const Home = () => {
  const currentUser = useCurrentUser();

  return (
    <Container className="text-center mt-4 mb-4">
      <Row>
        <Col className={styles.indexCol}>
          <img
            src={indexImage}
            alt="Women holding bread"
            className={styles.indexResponsive}
          />
        </Col>
      </Row>
      <Row>
        <Col className={styles.colPreorder}>
          <p className={styles.text}>
            Welcome to our bread preorder system. Order your fresh bread online
            and pick it up at your convenience.
          </p>
          {currentUser ? ( // logic to show the bread button if logged in 
            <Button
              as={Link}
              to="/products"
              variant="primary"
              size="lg"
              className={styles.btn}
            >
              Breads
            </Button>
          ) : (
            <p></p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
