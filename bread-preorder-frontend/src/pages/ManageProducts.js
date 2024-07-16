import React, { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Alert } from "react-bootstrap";
import ManageProductsStyle from "../styles/ManageProducts.module.css";
import axios from "axios";


//Edit products page - Admin function
const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    description: "",
    canBeSliced: false,
    canBeInQuarters: false,
    price: "",
    pricePerKilogram: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  // Fetch the Products
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("bread/");
      setProducts(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleShow = (product = null) => {
    if (product) {
      setForm(product);
    } else {
      setForm({
        name: "",
        description: "",
        canBeSliced: false,
        canBeInQuarters: false,
        price: "",
        pricePerKilogram: "",
      });
    }
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (form.id) {
        await axios.put(`bread/edit/${form.id}/`, form); // Edition request
        setAlertMessage('Update successful!');
        setAlertVariant('success');
      } else {
        await axios.post("bread/create/", form); // Creation request
        setAlertMessage('New product added!');
        setAlertVariant('success');
      }
      fetchProducts();
      handleClose();
    } catch (error) {
      setAlertMessage('An error occurred. Please try again.');
      setAlertVariant('danger');
      console.error(error);
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`bread/edit/${id}/`); // Deletion request
      fetchProducts();
      setAlertMessage('Successfully Deleted!');
      setAlertVariant('success');
    } catch (error) {
      console.error(error);
      setAlertMessage('An error occurred. Please try again.');
      setAlertVariant('danger');
    }
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className={ManageProductsStyle}>
      <h2>Manage Products</h2>
      {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}
      <Button variant="primary" onClick={() => handleShow()}>
        Add Product
      </Button>
      <div className={ManageProductsStyle.responsiveTable}>
        <Table striped bordered hover className={ManageProductsStyle.tableContent}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Can Be Sliced</th>
              <th>Can Be In Quarters</th>
              <th>Price</th>
              <th>Price per Kilogram</th>
              <th>Actions</th>
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
                <td>
                  <Button variant="warning" onClick={() => handleShow(product)}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      
      <Modal show={show} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>{form.id ? "Edit Product" : "Add Product"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={form.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formCanBeSliced">
              <Form.Check
                type="checkbox"
                name="canBeSliced"
                label="Can Be Sliced"
                checked={form.canBeSliced}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
            <Form.Group controlId="formCanBeInQuarters">
              <Form.Check
                type="checkbox"
                name="canBeInQuarters"
                label="Can Be In Quarters"
                checked={form.canBeInQuarters}
                onChange={handleCheckboxChange}
              />
            </Form.Group>
            <Form.Group controlId="formPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPricePerKilogram">
              <Form.Label>Price per Kilogram</Form.Label>
              <Form.Control
                type="number"
                name="pricePerKilogram"
                value={form.pricePerKilogram}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {form.id ? "Update Product" : "Add Product"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ManageProducts;
