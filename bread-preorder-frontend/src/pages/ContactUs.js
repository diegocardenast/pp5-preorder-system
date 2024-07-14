import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';


// Contact form 
const ContactUs = () => {
    const [form, setForm] = useState({ 
        name: '', 
        email: '', 
        message: '' 
    });

    const { name, email, message } = form;

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('success');
    

    const handleChange = (e) => {
        setForm({ 
            ...form, 
            [e.target.name]: e.target.value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('contactUs/', form);
                setAlertMessage('Your message has been sent successfully!');
                setAlertVariant('success');
                setForm({ name: '', email: '', message: '' });
        } catch (error) {
            setAlertMessage('An error occurred. Please try again.');
            setAlertVariant('danger');
        }
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 5000);
    };

    return (
        <Container>
            <h2>Contact Us</h2>
            {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        value={message}
                        onChange={handleChange}
                        rows={4}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Message
                </Button>
            </Form>
        </Container>
    );
};

export default ContactUs;
