import React from 'react';
import NavBar from './Navbar';
import { Row, Col, Container} from 'react-bootstrap';
import Product from './Product';
export default function Products() {
    const Products = [
        {
            productID: 1,
            productName: "Dell Laptop",
            ProductImages: "Dell.jpg",
            price:25000,
        },
        {
            productID: 2,
            productName: "Dell Laptop",
            ProductImages: "Dell.jpg",
            price:25000,
        },
        {
            productID: 3,
            productName: "Dell Laptop",
            ProductImages: "Dell.jpg",
            price:25000,
        },
        {
            productID: 4,
            productName: "Dell Laptop",
            ProductImages: "Dell.jpg",
            price:25000,
        },
        {
            productID: 5,
            productName: "Dell Laptop",
            ProductImages: "Dell.jpg",
            price:25000,
        },
        {
            productID: 6,
            productName: "Dell Laptop",
            ProductImages: "Dell.jpg",
            price:25000,
        }
    ]
    
    
    return (
        <>
            <NavBar />
            <Container className='mt-5'>
                <Row>
                    <Col xl={12}>
                        Products...
                    </Col>
                </Row>
                <Row>
                    {
                        Products.map((res, i) => {
                            return <Product obj={res} key={i} />
                        })
                    }
                </Row>
            </Container>
        </>
    )
}
