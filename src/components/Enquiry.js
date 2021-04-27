import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

export const Enquiry = (props) => (
    <Form>
        <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name*</Form.Label>
            <Form.Control type="name" placeholder="Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Mobile no.*</Form.Label>
            <Form.Control placeholder="" />
        </Form.Group>

        <Form.Group as={Col} id="formGridFeedback">
            <Form.Label>Query*</Form.Label>
            <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
)