import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Card, Col, Form, Row, Button } from 'react-bootstrap'
import { AppContext } from '../App';

function AddCommentBlock(props) {
    const context = useContext(AppContext);
    const [name, setName] = useState("");
    const [text, setText] = useState("");

    function handleName(event) {
        setName(event.target.value)
      }

      function handleText(event) {
          setText(event.target.value)
      }
      


    async function buttonClicked(e){
        let p = context.appState.product;
        if(p==null){
            p = JSON.parse(localStorage.getItem("product"));
        }
        console.log(name);
        let comment = {
            name:name,
            text:text,
            product:p,
            sentiment:true
        }
        await axios.post("http://localhost:5000/", comment);
        const res = await axios.get(context.appState.url + "/" + p.id);
        let appState = Object.assign({}, context.appState);
        appState.product = res.data;
        context.setAppState(appState);


    }

    return (
        <Card style={{ width: '100vw' }}>
            <Card.Body>
                <Card.Title>Add Comment</Card.Title>
                <Form.Group as={Row} controlId="formName">
                    <Form.Label column sm="1">
                        Name:
                    </Form.Label>
                    <Col sm="2">
                        <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={handleName}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formComment">
                <Form.Label column sm="1">
                        Comment:
                    </Form.Label>
                    <Col sm="11">
                        <Form.Control type="text" placeholder="Comment" name="text" value={text} onChange={handleText}/>
                    </Col>
                </Form.Group>
                <Button onClick={buttonClicked}>Submit</Button>
            </Card.Body>
        </Card>

    )
}

export default AddCommentBlock
