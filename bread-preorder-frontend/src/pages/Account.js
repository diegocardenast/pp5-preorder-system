import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";
import axios from "axios";

const Account = () => {
  const currentUser = useCurrentUser();
  const setUser = useSetCurrentUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...currentUser };
      delete payload.username;
      delete payload.date_joined;
      delete payload.last_login;
      console.log(payload);
      await axios.patch(`dj-rest-auth/user/`, payload);
      history.push("/");
      // fetchProfile();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <h2>Your Account</h2>
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
