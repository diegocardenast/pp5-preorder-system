import React, { useState, useEffect } from 'react';
import api from '../api';
import { Table, Button, Modal, Form } from 'react-bootstrap';

const ManageSellingPoints = () => {
    const [sellingPoints, setSellingPoints] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        id: null,
        name: '',
        address: '',
        googleMapsLink: ''
    });

    useEffect(() => {
        fetchSellingPoints();
    }, []);

    const fetchSellingPoints = async () => {
        try {
            const response = await api.get('selling-points/');
            setSellingPoints(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleShow = (sellingPoint = null) => {
        if (sellingPoint) {
            setForm(sellingPoint);
        } else {
            setForm({
                id: null,
                name: '',
                address: '',
                googleMapsLink: ''
            });
        }
        setShow(true);
    };

    const handleClose = () => setShow(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (form.id) {
                await api.put(`selling-points/${form.id}/`, form);
            } else {
                await api.post('selling-points/', form);
            }
            fetchSellingPoints();
            handleClose();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await api.delete(`selling-points/${id}/`);
            fetchSellingPoints();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="manage-selling-points">
            <h2>Manage Selling Points</h2>
            <Button variant="primary" onClick={() => handleShow()}>Add Selling Point</Button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Google Maps Link</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sellingPoints.map(sp => (
                        <tr key={sp.id}>
                            <td>{sp.name}</td>
                            <td>{sp.address}</td>
                            <td><a href={sp.googleMapsLink} target="_blank" rel="noopener noreferrer">Link</a></td>
                            <td>
                                <Button variant="warning" onClick={() => handleShow(sp)}>Edit</Button>
                                <Button variant="danger" onClick={() => handleDelete(sp.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{form.id ? 'Edit Selling Point' : 'Add Selling Point'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={form.name} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" value={form.address} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group controlId="formGoogleMapsLink">
                            <Form.Label>Google Maps Link</Form.Label>
                            <Form.Control type="url" name="googleMapsLink" value={form.googleMapsLink} onChange={handleChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {form.id ? 'Update Selling Point' : 'Add Selling Point'}
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ManageSellingPoints;