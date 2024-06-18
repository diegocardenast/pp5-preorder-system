import React, { useState, useEffect } from 'react';
import api from '../api';

const Bread = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('Bread-products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <h3>{product.price}</h3>
                        <h3>{product.pricePerKilogram}</h3>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bread;