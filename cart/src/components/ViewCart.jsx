import React from 'react'
import NavBar from './Navbar';
import { Table, Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { handleDeleteCart, handleIncrementCart, handleDecrementCart } from '../action/action';
import axios from 'axios';
import { useState } from 'react';
export default function ViewCart() {
  const [Bill, setBill] = useState(0)
  // const total = 
  // setBill(total)
  // get Cart Items
  const myState = useSelector((state) => state.handlerReducer);
  const dispatch = useDispatch();
  // Remove Item from Cart
  const handleRemove = (id) => {
    dispatch(handleDeleteCart(id));
  }
  // Increase Quantity
  const handleIncrement = (id) => {
    dispatch(handleIncrementCart(id));
    console.log(myState);
  }
  // Decrease Quantity
  const handleDecrement = (id) => {
    dispatch(handleDecrementCart(id));
    console.log(myState);
  }

  // Check Out
  const handleCheckOut = async (e) => {
    e.preventDefault();
    let email = null;
    while (email == null) {
      email = prompt("Enter the Email for checkout");
    }
    const sum = myState.arr.reduce((accumulator, item) => {
      return accumulator + item.price;
    }, 0)
    try {
      const res = await axios.post('/send',{email,sum})
      if(res.status == 201){
        alert("Thank you so Much for Shopping Please Check Email");
      }
    } catch (error) {
      console.log(error)
    }
    console.log(email, sum);
  }



  return (
    <>
      <NavBar />
      <Container className='mt-5'>
        <Row>
          <Col lg={12}>
            <Table striped bordered hover responsive size="sm" className='text-center'>
              <thead>
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Product Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  myState.arr.map((res, i) => {
                    return <tr>
                      <td>{res.id}</td>
                      <td>{res.Name}</td>
                      <td>{res.price}</td>
                      <td>
                        <Button variant="primary" style={{ "marginRight": "5px" }} onClick={e => handleIncrement(res.id)}>+</Button>

                        {res.quantity}
                        <Button variant="primary" style={{ "marginLeft": "5px" }} className='ml-2' onClick={e => handleDecrement(res.id)}>-</Button>
                      </td>
                      <td>
                        <Button variant="danger" onClick={e => handleRemove(res.id)}>Remove to Cart</Button>
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className='mt-5'>
          <h2>Check out</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Total Items</th>
                <th>Total Price </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{myState.arr.length}</td>
                <td>{
                  myState.arr.reduce((accumulator, item) => {
                  return accumulator + item.price;
                }, 0)}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary" onClick={handleCheckOut}>CheckOut</Button>
        </Row>

      </Container>
    </>
  )
}
