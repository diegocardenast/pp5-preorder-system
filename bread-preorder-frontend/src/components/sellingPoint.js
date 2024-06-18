import React, { useState, useEffect } from 'react';
import api from '../api';

const SellingPoint = () => {
    const [sellingPoints, setSellingPoints] = useState([]);

    useEffect(() => {
        api.get('Selling-points/')
            .then(response => setSellingPoints(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Selling Points</h1>
            <ul>
                {sellingPoints.map(sellingPoint => (
                    <li key={sellingPoint.id}>
                        <h2>{sellingPoint.name}</h2>
                        <h3>{sellingPoint.address}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SellingPoint;