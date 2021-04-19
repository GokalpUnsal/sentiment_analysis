import React, { useContext } from 'react'
import { Carousel, Col, Container, Row, Image } from 'react-bootstrap';
import { AppContext } from '../App';
import CommentBlock from './CommentBlock';
import AddCommentBlock from './AddCommentBlock';
import DetailsBlock from './DetailsBlock';



const ProductDetails = () => {
const context = useContext(AppContext);

function getComments(){
    let p = context.appState.product;
    if(p==null){
        p = JSON.parse(localStorage.getItem("product"));
    }return (
    p.comments.map(c => {
        return(
            <Row>
                <CommentBlock comment={c}/>
            </Row>
        );
    })
    );

}

    return (
        <Container >
            <Row>   
                <DetailsBlock/>
            </Row>
            <Row>
                <Col>
                <Row>
                    <AddCommentBlock/>   
                    </Row>
                {
                getComments()
                }
                </Col>
            </Row>
           
        </Container>
    )
}

export default ProductDetails
