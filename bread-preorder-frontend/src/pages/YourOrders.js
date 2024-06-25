import React, { useState, useEffect } from 'react';
import api from '../api';
import { Table, Container } from 'react-bootstrap';

const YourOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await api.get('preorders/');
            setOrders(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <h2>Your Orders</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Selling Point</th>
                        <th>Preorder Price</th>
                        <th>Status</th>
                        <th>Pick-Up Date</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.sellingPoint.name}</td>
                            <td>{order.preorderPrice} EUR</td>
                            <td>{order.status}</td>
                            <td>{order.pickUpDate}</td>
                            <td>{order.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default YourOrders;