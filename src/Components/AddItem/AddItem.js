import axios from 'axios';
import React from 'react';
import { Form } from 'react-bootstrap';

const AddItem = () => {

    
  const handleOnSubmit = e => { 
    e.preventDefault();
    console.log("is it Coming?", e.target.name.value);  
 const data = {
     name: e.target.name.value,
     description: e.target.description.value,
      price: e.target.price.value,
      quantity: e.target.quantity.value,
      sold: "0",
      supplier: e.target.supplier.value,
      img: e.target.img.value,
  } 
        axios.post('http://localhost:5000/item',data)
        .then(response => console.log(response.data.id)); 
        e.target.reset();
      
  };
    return (
        <div className='container w-50'>
            <h3>Welcome to add item</h3>
            <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" name="name" placeholder="Item Name" autoFocus required/>
            </Form.Group>
            <Form.Group
              className="mb-3"              
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" name="description" placeholder="Description" rows={3} />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control type="text" name="price" placeholder="Price" required/>
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Control type="text" name="quantity" placeholder="Quantity" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Control type="text" name="supplier" placeholder="Supplier" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
              <Form.Control type="text" name="img" placeholder="Image URL" required/>
            </Form.Group>
            <button className='btn btn-warning' type="submit">Submit</button>
          </Form>
        </div>
    );
};

export default AddItem;