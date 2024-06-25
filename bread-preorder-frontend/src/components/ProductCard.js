import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard = ({ product, onSelect }) => {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" onClick={() => onSelect(product)}>Select</Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;