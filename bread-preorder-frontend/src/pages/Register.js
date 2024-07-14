import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Form,
    Button,
    Container,
    Alert,
  } from "react-bootstrap";
import styles from '../styles/Register.module.css';
import axios from "axios";


// User register form
const Register = () => {
    const [registerData, setRegisterData] = useState({ 
        username: '',
        email: '',  
        password1: '', 
        password2: '' 
    });

    const { username, email, password1, password2 } = registerData;

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const handleChange = (e) => {
        setRegisterData({ 
            ...registerData, 
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/dj-rest-auth/registration/', registerData)
            history.push('/login');
        } catch(err){
            setErrors(err.response?.data);
        }
        
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className={styles.text} >Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        name="username" 
                        onChange={handleChange}
                        value={username} 
                        required 
                    />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
                ))}
                
                <Form.Group controlId="email">
                    <Form.Label className={styles.text} >Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        onChange={handleChange}
                        value={email} 
                        required 
                    />
                </Form.Group>
                {errors.email?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
                ))}

                <Form.Group controlId="password1">
                    <Form.Label className={styles.text}>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password1" 
                        onChange={handleChange}
                        value={password1} 
                        required 
                    />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
                ))}

                <Form.Group controlId="password2">
                    <Form.Label className={styles.text}>Confirm password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password2" 
                        onChange={handleChange}
                        value={password2} 
                        required
                    />
                </Form.Group>
                {errors.password2?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
                ))}

                <Button 
                    type="submit" 
                    className={styles.btn}
                >
                    Register
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

export default Register;