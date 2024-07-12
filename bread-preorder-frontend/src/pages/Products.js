import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const handleMount = async () => {
      try {
        console.log("before fetchind data from backend");
        axios.get("bread/").then((res) => {
          console.log(res);
          setProducts(res.data.results);
        });
        console.log("after fetchind data from backend");
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);

  return (
    <div className="manage-products">
      <h2>Products</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Can Be Sliced</th>
            <th>Can Be In Quarters</th>
            <th>Price</th>
            <th>Price per Kilogram</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.canBeSliced ? "Yes" : "No"}</td>
              <td>{product.canBeInQuarters ? "Yes" : "No"}</td>
              <td>{product.price}</td>
              <td>{product.pricePerKilogram}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Products;
