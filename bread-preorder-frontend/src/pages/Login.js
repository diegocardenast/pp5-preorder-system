import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import styles from "../styles/Login.module.css";
import { useSetCurrentUser } from "../context/CurrentUserContext";

function LoginForm() {
  const setCurrentUser = useSetCurrentUser();

  const [loginData, setLoginData] = useState({
    username: "acmantilla29",
    password: "Diego3751@",
  });
  const { username, password } = loginData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("dj-rest-auth/login/", loginData);
      setCurrentUser(data.user);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label className={styles.text}>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {errors.username?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password">
          <Form.Label className={styles.text}>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        {errors.password?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Button type="submit" className={styles.btn}>
          Login
        </Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning" className="mt-3">
            {message}
          </Alert>
        ))}
      </Form>
    </Container>
  );
}

export default LoginForm;
