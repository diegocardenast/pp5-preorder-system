import React, { useState } from 'react';
import api from '../api';
import { Container, Form, Button } from 'react-bootstrap';
import styles from '../styles/Register.module.css';

const Register = () => {
    const [form, setForm] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('auth/register/', form)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                    <Form.Label className={styles.text} >Username</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label className={styles.text}>Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className={styles.text}>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} required />
                </Form.Group>
                <Button type="submit" className={styles.btn}>Register</Button>
            </Form>
        </Container>
    );
};

export default Register;