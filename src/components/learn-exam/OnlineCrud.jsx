import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useProduct } from '../../hooks/useProduct';
import Nav from './components/nav/Nav';
import { Container } from 'react-bootstrap';
import './OnlineCrud.css';

function OnlineCrud() {
    const { products, setProducts } = useProduct();

    console.log(products);


    return (
        <div className="online-store">
            <Container>
                <Nav />
                
            </Container>
        </div>
    )
}

export default OnlineCrud