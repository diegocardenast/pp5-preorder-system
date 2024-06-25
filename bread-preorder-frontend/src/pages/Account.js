import React, { useState, useEffect } from 'react';
import api from '../api';
import { Container, Form, Button } from 'react-bootstrap';

const Account = () => {
    const [profile, setProfile] = useState({
        userName: '',
        email: '',
        createdAt: '',
        updatedAt: '',
        lastLogin: ''
    });

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await api.get('profile/');
            setProfile(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put('profile/', profile);
            fetchProfile();
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
                    <Form.Control type="text" name="userName" value={profile.userName} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={profile.email} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update Profile
                </Button>
            </Form>
        </Container>
    );
};

export default Account;