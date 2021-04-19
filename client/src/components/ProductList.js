import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import { AppContext } from '../App';

function ProductList() {
    const [products, setProducts] = useState();
    const url = "http://localhost:8080";
    const history = useHistory();
    const context = useContext(AppContext);

async function getProductList() {
    let res = await axios.get(url);
    console.log(res.data);
    setProducts(res.data);
}

    useEffect(() => {
        getProductList();
    },[])

    function getProductTable() {
        if(products==null){
            return null
        } 
        return (
            products.map(p => {
                return(
                    <tr key={p.id} onClick={() => productClicked(p)}> 
                        <td>{p.id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                    </tr>
                );
            })
        );
    }

    function productClicked(product){
        let appState = Object.assign({}, context.appState);
        appState.product = product;
        context.setAppState(appState);
        localStorage.setItem("product", JSON.stringify(product));
        history.push("/detail");
    }



    return (
        <Container fluid>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {getProductTable()}
                </tbody>
            </Table>
        </Container>
    )
}

export default ProductList

