import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { Container, Form, Button } from 'react-bootstrap';
import styles from '../styles/Login.module.css';

const Login = ({ setIsAuthenticated }) => {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('auth/login/', form)
            .then(response => {
                setIsAuthenticated(true);
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formEmail">
                    <Form.Label className={styles.text} >Email</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label className={styles.text} >Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} required />
                </Form.Group>
                <Button type="submit" className={styles.btn} >Login</Button>
            </Form>
        </Container>
    );
};

export default Login;