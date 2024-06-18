import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bread from './components/bread';
import PreorderForm from './components/preorderForm';
import SellingPoint from './components/sellingPoint';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Bread />} />
                <Route path="/preorder" element={<PreorderForm />} />
                <Route path="/sellingPoint" element={<SellingPoint />} />
            </Routes>
        </Router>
    );
}

export default App;
