import React, { useState, useEffect } from "react";
import api from "../api";
import { Container, Form, Button } from "react-bootstrap";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../context/CurrentUserContext";

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
      await api.put(`/dj-rest-auth/user/${currentUser.id}`, currentUser);
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
            name="name"
            value={currentUser.first_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            value={currentUser.last_name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="isAdmin">
          <Form.Label>Admin Access</Form.Label>
          <Form.Control
            type="boolean"
            name="adminAccess"
            value={currentUser.is_superuser}
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
