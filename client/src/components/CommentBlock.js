import React from 'react'
import { Card } from 'react-bootstrap'

function CommentBlock(props) {
    return (
        <Card style={{ width: '100vw' }}>
            <Card.Body>
                <Card.Title>{props.comment.name} wrote:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.comment.sentiment ? "Positive Comment" : "Negative Comment"}</Card.Subtitle>
                <Card.Text>
                    {props.comment.text}
                </Card.Text>
                <Card.Link href="#">Reply</Card.Link>
                <Card.Link href="#">Report</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default CommentBlock
