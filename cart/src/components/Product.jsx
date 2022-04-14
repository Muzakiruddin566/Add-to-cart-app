import React from 'react'
import { Col,Card,Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import {handleAddToCart} from '../action/action';
export default function Product(props) {
    const dispatch = useDispatch();
    const handleCartEvent = (id,Name,price)=>{ 
        dispatch(handleAddToCart({id,Name,price,quantity:1}));
    }
    return (
        <Col md={4} className="mt-5">
            <Card>
                <Card.Img variant="top" src={`/Images/${props.obj.ProductImages}`} alt={props.obj.productName} />
                <Card.Body>
                    <Card.Title>{props.obj.productName}</Card.Title>
                    <Card.Text>
                        {props.obj.price}
                    </Card.Text>
                    <Button variant="primary" onClick={e=>handleCartEvent(props.obj.productID,props.obj.productName,props.obj.price)}>Add To Cart</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}
