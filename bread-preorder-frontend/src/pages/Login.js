import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { Container, Form, Button } from 'react-bootstrap';
import styles from '../styles/Login.module.css';

const Login = ({ setIsAuthenticated }) => {
    const [login, setLogin] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('auth/login/', login)
            .then(response => {
                setIsAuthenticated(true);
                navigate('/');
            })
            .catch(error => console.error(error));
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className={styles.text} >Username</Form.Label>
                    <Form.Control 
                        type="username" 
                        name="username" 
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
                    <Form.Label className={styles.text} >Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        onChange={handleChange} 
                        required 
                    />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
                ))}

                <Button 
                    type="submit" 
                    className={styles.btn} 
                >
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
};

export default Login;