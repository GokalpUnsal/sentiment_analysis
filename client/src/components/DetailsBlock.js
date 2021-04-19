import React, { useContext } from 'react'
import { Card, Col, Row, Container, Carousel, Table } from 'react-bootstrap'
import { AppContext } from '../App';
import "holderjs";



function DetailsBlock() {
    const context = useContext(AppContext);
    let isExist = context.appState.product != null;

    function getDetails(){
        let p = context.appState.product;
        if(!isExist){
            p = JSON.parse(localStorage.getItem("product"));
        }
        return(
            <Table bordered>
                <tbody>
                <tr>
                        <th>Name:</th>
                        <td>{p.name}</td>
                    </tr>
                    <tr>
                        <th>Description</th>
                        <td>{p.description }</td>
                    </tr>
                    <tr>
                        <th>Price:</th>
                        <td>{p.price}</td>
                    </tr>
                </tbody>
            </Table>

        );
    }


    return (
        <Card style={{ width: '100vw' }}>
            <Card.Body>

                <Row>
                    <Col sm="6">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Picture 1&bg=373940"
                                    alt="Picture 1"
                                />
                                <Carousel.Caption>
                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Picture 2&bg=282c34"
                                    alt="Picture 2"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="holder.js/800x400?text=Picture 3&bg=20232a"
                                    alt="Picture 3"
                                />

                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm ="6">
                        {getDetails()}
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}

export default DetailsBlock
