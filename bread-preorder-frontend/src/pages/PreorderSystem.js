import React, { useState, useEffect } from 'react';
import api from '../api';
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

const PreorderSystem = () => {
    const [sellingPoints, setSellingPoints] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedSellingPoint, setSelectedSellingPoint] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [order, setOrder] = useState([]);
    const [show, setShow] = useState(false);
    const [currentProduct, setCurrentProduct] = useState(null);

    useEffect(() => {
        api.get('sellingPoint/')
            .then(response => setSellingPoints(response.data.results))
            .catch(error => console.error(error));

        api.get('bread-products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleSelectProduct = (product) => {
        setCurrentProduct(product);
        setShow(true);
    };

    const handleAddToOrder = (productDetails) => {
        setOrder([...order, productDetails]);
        setShow(false);
    };

    const handleSubmitOrder = () => {
        // Submit order logic
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formSellingPoint">
                        <Form.Label>Selling Point</Form.Label>
                        <Form.Control as="select" onChange={(e) => setSelectedSellingPoint(e.target.value)}>
                            <option value="">Select Selling Point</option>
                            {sellingPoints.map(sp => (
                                <option key={sp.id} value={sp.id}>{sp.name}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formPickupDate">
                        <Form.Label>Pick-Up Date</Form.Label>
                        <Form.Control type="date" onChange={(e) => setPickupDate(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={6} md={4}>
                        <ProductCard product={product} onSelect={handleSelectProduct} />
                    </Col>
                ))}
            </Row>
            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{currentProduct?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Product details form */}
                    <Button onClick={() => handleAddToOrder(currentProduct)}>Add to Order</Button>
                </Modal.Body>
            </Modal>
            <Row>
                <Col>
                    <h3>Your Order</h3>
                    <ul>
                        {order.map((item, index) => (
                            <li key={index}>{item.name} - {item.quantity} - {item.totalPrice} EUR</li>
                        ))}
                    </ul>
                    <Button onClick={handleSubmitOrder}>Submit Order</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default PreorderSystem;