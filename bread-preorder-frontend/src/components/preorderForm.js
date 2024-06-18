import React, { useState, useEffect } from 'react';
import api from '../api';

const PreorderForm = () => {
    const [products, setProducts] = useState([]);
    const [sellingPoints, setSellingPoints] = useState([]);
    const [form, setForm] = useState({
        product: '',
        selling_point: '',
        pickup_date: '',
        sliced: false,
        quantity: ''
    });

    useEffect(() => {
        api.get('Bread-products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error(error));
        api.get('Selling-points/')
            .then(response => setSellingPoints(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        api.post('Preorders/', form)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <select name="product" onChange={handleChange} required>
                <option value="">Select a product</option>
                {products.map(product => (
                    <option key={product.id} value={product.id}>{product.name}</option>
                ))}
            </select>

            <select name="selling_point" onChange={handleChange} required>
                <option value="">Select a selling point</option>
                {sellingPoints.map(point => (
                    <option key={point.id} value={point.id}>{point.name}</option>
                ))}
            </select>

            <input type="date" name="pickup_date" onChange={handleChange} required />
            
            <label>
                Sliced:
                <input type="checkbox" name="sliced" onChange={e => setForm({ ...form, sliced: e.target.checked })} />
            </label>

            <input type="int" name="quantity" onChange={handleChange} required />
            
            <input type="int" name="quarters" onChange={handleChange} />

            <button type="submit">Preorder</button>
        </form>
    );
};

export default PreorderForm;