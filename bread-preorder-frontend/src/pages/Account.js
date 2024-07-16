import React,  { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

// Account Page
const Account = () => {
  const currentUser = useCurrentUser();
  const setUser = useSetCurrentUser();
  const history = useHistory();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...currentUser, [name]: value });
  };

  // Updates Payload
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...currentUser };
      delete payload.username;
      delete payload.date_joined;
      delete payload.last_login;
      console.log(payload);
      await axios.patch(`dj-rest-auth/user/`, payload);
      setAlertMessage('Update successful!');
      setAlertVariant('success');
      history.push("/");
    } catch (error) {
      console.error(error);
      setAlertMessage('An error occurred. Please try again.');
      setAlertVariant('danger');
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <Container>
      <h2>Your Account</h2>
      {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUserName">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            disabled
            value={currentUser.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            disabled
            value={currentUser.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={currentUser.first_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={currentUser.last_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Profile (Save)
        </Button>
      </Form>
    </Container>
  );
};

export default Account;
